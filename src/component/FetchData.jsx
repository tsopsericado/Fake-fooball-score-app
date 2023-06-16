// import React from "react";
// import { useEffect, useState } from "react";
// import info from "../foottball.json";
// import { clubs, countries } from "../foottball.json";

// export default function FetchData() {
//   const [data, setData] = useState();

//   // function information() {
//   //   setData(info);
//   //   console.log(data);
//   // }
//   // useEffect(() => {
//   //   information();
//   // });

//   return (
//     <div className="fetchdata">
//       <tboby>
//         <tr>
//           <th>name</th>
//           <th>url</th>
//           <th>path</th>
//         </tr>
//         {data.map((clubs, index) => (
//           <tr key={index}>
//             <td>{clubs.name}</td>
//             <td>
//               <img src="clubs.url" alt="" height={50} />
//             </td>
//             <td>
//               <img src="clubs.path" alt="" height={50} />
//             </td>
//           </tr>
//         ))}

//         <tr>
//           <th>country</th>
//           <th>code</th>
//           <th>flag</th>
//         </tr>
//         {data.map((countries, index) => (
//           <tr key={index}>
//             <td>{countries.country}</td>
//             <td>{countries.code}</td>
//             <td>
//               <img src="countries.flag" alt="" height={50} />
//             </td>
//           </tr>
//         ))}
//       </tboby>
//       <button onClick={() => information()}>boy</button>
//     </div>
//   );
// }
