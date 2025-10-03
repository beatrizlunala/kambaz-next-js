// import Link from "next/link";
// export default function TOC() {
//   return (
//     <ul>
//       <li>
//         <Link href="/Labs" id="wd-lab1-link">
//           Home
//         </Link>
//       </li>
//       <li>
//         <Link href="/Labs/Lab1" id="wd-lab1-link">
//           Lab 1
//         </Link>
//       </li>
//       <li>
//         <Link href="/Labs/Lab2" id="wd-lab2-link">
//           Lab 2
//         </Link>
//       </li>
//       <li>
//         <Link href="/Labs/Lab3" id="wd-lab3-link">
//           Lab 3
//         </Link>
//       </li>
//       <li>
//         <Link href="/" id="wd-kambaz-link">
//           Kambaz
//         </Link>
//       </li>
//     </ul>
//   );
// }

"use client";

import Nav from "react-bootstrap/Nav";
import Link from "next/link";

export default function TOC() {
  return (
    <Nav variant="pills">
      <Nav.Item>
        <Nav.Link as={Link} href="/Labs">
          Labs
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} href="/Labs/Lab1">
          Lab 1
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} href="/Labs/Lab2" active>
          Lab 2
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} href="/Labs/Lab3">
          Lab 3
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} href="/Account/Signin">
          Kambaz
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="https://github.com/beatrizlunala">My GitHub</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
