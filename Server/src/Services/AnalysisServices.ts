import Terror, { TerrorModel } from "../Models/TerorModel";
//מחזיר את כל הטרור
const getTerror = async () => {
  try {
    const terrors = await Terror.find();
    console.log(terrors);

    if (!terrors) return "cant find terrors";
    console.log(41);

    return terrors;
  } catch (error: any) {
    return `cant find mongo DB ${error}`;
  }
};
//

const getOneTerror = async (_id: string) => {
  try {
    console.log(_id);
    const terror = await Terror.findById(_id);
    console.log(terror);
    if (!terror) return "the terrors is not found";
    return terror;
  } catch (error: any) {
    return `cant find mongo DB ${error}`;
  }
};
//Q1
//סוגי התקפות הקטלניים ביותר
const getByWendAndDath = async () => {
  const agre = await Terror.aggregate([
    {
      $group: {
        _id: "$attacktype1_txt",

        count: {
          $sum: {
            $add: [{ $ifNull: ["$nkill", 0] }, { $ifNull: ["$nwound", 0] }],
          },
        },
        lat: {
          $avg: "$latitude",
        },
        lng: {
          $avg: "$longitude",
        }

        // city: {
        //   $push:{ city: "$city"},
        // },
        // attacktype: {
        //   $push:{ attacktype : "$attacktype1_txt"},

        // },
      },
    },
    { $sort: { count: -1 } },
  ]);
  console.log(agre);
  return agre;
};

//בחירת סוג התקפה מסוים

const getOneByWendAndDath = async (attacktype: string) => {
  const agre = await Terror.aggregate([
    { $match: { attacktype1_txt: attacktype } },
    {
      $group: {
        _id: "$attacktype1_txt",

        count: {
          $sum: {
            $add: [{ $ifNull: ["$nkill", 0] }, { $ifNull: ["$nwound", 0] }],
          },
        },
        lat: {
          $avg: "$latitude",
        },
        lng: {
          $avg: "$longitude",
        }
      },
    },
    { $sort: { count: -1 } },
  ]);
  console.log(agre);
  return agre;
};
//Q2
//ממוצע נפגעים בכל האזורים

const getAreaByAvg = async () => {
  const avg = await Terror.aggregate([
    {
      $group: {
        _id: "$region_txt",
        avg: {
          $avg: {
            $add: [{ $ifNull: ["$nkill", 0] }, { $ifNull: ["$nwound", 0] }],
          },
        },
        lat: {
          $avg: "$latitude",
        },
        lng: {
          $avg: "$longitude",
        }
      },
    },
  ]);
  return avg;
};

//ממוצע נפגעים לפי אזור מסוים

const getoneAreaByAvg = async (region: string) => {
  const avg = await Terror.aggregate([
    { $match: { region_txt: region } },
    {
      $group: {
        _id: "$region_txt",
        avg: {
          $avg: {
            $add: [{ $ifNull: ["$nkill", 0] }, { $ifNull: ["$nwound", 0] }],
          },
        },
        lat: {
          $avg: "$latitude",
        },
        lng: {
          $avg: "$longitude",
        }
      }, 
    },
  ]);
  return avg;
};

//Q3
//על"פי בחירת שנה מציג את הסיכום החודשי שלה
const getFrequency = async (Iyear: number) => {
  const frequency = await Terror.aggregate([
    { $match: { iyear: Iyear } },

    {
      $group: {
        _id: "$imonth",
        count: {
          $sum: {
            $add: [{ $ifNull: ["$nkill", 0] }, { $ifNull: ["$nwound", 0] }],
          },
        },
        lat: {
          $avg: "$latitude",
        },
        lng: {
          $avg: "$longitude",
        }
      },
    },
    { $sort: { count: -1 } },
  ]);
  return frequency;
};

//בחירת טווח שנים עם סיכום החודשים שלה
const getFrequencyByRange = async (start: number, end: number) => {
  const terror = await Terror.aggregate([
    { $match: { iyear: { $gte: start, $lte: end } } },
    {
      $group: {
        _id: "$imonth",
        count: {
          $sum: {
            $add: [{ $ifNull: ["$nkill", 0] }, { $ifNull: ["$nwound", 0] }],
          },
        },
        lat: {
          $avg: "$latitude",
        },
        lng: {
          $avg: "$longitude",
        }
      },
    },
    { $sort: { count: -1 } },
  ]);
  return terror;
};

// מידע לפי חמש שנים אחרונות
const getTerrorByLast5Years = async (ByLast5Years: number) => {
  const terror = await Terror.aggregate([
    { $match: { iyear: { $gte: ByLast5Years } } },
    {
      $group: {
        _id: "$iyear",
        count: {
          $sum: {
            $add: [{ $ifNull: ["$nkill", 0] }, { $ifNull: ["$nwound", 0] }],
          },
        },
        lat: {
          $avg: "$latitude",
        },
        lng: {
          $avg: "$longitude",
        }
      },
    },
    { $sort: { _id: -1 } },
    { $limit: 5 },
  ]);
  return terror;
};

// מידע לפי עשר שנים אחרונות
const getTerrorByLast10Years = async (ByLast10Years: number) => {
  const terror = await Terror.aggregate([
    { $match: { iyear: { $gte: ByLast10Years } } },
    {
      $group: {
        _id: "$iyear",
        count: {
          $sum: {
            $add: [{ $ifNull: ["$nkill", 0] }, { $ifNull: ["$nwound", 0] }],
          },
        },
        lat: {
          $avg: "$latitude",
        },
        lng: {
          $avg: "$longitude",
        }
      },
    },
    { $sort: { _id: -1 } },
    { $limit: 10 },
  ]);
  return terror;
};

export {
  getTerror,
  getOneTerror,
  getByWendAndDath,
  getAreaByAvg,
  getFrequency,
  getoneAreaByAvg,
  getOneByWendAndDath,
  getFrequencyByRange,
  getTerrorByLast5Years,
  getTerrorByLast10Years,
};
