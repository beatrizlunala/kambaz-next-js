import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical, BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";
import GreenCheckmark from "./GreenCheckmark";

import AssignmentControlButtons from "./AssignmentControlButtons";
import Link from "next/link";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      {/* Search and Action Buttons */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="position-relative" style={{ width: "400px" }}>
          <FaSearch className="position-absolute top-50 translate-middle-y ms-3 text-muted" />
          <input
            id="wd-search-assignment"
            className="form-control ps-5"
            placeholder="Search..."
          />
        </div>
        <div>
          <button className="btn btn-outline-secondary me-2">
            <BsPlus className="fs-4" /> Group
          </button>
          <button className="btn btn-danger">
            <BsPlus className="fs-4" /> Assignment
          </button>
        </div>
      </div>

      {/* Assignments List */}
      <ListGroup className="rounded-0">
        <ListGroupItem className="p-0 mb-5 border-gray">
          {/* Assignments Header */}
          <div className="d-flex align-items-center p-3 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            <strong className="flex-grow-1">ASSIGNMENTS</strong>
            <span className="me-3 border border-dark rounded px-2 py-1">
              40% of Total
            </span>
            <BsPlus className="fs-4 me-2" />
            <IoEllipsisVertical className="fs-5" />
          </div>

          {/* Assignment Items */}
          <ListGroup className="rounded-0">
            {/* A1 */}
            <ListGroupItem className="p-3 ps-1 d-flex align-items-start wd-lesson">
              <BsGripVertical className="me-2 fs-3 text-muted" />
              <TfiWrite className="text-success me-3 fs-5 mt-1" />
              <div className="flex-grow-1">
                <Link
                  href="/Courses/1234/Assignments/123"
                  className="wd-assignment-link text-decoration-none text-dark fw-bold"
                >
                  A1
                </Link>
                <br />
                <span className="text-danger">Multiple Modules</span> |{" "}
                <strong>Not available until</strong> May 6 at 12:00am |
                <br />
                <strong>Due</strong> May 13 at 11:59pm | 100 pts
              </div>
              <div className="d-flex align-items-center">
                <AssignmentControlButtons />
              </div>
            </ListGroupItem>

            {/* A2 */}
            <ListGroupItem className="p-3 ps-1 d-flex align-items-start wd-lesson">
              <BsGripVertical className="me-2 fs-3 text-muted" />
              <TfiWrite className="text-success me-3 fs-5 mt-1" />
              <div className="flex-grow-1">
                <Link
                  href="/Courses/1234/Assignments/123"
                  className="wd-assignment-link text-decoration-none text-dark fw-bold"
                >
                  A2
                </Link>
                <br />
                <span className="text-danger">Multiple Modules</span> |{" "}
                <strong>Not available until</strong> May 13 at 12:00am |
                <br />
                <strong>Due</strong> May 20 at 11:59pm | 100 pts
              </div>
              <div className="d-flex align-items-center">
                <AssignmentControlButtons />
              </div>
            </ListGroupItem>

            {/* A3 */}
            <ListGroupItem className="p-3 ps-1 d-flex align-items-start wd-lesson">
              <BsGripVertical className="me-2 fs-3 text-muted" />
              <TfiWrite className="text-success me-3 fs-5 mt-1" />
              <div className="flex-grow-1">
                <Link
                  href="/Courses/1234/Assignments/123"
                  className="wd-assignment-link text-decoration-none text-dark fw-bold"
                >
                  A3
                </Link>
                <br />
                <span className="text-danger">Multiple Modules</span> |{" "}
                <strong>Not available until</strong> May 20 at 12:00am |
                <br />
                <strong>Due</strong> May 27 at 11:59pm | 100 pts
              </div>
              <div className="d-flex align-items-center">
                <AssignmentControlButtons />
              </div>
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
