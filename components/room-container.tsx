"use client";
import { useSocket } from "./provider/socket-provider";

const RoomContainer = () => {
  const { isConnected } = useSocket();
  console.log({ isConnected });
  return <p>{isConnected ? "Connected" : "Not Connected"}</p>;
};

export default RoomContainer;
