"use client";
import { createRoom } from "@/actions/chess/create-room";
import { Button } from "@/components/ui/button";
import { ROUTE_ROOM_PAGE } from "@/routes";
import Image from "next/image";
import { redirect } from "next/navigation";
import React, { useState } from "react";

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const handleCreateRoom = async () => {
    try {
      const { error, room } = await createRoom("hola");
      if (error) {
      }
      if (room?.id) {
        redirect(`${ROUTE_ROOM_PAGE}?${room.id}`);
      }
      console.log({ error, room });
    } catch (error) {
      console.log("Some Error Occured");
    }
  };
  return (
    <div className="grid grid-cols-2 justify-center items-center h-full w-full">
      <div className="text-center flex justify-center">
        <Image
          src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/lularobs/phpQJWmL4.png"
          alt="chess board image"
          width={500}
          height={500}
        />
      </div>
      <div className="flex flex-col items-center gap-y-8">
        <Button onClick={handleCreateRoom} className="bg-rose-800">
          Create Room
        </Button>
        <Button className="bg-green-600">Join Room </Button>
        <Button className="bg-blue-600">Join as Spectator</Button>
      </div>
    </div>
  );
};

export default HomePage;
