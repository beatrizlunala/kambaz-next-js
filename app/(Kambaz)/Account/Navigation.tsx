"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Nav, NavItem, NavLink } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function AccountNavigation() {
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  );
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const pathname = usePathname();

  return (
    <Nav className="list-group-item border-0">
      {links.map((link) => (
        <NavItem
          key={link}
          className={`list-group-item border-0 ${
            pathname.includes(link) ? "active" : "text-danger"
          }`}
        >
          <NavLink as={Link} href={link} active={pathname.endsWith(link)}>
            {link}
          </NavLink>
        </NavItem>
      ))}
      {currentUser && currentUser.role === "ADMIN" && (
        <NavItem>
          <NavLink
            as={Link}
            href={`/Account/Users`}
            active={pathname.endsWith("Users")}
          >
            Users
          </NavLink>
        </NavItem>
      )}
    </Nav>
  );
}

// export default function AccountNavigation() {
//   const { currentUser } = useSelector(
//     (state: RootState) => state.accountReducer
//   );
//   const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
//   return (
//     <Nav variant="pills">
//       <div className="wd list-group fs-5 rounded-0">
//         <Link href="Signin" className="list-group-item active border-0">
//           Signin
//         </Link>
//         <Link href="Signup" className="list-group-item text-danger border-0">
//           Signup
//         </Link>
//         <Link href="Profile" className="list-group-item text-danger border-0">
//           Profile
//         </Link>
//       </div>
//     </Nav>
//   );
// }
