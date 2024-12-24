import express, { IRouter, Request, Response } from "express";
import {
  getTerror,
  getOneTerror,
  getByWendAndDath,
  getAreaByAvg,
  getFrequency,
  getoneAreaByAvg,
  getOneByWendAndDath,
  getFrequencyByRange,
  getTerrorByLast10Years,
  getTerrorByLast5Years,
} from "../Services/AnalysisServices";
import Terror from "../Models/TerorModel";
import { get } from "mongoose";
import { log } from "console";

const router: IRouter = express.Router();

// מחזיר את כל התקפות
// router.get("/deadliest-attack-types", async (req: Request, res: Response): Promise<void> => {
//   try {
//     const allTerrors = await getTerror();
//     console.log(1);

//     console.log(allTerrors);
//     console.log(2);

//     res.json(allTerrors);
//     console.log(res.json());
//   } catch (error: any) {
//     error.status || 404, error.message;
//   }
// });
//מחזיר התקפה מסויימת לפי _id
// router.get("/:id", async (req: Request, res: Response): Promise<void> => {
//   try {
//     const terrors = await getOneTerror(req.params.id);
//     res.json(terrors);
//   } catch (error: any) {
//     error.status || 404, error.message;
//   }
// });
//Q1
// תיאור: מחזיר סוגי התקפות מדורגים לפי מספר הנפגעים הכולל.
router.get(
  "/deadliest-attack-types",
  async (req: Request, res: Response): Promise<void> => {
    try {
      const terrorsByDath = await getByWendAndDath();
      res.status(200).json(terrorsByDath);
      console.log(terrorsByDath);
    } catch (error: any) {
      error.status || 404, error.message;
    }
  }
);

//מחזיר לפי התקפה מסויימת

router.get(
  "/deadliest-attack-types/:attack_type",
  async (req: Request, res: Response): Promise<void> => {
    try {
      const getByType = req.params.attack_type;

      const terrorsByDath = await getOneByWendAndDath(getByType);
      res.status(200).json(terrorsByDath);
      console.log(terrorsByDath);
    } catch (error: any) {
      error.status || 404, error.message;
    }
  }
);

//Q2
// מחזיר אזורים עם ממוצע נפגעים הגבוה ביותר.
router.get(
  "/highest-casualty-regions/",
  async (req: Request, res: Response): Promise<void> => {
    try {
      const terrorsByavg = await getAreaByAvg();

      res.status(200).json(terrorsByavg);

      console.log(terrorsByavg);
    } catch (error: any) {
      error.status || 404, error.message;
    }
  }
);

//מחזיר לפי אזור מסוים
router.get(
  "/highest-casualty-regions/:region_txt",
  async (req: Request, res: Response): Promise<void> => {
    try {
      const getregin = req.params.region_txt;

      const terrorsByavg = await getoneAreaByAvg(getregin);

      res.status(200).json(terrorsByavg);

      console.log(terrorsByavg);
    } catch (error: any) {
      error.status || 404, error.message;
    }
  }
);

// Q3

//על"פי בחירת שנה מציג את הסיכום החודשי שלה

router.get(
  "/incident-trends/:iyear",
  async (req: Request, res: Response): Promise<void> => {
    try {
      const getyear = parseInt(req.params.iyear);
      const terrorsByavg = await getFrequency(getyear);

      res.status(200).json(terrorsByavg);

      console.log(terrorsByavg);
    } catch (error: any) {
      error.status || 404, error.message;
    }
  }
);
// בחירת טווח שנים

router.get(
  "/incident-trends/:iyear/:iyear2",
  async (req: Request, res: Response): Promise<void> => {
    try {
      const getyear = parseInt(req.params.iyear);
      const getyear2 = parseInt(req.params.iyear2);
      const terrorsByavg = await getFrequencyByRange(getyear, getyear2);

      res.status(200).json(terrorsByavg);

      console.log(terrorsByavg);
    } catch (error: any) {
      error.status || 404, error.message;
    }
  }
);

// מהשנה הנוכחית חמש שנים אחורה

router.get(
  "/incident-trends/:ByLast5Years",
  async (req: Request, res: Response): Promise<void> => {
    try {
      console.log(1);

      const getyear = parseInt(req.params.ByLast5Years);
      console.log(getyear);

      const terrorsByavg = await getTerrorByLast5Years(getyear);
      console.log(terrorsByavg);

      res.status(200).json(terrorsByavg);

      console.log(terrorsByavg);
    } catch (error: any) {
      error.status || 404, error.message;
    }
  }
);

// עשר שנים אחורה

router.get(
  "/incident-trends/:ByLast10Years",
  async (req: Request, res: Response): Promise<void> => {
    try {
      const getyear = parseInt(req.params.ByLast10Years);
      const terrorsByavg = await getTerrorByLast10Years(getyear);

      res.status(200).json(terrorsByavg);

      console.log(terrorsByavg);
    } catch (error: any) {
      error.status || 404, error.message;
    }
  }
);
export default router;
