import { Server as NetServer } from "http";
import { NextApiRequest } from "next";
import { Server as ServerIO } from "socket.io";

export const config = {
  api: {
    bodyParser: false,
  },
};

const ioHandler = (req: NextApiRequest, res: any) => {
  if (!res.socket.server.io) {
    const path = "/api/socket/io";
    const httpServer: NetServer = res.socket.server as any;
    try {
      const ioOptions = {
        path: path,
        addTrailingSlash: false,
        // Add any additional options if needed
      };
      const io = new ServerIO(httpServer, ioOptions);
      res.socket.server.io = io;
    } catch (error: any) {
      console.error("[WebSocket Setup Error]", error.message);
      res.status(500).end("Internal Server Error");
      return;
    }
  }
  res.end();
};

export default ioHandler;
