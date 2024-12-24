import express, { IRouter, Request, Response } from "express";
import {
  getByBigTerror,
  getFrequency,
  getByBigAttack,
  getBy5BigTerror,
  getFrequencyByArg,
} from "../Services/RelationshipsServices";
import { get } from "mongoose";
const router: IRouter = express.Router();

router.get(
  "/top-groups/",
  async (req: Request, res: Response): Promise<void> => {
    try {
      const { getbigs, get5 } = req.query;
      if (getbigs) {
        const terrorsByavg = await getByBigTerror(getbigs as string);
        res.status(200).json({ terrorsByavg });
        console.log(terrorsByavg);
      } else {
        const terrors5Byavg = await getBy5BigTerror(get5 as string);
        res.status(200).json({ terrors5Byavg });
        console.log(terrors5Byavg);
      }
    } catch (error: any) {
      error.status || 404, error.message;
    }
  }
);

// router.get(
//   "/top-groups/:region_txt",
//   async (req: Request, res: Response): Promise<void> => {
//     try {
//       const getbigs = req.params.region_txt;

//       const terrorsByavg = await getByBigTerror(getbigs);

//       res.status(200).json(terrorsByavg);

//       console.log(terrorsByavg);
//     } catch (error: any) {
//       error.status || 404, error.message;
//     }
//   }
// );

router.get(
  "/groups-by-year/",
  async (req: Request, res: Response): Promise<void> => {
    try {
      const { getyear, getgroop } = req.query;
      if (getgroop) {
        const terrorsBygroop = await getFrequencyByArg(getgroop as string);
        res.status(200).json(terrorsBygroop);
        console.log(terrorsBygroop);
      } else {
        const terrorsByyear = await getFrequency(Number(getyear));
        res.status(200).json(terrorsByyear);
        console.log(terrorsByyear);
      }
    } catch (error: any) {
      error.status || 404, error.message;
    }
  }
);

router.get(
  "/deadliest-regions/:region_txt",
  async (req: Request, res: Response): Promise<void> => {
    try {
      const getbigs = req.params.region_txt;

      const terrorsByavg = await getByBigAttack(getbigs);

      res.status(200).json(terrorsByavg);

      console.log(terrorsByavg);
    } catch (error: any) {
      error.status || 404, error.message;
    }
  }
);

export default router;
