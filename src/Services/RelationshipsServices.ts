import Terror, { TerrorModel } from "../Models/TerorModel";
//Q4
// 5 הארגונים הכי בולטים לפי אזור מסוים
const getBy5BigTerror = async (region_txt: string) => {
  const agre = await Terror.aggregate([
    { $match: { region_txt: region_txt } },
    {
      $group: {
        _id: "$gname",
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
    {
      $limit: 5,
    },
  ]);
  console.log(agre);
  return agre;
};

// הארגונים הבולטים לפי אזור מסוים
const getByBigTerror = async (region_txt: string) => {
  const agre = await Terror.aggregate([
    { $match: { region_txt: region_txt } },
    {
      $group: {
        _id: "$gname",
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

//Q5
// תדירות מקרים לפי שנה
const getFrequency = async (Iyear: number) => {
  const frequency = await Terror.aggregate([
    { $match: { iyear: Iyear } },

    {
      $group: {
        _id: "$gname",

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
        //   $push: { city: "$city" },
        // },
      },
    },
    { $sort: { count: -1 } },
  ]);
  return frequency;
};

// בחירת ארגון והצגת התדירות שלו לפי שנים
const getFrequencyByArg = async (gname: string) => {
  const frequency = await Terror.aggregate([
    { $match: { gname: gname } },

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
        },
        // year: {
        //   $avg: "$iyear",
        // }
      },
    },
    { $sort: { count: -1 } },
  ]);
  return frequency;

};

//Q6
// לפי ארגון מסוים איפה  האזורים שהוא היה בהם הכי גרוע

const getByBigAttack = async (gname: string) => {
  const agre = await Terror.aggregate([
    { $match: { gname: gname } },
    {
      $group: {
        _id: "$region_txt",
        count: {
          $sum: {
            $add: [{ $ifNull: ["$nkill", 0] }, { $ifNull: ["$nwound", 0] }],
          },
        },
        latitude: {
          $avg: "$latitude",
        },
        longitude: {
          $avg: "$longitude",
        }
        
      },
    },
    { $sort: { count: -1 } },
  ]);
  console.log(agre);
  return agre;
};

export {
  getByBigTerror,
  getFrequency,
  getByBigAttack,
  getBy5BigTerror,
  getFrequencyByArg,
};
