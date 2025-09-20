// import { ReactNode } from "react";
// import AccountNavigation from "./Navigation";
// export default function AccountLayout({
//   children,
// }: Readonly<{ children: ReactNode }>) {
//   return (
//     <div id="wd-kambaz">
//       <table>
//         <tbody>
//           <tr>
//             <td valign="top">
//               <AccountNavigation />
//             </td>
//             <td valign="top" width="100%">
//               {children}
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }
import { ReactNode } from "react";
import KambazNavigation from "../Navigation";
import AccountNavigation from "./Navigation";

export default function AccountLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <table>
      <tbody>
        <tr>
          <td valign="top" width="200">
            <KambazNavigation />
          </td>
          <td valign="top" width="100%">
            <table>
              <tbody>
                <tr>
                  <td valign="top">
                    <AccountNavigation />
                  </td>
                  <td valign="top" width="100%">
                    {children}
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
