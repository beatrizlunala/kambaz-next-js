"use client";

import { useParams, useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { deleteAssignment, setAssignments } from "./reducer";
import * as client from "./client";
import Button from "react-bootstrap/Button";
import { FaTrash } from "react-icons/fa";

export default function Assignments() {
  const { cid } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();

  const { assignments } = useSelector((state: any) => state.assignmentsReducer);

  const fetchAssignments = async () => {
    const assignments = await client.findAssignmentsForCourse(cid as string);
    dispatch(setAssignments(assignments));
  };

  useEffect(() => {
    fetchAssignments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cid]);

  const courseAssignments = assignments.filter(
    (assignment: any) => assignment.course === cid
  );

  const handleDelete = async (
    assignmentId: string,
    assignmentTitle: string
  ) => {
    if (
      window.confirm(`Are you sure you want to remove "${assignmentTitle}"?`)
    ) {
      await client.deleteAssignment(assignmentId);
      const newAssignments = assignments.filter(
        (a: any) => a._id !== assignmentId
      );
      dispatch(setAssignments(newAssignments));
    }
  };

  return (
    <div className="p-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Assignments</h3>
        <Button
          variant="danger"
          onClick={() => router.push(`/Courses/${cid}/Assignments/new`)}
        >
          + Assignment
        </Button>
      </div>

      <ul className="list-group">
        {courseAssignments.map((assignment: any) => (
          <li
            key={assignment._id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div
              onClick={() =>
                router.push(`/Courses/${cid}/Assignments/${assignment._id}`)
              }
              style={{ cursor: "pointer", flex: 1 }}
            >
              <h5>{assignment.title}</h5>
              <p className="mb-0">
                <strong>Due:</strong> {assignment.dueDate} |{" "}
                <strong>Points:</strong> {assignment.points}
              </p>
            </div>
            <Button
              variant="danger"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(assignment._id, assignment.title);
              }}
            >
              <FaTrash />
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
