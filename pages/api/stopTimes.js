import { resStatusType } from "@/utils/constants";
import {
  prismaGetStopTime,
  prismaGetStopTimes,
} from "@/utils/prisma/stopTimes";

const handler = async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        let data = null;
        if (req.query?.unique) {
          data = await prismaGetStopTime(req.query);
        } else {
          data = await prismaGetStopTimes(req.query);
        }
        res.status(resStatusType.SUCCESS).json(data);
      } catch (error) {
        res.status(resStatusType.BAD_REQUEST).json(error.message);
      }
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(resStatusType.NOT_ALLOWED).end(`Method ${method} Not Allowed`);
  }
};

export default handler;
