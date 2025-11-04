"use client";

import { useParams, useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment } from "./reducer";
import Button from "react-bootstrap/Button";
import { FaTrash } from "react-icons/fa";

export default function Assignments() {
  const { cid } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();

  const { assignments } = useSelector((state: any) => state.assignmentsReducer);

  const courseAssignments = assignments.filter(
    (assignment: any) => assignment.course === cid
  );

  const handleDelete = (assignmentId: string, assignmentTitle: string) => {
    if (
      window.confirm(`Are you sure you want to remove "${assignmentTitle}"?`)
    ) {
      dispatch(deleteAssignment(assignmentId));
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
