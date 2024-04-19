"use server";

import { useServerUser } from "@/hooks/use-server-user";
import { db } from "@/lib/db";
import { COLOR } from "@prisma/client";

export const createRoom = async (roomName: string) => {
  const serverUser = await useServerUser();
  if (!serverUser) return { error: "No Seesion Found" };
  try {
    const room = await db.chessRoom.create({
      data: {
        name: roomName,
        createdBy: {
          connect: { id: serverUser.id },
        },
        players: {
          create: {
            isCurrentPlayer: true,
            user: {
              connect: { id: serverUser.id },
            },
            color: COLOR.WHITE,
          },
        },
      },
      include: {
        players: true,
      },
    });
    return { room };
  } catch (error) {
    console.error("Error creating room:", error);
    return { error: "Failed to create room" };
  }
};
