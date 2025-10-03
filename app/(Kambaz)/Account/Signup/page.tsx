import Link from "next/link";
import FormControl from "react-bootstrap/FormControl";

export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h1>Sign Up</h1>
      <FormControl id="wd-username" placeholder="username" className="mb-2" />

      <FormControl
        id="wd-password"
        placeholder="password"
        type="password"
        className="mb-2"
      />

      <Link
        id="wd-signin-btn"
        href="Profile"
        className="btn btn-primary w-100 mb-2"
      >
        Sign up
      </Link>
      <br />
      <Link id="wd-signup-link" href="Signin">
        Sign in
      </Link>
    </div>
  );
}
