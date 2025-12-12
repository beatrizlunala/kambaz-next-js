"use client";

import Link from "next/link";
import { redirect } from "next/dist/client/components/navigation";
import { setCurrentUser } from "../reducer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { FormControl, Button, FormSelect } from "react-bootstrap";
import * as client from "../client";
import { profile } from "../client";

export default function Signup() {
  const [user, setUser] = useState<any>({});

  const dispatch = useDispatch();

  const signup = async () => {
    const currentUser = await client.signup(user);
    dispatch(setCurrentUser(currentUser));
    redirect("/Account/Profile");
  };

  return (
    <div className="wd-signup-screen">
      <h1>Sign up</h1>
      <FormControl
        // value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <FormControl
        // value={user.password}
        type="password"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <FormSelect id="wd-submission-type" defaultValue="USER" className="mb-3">
        <option value="User">USER</option>
        <option value="Faculty">FACULTY</option>
        <option value="Student">STUDENT</option>
      </FormSelect>
      <Button className="btn btn-primary w-100" onClick={signup}>
        {" "}
        Sign up{" "}
      </Button>
      <br />
      <Link href="/Account/Signin">Sign in</Link>
    </div>
  );
}
