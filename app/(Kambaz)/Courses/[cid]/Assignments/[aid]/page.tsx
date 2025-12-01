"use client";

import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/FormGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import * as client from "../client";
import { setAssignments } from "../reducer";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);

  const isNew = aid === "new";
  const assignment = isNew ? null : assignments.find((a: any) => a._id === aid);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [points, setPoints] = useState(100);
  const [dueDate, setDueDate] = useState("");
  const [availableDate, setAvailableDate] = useState("");
  const [availableUntilDate, setAvailableUntilDate] = useState("");

  const fetchAssignments = async () => {
    const fetchedAssignments = await client.findAssignmentsForCourse(
      cid as string
    );
    dispatch(setAssignments(fetchedAssignments));
  };

  useEffect(() => {
    if (assignments.length === 0) {
      fetchAssignments();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cid]);

  useEffect(() => {
    if (assignment) {
      setTitle(assignment.title || "");
      setDescription(assignment.description || "");
      setPoints(assignment.points || 100);
      setDueDate(
        assignment.dueDate
          ? new Date(assignment.dueDate).toISOString().slice(0, 16)
          : ""
      );
      setAvailableDate(
        assignment.availableDate
          ? new Date(assignment.availableDate).toISOString().slice(0, 16)
          : ""
      );
      setAvailableUntilDate(
        assignment.availableUntilDate
          ? new Date(assignment.availableUntilDate).toISOString().slice(0, 16)
          : ""
      );
    }
  }, [assignment]);

  const handleSave = async () => {
    const assignmentData = {
      title,
      description,
      points: Number(points),
      course: cid,
      dueDate: dueDate ? new Date(dueDate).toISOString() : "",
      availableDate: availableDate ? new Date(availableDate).toISOString() : "",
      availableUntilDate: availableUntilDate
        ? new Date(availableUntilDate).toISOString()
        : "",
    };

    if (isNew) {
      const newAssignment = await client.createAssignmentForCourse(
        cid as string,
        assignmentData
      );
      dispatch(setAssignments([...assignments, newAssignment]));
    } else {
      const updatedAssignment = await client.updateAssignment({
        ...assignmentData,
        _id: aid,
      });
      const newAssignments = assignments.map((a: any) =>
        a._id === aid ? updatedAssignment : a
      );
      dispatch(setAssignments(newAssignments));
    }
    router.push(`/Courses/${cid}/Assignments`);
  };

  const handleCancel = () => {
    router.push(`/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="p-3">
      {/* Assignment Name */}
      <FormGroup className="mb-3">
        <Form.Label htmlFor="wd-name">Assignment Name</Form.Label>
        <Form.Control
          type="text"
          id="wd-name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </FormGroup>

      {/* Description */}
      <Form.Group className="mb-3">
        <Form.Control
          as="textarea"
          id="wd-description"
          rows={10}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>

      {/* Points */}
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={3} className="text-end" htmlFor="wd-points">
          Points
        </Form.Label>
        <Col sm={9}>
          <Form.Control
            type="number"
            id="wd-points"
            value={points}
            onChange={(e) => setPoints(Number(e.target.value))}
          />
        </Col>
      </Form.Group>

      {/* Assignment Group */}
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={3} className="text-end" htmlFor="wd-group">
          Assignment Group
        </Form.Label>
        <Col sm={9}>
          <Form.Select id="wd-group" defaultValue="ASSIGNMENTS">
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="QUIZZES">QUIZZES</option>
            <option value="EXAMS">EXAMS</option>
            <option value="PROJECT">PROJECT</option>
          </Form.Select>
        </Col>
      </Form.Group>

      {/* Display Grade As */}
      <Form.Group as={Row} className="mb-3">
        <Form.Label
          column
          sm={3}
          className="text-end"
          htmlFor="wd-display-grade-as"
        >
          Display Grade as
        </Form.Label>
        <Col sm={9}>
          <Form.Select id="wd-display-grade-as" defaultValue="Percentage">
            <option value="Percentage">Percentage</option>
            <option value="Points">Points</option>
            <option value="Letter">Letter Grade</option>
            <option value="Complete">Complete/Incomplete</option>
          </Form.Select>
        </Col>
      </Form.Group>

      {/* Submission Type */}
      <Form.Group as={Row} className="mb-3">
        <Form.Label
          column
          sm={3}
          className="text-end"
          htmlFor="wd-submission-type"
        >
          Submission Type
        </Form.Label>
        <Col sm={9}>
          <Card className="p-3 border">
            <Form.Select
              id="wd-submission-type"
              defaultValue="Online"
              className="mb-3"
            >
              <option value="Online">Online</option>
              <option value="Paper">On Paper</option>
              <option value="External">External Tool</option>
              <option value="None">No Submission</option>
            </Form.Select>

            <div className="mb-3">
              <strong>Online Entry Options</strong>
              <div className="mt-2">
                <Form.Check
                  type="checkbox"
                  id="wd-text-entry"
                  label="Text Entry"
                  className="mb-2"
                />
                <Form.Check
                  type="checkbox"
                  id="wd-website-url"
                  label="Website URL"
                  defaultChecked
                  className="mb-2"
                />
                <Form.Check
                  type="checkbox"
                  id="wd-media-recordings"
                  label="Media Recordings"
                  className="mb-2"
                />
                <Form.Check
                  type="checkbox"
                  id="wd-student-annotation"
                  label="Student Annotation"
                  className="mb-2"
                />
                <Form.Check
                  type="checkbox"
                  id="wd-file-upload"
                  label="File Uploads"
                />
              </div>
            </div>
          </Card>
        </Col>
      </Form.Group>

      {/* Assign Section */}
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={3} className="text-end">
          Assign
        </Form.Label>
        <Col sm={9}>
          <Card className="p-3 border">
            {/* Assign To */}
            <Form.Group className="mb-3">
              <Form.Label htmlFor="wd-assign-to">Assign to</Form.Label>
              <Form.Control
                type="text"
                id="wd-assign-to"
                defaultValue="Everyone"
                className="bg-light"
              />
            </Form.Group>

            {/* Due Date */}
            <Form.Group className="mb-3">
              <Form.Label htmlFor="wd-due-date">Due</Form.Label>
              <Form.Control
                type="datetime-local"
                id="wd-due-date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
            </Form.Group>

            {/* Available From and Until */}
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="wd-available-from">
                    Available from
                  </Form.Label>
                  <Form.Control
                    type="datetime-local"
                    id="wd-available-from"
                    value={availableDate}
                    onChange={(e) => setAvailableDate(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="wd-available-until">Until</Form.Label>
                  <Form.Control
                    type="datetime-local"
                    id="wd-available-until"
                    value={availableUntilDate}
                    onChange={(e) => setAvailableUntilDate(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Card>
        </Col>
      </Form.Group>

      {/* Action Buttons */}
      <hr />
      <div className="d-flex justify-content-end gap-2">
        <Button variant="secondary" onClick={handleCancel}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleSave}>
          Save
        </Button>
      </div>
    </div>
  );
}
