export interface TerrorModel extends Document {
  _id: string;
  eventid?: number;
  iyear?: number;
  imonth?: number;
  iday?: number;
  country_txt?: string;
  region_txt?: string;
  city?: string;
  latitude?: number;
  longitude?: number;
  attacktype1_txt?: string;
  targtype1_txt?: string;
  target1?: string;
  gname?: string;
  weaptype1_txt?: string;
  nkill?: number;
  nwound?: number;
  ransomamt?: number;
}

// export interface TerrorModel {
//   _id: number;
//   count?: string;
//   // Add other fields here if necessary
// }
