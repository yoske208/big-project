import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcrypt";

export interface TerrorModel extends Document {
  eventid: number;
  iyear: number;
  imonth: number;
  iday: number;
  country_txt: string;
  region_txt: string;
  city: string;
  latitude: number;
  longitude: number;
  attacktype1_txt: string;
  targtype1_txt: string;
  target1: string;
  gname: string;
  weaptype1_txt: string;
  nkill: number;
  nwound: number;
  ransomamt: number
}

const TerorSchema = new Schema<TerrorModel>({
    eventid:{
        type:Number,
    },
    iyear:{
        type:Number,
        required:true
    },
    imonth:{
        type:Number,
        required:true
    },
    iday:{
        type:Number,
    },
    country_txt:{
        type:String,
    },
    region_txt:{
        type:String,
    },
    city:{
        type:String,
    },
    latitude:{
        type:Number,
    },
    longitude:{
        type:Number,
    },
    attacktype1_txt:{
        type:String,
    },
    targtype1_txt:{
        type:String,
    },
    target1:{
        type:String,
    },
    gname:{
        type:String,
        required:true
    },
    weaptype1_txt:{
        type:String,
    },
    nkill:{
        type:Number,
    },
    nwound:{
        type:Number,
    },
    ransomamt:{
        type:Number,
    },
   
})

TerorSchema.index({eventid:1})
export default mongoose.model<TerrorModel>("terrorMap",TerorSchema)