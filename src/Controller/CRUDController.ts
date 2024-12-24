import express, { IRouter, Request, Response } from "express";
import Terror, { TerrorModel } from "../Models/TerorModel";
import {
  deleteTerror,
  getOneTerror,
  addTerror,
  editTerror,
} from "../Services/CRUDServices";

const router: IRouter = express.Router();

router.get("/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    const terror = await getOneTerror(req.params.id);
    res.json(terror);
  } catch (error: any) {
    error.status || 404, error.message;
  }
});

router.post("/", async (req: Request, res: Response): Promise<void> => {
  const {
    eventid,
    iyear,
    imonth,
    iday,
    country_txt,
    region_txt,
    city,
    latitude,
    longitude,
    attacktype1_txt,
    targtype1_txt,
    target1,
    gname,
    weaptype1_txt,
    nkill,
    nwound,
  } = req.body;
  console.log(
    eventid,
    iyear,
    imonth,
    iday,
    country_txt,
    region_txt,
    city,
    latitude,
    longitude,
    attacktype1_txt,
    targtype1_txt,
    target1,
    gname,
    weaptype1_txt,
    nkill,
    nwound
  );
  try {
    const newTerror = new Terror({
      eventid,
      iyear,
      imonth,
      iday,
      country_txt,
      region_txt,
      city,
      latitude,
      longitude,
      attacktype1_txt,
      targtype1_txt,
      target1,
      gname,
      weaptype1_txt,
      nkill,
      nwound: [],
    });
    const terror = await addTerror(newTerror);
    res.status(201).json(terror);
  } catch (error: any) {
    error.status || 404, error.message;
  }
});

router.put("/:id", async (req: Request, res: Response): Promise<void> => {  
  try {
    const id = req.params.id 
    const {body} = req.body
    res.json(body);
  } catch (error: any) {
    error.status || 404, error.message;
  }
});

router.delete("/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    const terror = await deleteTerror(req.params.id);
    res.json(terror);
  } catch (error: any) {
    error.status || 404, error.message;
  }
});

export default 
  router

