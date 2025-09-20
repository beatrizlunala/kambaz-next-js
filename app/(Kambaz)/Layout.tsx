// import { ReactNode } from "react";
// import KambazNavigation from "./Navigation";

// export default function KambazLayout({
//   children,
// }: Readonly<{ children: ReactNode }>) {
//   return (
//     <table>
//       <tbody>
//         <tr>
//           <td valign="top" width="200">
//             <KambazNavigation />
//           </td>
//           <td valign="top" width="100%">
//             {children}
//           </td>
//         </tr>
//       </tbody>
//     </table>
//   );
// }

import { ReactNode } from "react";

export default function KambazLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div style={{ border: "2px solid red", padding: "20px" }}>
      <h1>LAYOUT IS WORKING!</h1>
      <table>
        <tbody>
          <tr>
            <td valign="top" width="200" style={{ border: "1px solid green" }}>
              <div>NAVIGATION SHOULD BE HERE</div>
            </td>
            <td valign="top" width="100%" style={{ border: "1px solid blue" }}>
              {children}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

// import { ReactNode } from "react";

// export default function KambazLayout({ children }: { children: ReactNode }) {
//   return (
//     <div style={{ border: "2px solid red", padding: "20px" }}>
//       <h1>LAYOUT IS WORKING!</h1>
//       <div style={{ border: "1px solid blue", padding: "10px" }}>
//         {children}
//       </div>
//     </div>
//   );
// }
