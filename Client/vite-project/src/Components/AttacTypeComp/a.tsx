// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { TerrorModel } from "../../Interface/Interfaces";

// // interface TerrorData {
// //   _id: string;
// //   iyear: number;
// //   count: number;
// // }

// interface Props {
//   terrors: TerrorModel[];
// }

// const TerrorComponent = ({terrors} : Props) => {
//   const { attackType } = useParams<{ attackType: string }>();
//   const [data, setData] = useState<TerrorModel[] | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const response = await fetch("/deadliest-attack-types/Armed Assault");
//         if (!response.ok) {
//           throw new Error(`Error: ${response.statusText}`);
//         }
//         const result = await response.json();
//         setData(result);
//       } catch (err: any) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [attackType]);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   if (!data || data.length === 0) {
//     return <p>No data available.</p>;
//   }

//   return (
//     <div>
//       <h1>Attack Type: {attackType}</h1>
//       <ul>
//         {terrors.map((item) => (
//           <li >
//             <strong>{item.count}</strong>
//             {item.count}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TerrorComponent;
