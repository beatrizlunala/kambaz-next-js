"use client";

import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function KambazNavigation() {
  const pathname = usePathname();
  const links = [
    { label: "Dashboard", path: "/Kambaz/Dashboard", icon: AiOutlineDashboard },
    { label: "Courses", path: "/Kambaz/Dashboard", icon: LiaBookSolid },
    { label: "Calendar", path: "/Kambaz/Calendar", icon: IoCalendarOutline },
    { label: "Inbox", path: "/Kambaz/Inbox", icon: FaInbox },
    { label: "Labs", path: "/Labs", icon: LiaCogSolid },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <ListGroup
      className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
      style={{ width: 120 }}
    >
      <ListGroupItem
        className="bg-black border-0 text-center"
        as="a"
        target="_blank"
        href="https://www.northeastern.edu/"
      >
        <img
          src="/images/Northeastern.png"
          width="75px"
          alt="Northeastern University"
        />
      </ListGroupItem>
      <ListGroupItem
        className={`border-0 text-center ${
          isActive("/Account/Profile") ? "bg-white" : "bg-black"
        }`}
      >
        <Link
          href="/Account"
          id="wd-account-link"
          className={`border-0 text-center ${
            isActive("/Account/Profile")
              ? "text-danger text-decoration-none"
              : "text-white text-decoration-none"
          }`}
        >
          <FaRegCircleUser
            className={`border-0 text-center ${
              isActive("/Account/Profile")
                ? "fs-1 text-danger"
                : "fs-1 text-white"
            }`}
          />
          <br />
          Account
        </Link>
      </ListGroupItem>

      {/* figure out how to make bg-white change */}
      {/* Dashboard */}
      {/* <ListGroupItem
        className="border-0
                  bg-white text-center"
      > */}
      <ListGroupItem
        className={`border-0 text-center ${
          isActive("/Dashboard") ? "bg-white" : "bg-black"
        }`}
      >
        <Link
          href="/Dashboard"
          className={`border-0 text-center ${
            isActive("/Dashboard")
              ? "text-danger text-decoration-none"
              : "text-white text-decoration-none"
          }`}
        >
          <AiOutlineDashboard
            className={`border-0 text-center ${
              isActive("/Dashboard") ? "fs-1 text-danger" : "fs-1 text-white"
            }`}
          />
          <br />
          Dashboard
        </Link>
      </ListGroupItem>

      {/* Courses */}
      <ListGroupItem className="border-0 bg-black text-center">
        <Link
          href="/Dashboard"
          id="wd-courses-link"
          className="text-white text-decoration-none"
        >
          <LiaBookSolid className="fs-1 text-white" />
          <br />
          Courses
        </Link>
      </ListGroupItem>

      {/* Calendar */}
      <ListGroupItem
        className={`border-0 text-center ${
          isActive("/Calendar") ? "bg-white" : "bg-black"
        }`}
      >
        <Link
          href="/Calendar"
          id="wd-calendar-link"
          className={`border-0 text-center ${
            isActive("/Calendar")
              ? "text-danger text-decoration-none"
              : "text-white text-decoration-none"
          }`}
        >
          <IoCalendarOutline
            className={`border-0 text-center ${
              isActive("/Calendar") ? "fs-1 text-danger" : "fs-1 text-white"
            }`}
          />
          <br />
          Calendar
        </Link>
      </ListGroupItem>

      {/* Inbox */}
      <ListGroupItem
        className={`border-0 text-center ${
          isActive("/Inbox") ? "bg-white" : "bg-black"
        }`}
      >
        <Link
          href="/Inbox"
          id="wd-inbox-link"
          className={`border-0 text-center ${
            isActive("/Inbox")
              ? "text-danger text-decoration-none"
              : "text-white text-decoration-none"
          }`}
        >
          <FaInbox
            className={`border-0 text-center ${
              isActive("/Inbox") ? "fs-1 text-danger" : "fs-1 text-white"
            }`}
          />
          <br />
          Inbox
        </Link>
      </ListGroupItem>

      {/* Labs */}
      <ListGroupItem className="border-0 bg-black text-center">
        <Link
          href="/Labs"
          id="wd-account-link"
          className="text-white text-decoration-none"
        >
          <LiaCogSolid className="fs-1 text-white" />
          <br />
          Labs
        </Link>
      </ListGroupItem>
    </ListGroup>
  );
}

// "use client";

// import { AiOutlineDashboard } from "react-icons/ai";
// import { IoCalendarOutline } from "react-icons/io5";
// import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
// import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
// import { ListGroup, ListGroupItem } from "react-bootstrap";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// export default function KambazNavigation() {
//   const pathname = usePathname();
//   const links = [
//     { label: "Dashboard", path: "/Kambaz/Dashboard", icon: AiOutlineDashboard },
//     { label: "Courses", path: "/Kambaz/Dashboard", icon: LiaBookSolid },
//     { label: "Calendar", path: "/Kambaz/Calendar", icon: IoCalendarOutline },
//     { label: "Inbox", path: "/Kambaz/Inbox", icon: FaInbox },
//     { label: "Labs", path: "/Labs", icon: LiaCogSolid },
//   ];

//   const isActive = (path: string) => pathname === path;

//   return (
//     <ListGroup
//       className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
//       style={{ width: 120 }}
//     >
//       <ListGroupItem
//         className="bg-black border-0 text-center"
//         as="a"
//         target="_blank"
//         href="https://www.northeastern.edu/"
//       >
//         <img
//           src="/images/Northeastern.png"
//           width="75px"
//           alt="Northeastern University"
//         />
//       </ListGroupItem>
//       <ListGroupItem className="border-0 bg-black text-center">
//         <Link
//           href="/Account"
//           id="wd-account-link"
//           className="text-white text-decoration-none"
//         >
//           <FaRegCircleUser className="fs-1 text-white" />
//           <br />
//           Account
//         </Link>
//       </ListGroupItem>

//       {/* Dashboard */}
//       <ListGroupItem
//         className={`border-0 text-center ${
//           isActive("/Dashboard") ? "bg-white" : "bg-black"
//         }`}
//       >
//         <Link
//           href="/Dashboard"
//           className={
//             isActive("/Dashboard")
//               ? "text-danger text-decoration-none"
//               : "text-white text-decoration-none"
//           }
//         >
//           <AiOutlineDashboard
//             className={`fs-1 ${
//               isActive("/Dashboard") ? "text-danger" : "text-white"
//             }`}
//           />
//           <br />
//           Dashboard
//         </Link>
//       </ListGroupItem>

//       {/* Courses */}
//       <ListGroupItem
//         className={`border-0 text-center ${
//           isActive("/Courses") ? "bg-white" : "bg-black"
//         }`}
//       >
//         <Link
//           href="/Courses"
//           className={
//             isActive("/Courses")
//               ? "text-danger text-decoration-none"
//               : "text-white text-decoration-none"
//           }
//         >
//           <LiaBookSolid
//             className={`fs-1 ${
//               isActive("/Courses") ? "text-danger" : "text-white"
//             }`}
//           />
//           <br />
//           Courses
//         </Link>
//       </ListGroupItem>

//       {/* Calendar */}
//       <ListGroupItem
//         className={`border-0 text-center ${
//           isActive("/Calendar") ? "bg-white" : "bg-black"
//         }`}
//       >
//         <Link
//           href="/Calendar"
//           className={
//             isActive("/Calendar")
//               ? "text-danger text-decoration-none"
//               : "text-white text-decoration-none"
//           }
//         >
//           <IoCalendarOutline
//             className={`fs-1 ${
//               isActive("/Calendar") ? "text-danger" : "text-white"
//             }`}
//           />
//           <br />
//           Calendar
//         </Link>
//       </ListGroupItem>

//       {/* Inbox */}
//       <ListGroupItem
//         className={`border-0 text-center ${
//           isActive("/Inbox") ? "bg-white" : "bg-black"
//         }`}
//       >
//         <Link
//           href="/Inbox"
//           className={
//             isActive("/Inbox")
//               ? "text-danger text-decoration-none"
//               : "text-white text-decoration-none"
//           }
//         >
//           <FaInbox
//             className={`fs-1 ${
//               isActive("/Inbox") ? "text-danger" : "text-white"
//             }`}
//           />
//           <br />
//           Inbox
//         </Link>
//       </ListGroupItem>

//       {/* Labs */}
//       <ListGroupItem
//         className={`border-0 text-center ${
//           isActive("/Labs") ? "bg-white" : "bg-black"
//         }`}
//       >
//         <Link
//           href="/Labs"
//           className={
//             isActive("/Labs")
//               ? "text-danger text-decoration-none"
//               : "text-white text-decoration-none"
//           }
//         >
//           <LiaCogSolid
//             className={`fs-1 ${
//               isActive("/Labs") ? "text-danger" : "text-white"
//             }`}
//           />
//           <br />
//           Labs
//         </Link>
//       </ListGroupItem>
//     </ListGroup>
//   );
// }
