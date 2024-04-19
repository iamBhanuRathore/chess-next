import { useServerUser } from "@/hooks/use-server-user";
import { db } from "@/lib/db";
import { ROUTE_HOME_PAGE } from "@/routes";
import { redirect } from "next/navigation";
import React from "react";

const RoomPage = async ({ params }: { params: { roomId: string } }) => {
  const serverUser = await useServerUser();
  if (!params.roomId) {
    redirect(ROUTE_HOME_PAGE);
  }
  const room = await db.chessRoom.findUnique({
    where: {
      id: params.roomId,
      players: {
        some: {
          id: serverUser?.id,
        },
      },
    },
  });
  console.log({ room });
  return <div>RoomPage</div>;
};

export default RoomPage;
