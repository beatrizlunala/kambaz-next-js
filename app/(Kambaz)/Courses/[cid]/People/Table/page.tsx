"use client";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Table } from "react-bootstrap";

import { useParams } from "next/navigation";
import * as db from "../../../../Database";

export default function PeopleTable() {
  const { cid } = useParams();
  const { users, enrollments } = db;

  return (
    <div id="wd-people-table">
      <Table striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {users
            .filter((usr) =>
              enrollments.some(
                (enrollment) =>
                  enrollment.user === usr._id && enrollment.course === cid
              )
            )
            .map((user: any) => (
              <tr key={user._id}>
                <td className="wd-full-name text-nowrap">
                  <FaUserCircle className="me-2 fs-1 text-secondary" />
                  <span className="wd-first-name">{user.firstName}</span>
                  <span className="wd-last-name">{user.lastName}</span>
                </td>
                <td className="wd-login-id">{user.loginId}</td>
                <td className="wd-section">{user.section}</td>
                <td className="wd-role">{user.role}</td>
                <td className="wd-last-activity">{user.lastActivity}</td>
                <td className="wd-total-activity">{user.totalActivity}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );

  // return (
  //   <div id="wd-people-table">
  //     <Table striped>
  //       <thead>
  //         <tr>
  //           <th>Name</th>
  //           <th>Login ID</th>
  //           <th>Section</th>
  //           <th>Role</th>
  //           <th>Last Activity</th>
  //           <th>Total Activity</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         <tr>
  //           <td className="wd-full-name text-nowrap">
  //             <FaUserCircle className="me-2 fs-1 text-secondary" />
  //             <span className="wd-first-name">Tony</span>
  //             <span className="wd-last-name">Stark</span>
  //           </td>
  //           <td className="wd-login-id">001234561S</td>
  //           <td className="wd-section">S101</td>
  //           <td className="wd-role">STUDENT</td>
  //           <td className="wd-last-activity">2024-04-30</td>
  //           <td className="wd-total-activity">10:21:32</td>
  //         </tr>
  //         <tr>
  //           <td className="wd-full-name text-nowrap">
  //             <FaUserCircle className="me-2 fs-1 text-secondary" />
  //             <span className="wd-first-name">Bruce</span>
  //             <span className="wd-last-name">Wayne</span>
  //           </td>
  //           <td className="wd-login-id">009876542D</td>
  //           <td className="wd-section">S101</td>
  //           <td className="wd-role">STUDENT</td>
  //           <td className="wd-last-activity">2024-4-25</td>
  //           <td className="wd-total-activity">09:34:55</td>
  //         </tr>
  //         <tr>
  //           <td className="wd-full-name text-nowrap">
  //             <FaUserCircle className="me-2 fs-1 text-secondary" />
  //             <span className="wd-first-name">Clark</span>
  //             <span className="wd-last-name">Kent</span>
  //           </td>
  //           <td className="wd-login-id">002468005F</td>
  //           <td className="wd-section">S101</td>
  //           <td className="wd-role">FACULTY</td>
  //           <td className="wd-last-activity">2024-05-01</td>
  //           <td className="wd-total-activity">12:44:56</td>
  //         </tr>
  //         <tr>
  //           <td className="wd-full-name text-nowrap">
  //             <FaUserCircle className="me-2 fs-1 text-secondary" />
  //             <span className="wd-first-name">Jane</span>
  //             <span className="wd-last-name">Doe</span>
  //           </td>
  //           <td className="wd-login-id">009812301E</td>
  //           <td className="wd-section">S101</td>
  //           <td className="wd-role">STUDENT</td>
  //           <td className="wd-last-activity">2024-05-01</td>
  //           <td className="wd-total-activity">03:43:58</td>
  //         </tr>
  //       </tbody>
  //     </Table>
  //   </div>
  // );
}
