// import Link from "next/link";
// export default function Profile() {
//   return (
//     <div id="wd-profile-screen">
//       <h3>Profile</h3>
//       <input
//         defaultValue="beatriz"
//         placeholder="username"
//         className="wd-username"
//       />
//       <br />
//       <input
//         defaultValue="123"
//         placeholder="password"
//         type="password"
//         className="wd-password"
//       />
//       <br />
//       <input defaultValue="Alice" placeholder="First Name" id="wd-firstname" />
//       <br />
//       <input
//         defaultValue="Wonderland"
//         placeholder="Last Name"
//         id="wd-lastname"
//       />
//       <br />
//       <input defaultValue="2000-01-01" type="date" id="wd-dob" />
//       <br />
//       <input defaultValue="alice@wonderland" type="email" id="wd-email" />
//       <br />
//       <select defaultValue="FACULTY" id="wd-role">
//         <option value="USER">User</option> <option value="ADMIN">Admin</option>
//         <option value="FACULTY">Faculty</option>{" "}
//         <option value="STUDENT">Student</option>
//       </select>
//       <br />
//       <Link href="Signin"> Sign out </Link>
//     </div>
//   );
// }

// import Link from "next/link";
// import { Form, Button } from "react-bootstrap";

// export default function Profile() {
//   return (
//     <div id="wd-profile-screen" className="p-4" style={{ maxWidth: "400px" }}>
//       <h3 className="mb-4">Profile</h3>

//       <Form.Group className="mb-3">
//         <Form.Control
//           type="text"
//           defaultValue="alice"
//           placeholder="username"
//           className="wd-username"
//         />
//       </Form.Group>

//       <Form.Group className="mb-3">
//         <Form.Control
//           type="password"
//           defaultValue="123"
//           placeholder="password"
//           className="wd-password"
//         />
//       </Form.Group>

//       <Form.Group className="mb-3">
//         <Form.Control
//           type="text"
//           defaultValue="Alice"
//           placeholder="First Name"
//           id="wd-firstname"
//         />
//       </Form.Group>

//       <Form.Group className="mb-3">
//         <Form.Control
//           type="text"
//           defaultValue="Wonderland"
//           placeholder="Last Name"
//           id="wd-lastname"
//         />
//       </Form.Group>

//       <Form.Group className="mb-3">
//         <Form.Control type="date" defaultValue="2000-01-01" id="wd-dob" />
//       </Form.Group>

//       <Form.Group className="mb-3">
//         <Form.Control
//           type="email"
//           defaultValue="alice@wonderland.com"
//           id="wd-email"
//         />
//       </Form.Group>

//       <Form.Group className="mb-3">
//         <Form.Select defaultValue="USER" id="wd-role">
//           <option value="USER">User</option>
//           <option value="ADMIN">Admin</option>
//           <option value="FACULTY">Faculty</option>
//           <option value="STUDENT">Student</option>
//         </Form.Select>
//       </Form.Group>

//       <Button
//         variant="danger"
//         className="w-100"
//         as={Link}
//         href="/Account/Signin"
//       >
//         Signout
//       </Button>
//     </div>
//   );
// }

import Link from "next/link";

export default function Profile() {
  return (
    <div id="wd-profile-screen" className="p-4" style={{ maxWidth: "400px" }}>
      <h3 className="mb-4">Profile</h3>

      <div className="mb-3">
        <input
          type="text"
          className="form-control wd-username"
          defaultValue="alice"
          placeholder="username"
        />
      </div>

      <div className="mb-3">
        <input
          type="password"
          className="form-control wd-password"
          defaultValue="123"
          placeholder="password"
        />
      </div>

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          defaultValue="Alice"
          placeholder="First Name"
          id="wd-firstname"
        />
      </div>

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          defaultValue="Wonderland"
          placeholder="Last Name"
          id="wd-lastname"
        />
      </div>

      <div className="mb-3">
        <input
          type="date"
          className="form-control"
          defaultValue="2000-01-01"
          id="wd-dob"
        />
      </div>

      <div className="mb-3">
        <input
          type="email"
          className="form-control"
          defaultValue="alice@wonderland.com"
          id="wd-email"
        />
      </div>

      <div className="mb-3">
        <select className="form-select" defaultValue="USER" id="wd-role">
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
        </select>
      </div>

      <Link href="/Account/Signin" className="btn btn-danger w-100">
        Signout
      </Link>
    </div>
  );
}
