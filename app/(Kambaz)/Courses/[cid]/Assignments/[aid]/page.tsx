"use client";

import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/FormGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Link from "next/link";

import * as db from "../../../../Database";
import { useParams } from "next/navigation";

export default function AssignmentEditor() {
  const { cid, aid } = useParams(); // Get both course ID and assignment ID

  // Find the specific assignment by ID
  const assignment = db.assignments.find(
    (assignment: any) => assignment._id === aid
  );

  // If assignment not found, show error message
  if (!assignment) {
    return <div>Assignment not found</div>;
  }

  // Format dates for datetime-local input (YYYY-MM-DDTHH:MM)
  const formatDateTimeLocal = (dateString: string) => {
    return `${dateString}T23:59`;
  };

  const formatDateTimeLocalStart = (dateString: string) => {
    return `${dateString}T00:00`;
  };

  return (
    <div id="wd-assignments-editor" className="p-3">
      {/* Assignment Name */}
      <FormGroup className="mb-3">
        <Form.Label htmlFor="wd-name">Assignment Name</Form.Label>
        <Form.Control
          type="text"
          id="wd-name"
          defaultValue={assignment.title}
        />
      </FormGroup>

      {/* Description */}
      <Form.Group className="mb-3">
        <Form.Control
          as="textarea"
          id="wd-description"
          rows={10}
          defaultValue={assignment.description}
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
            defaultValue={assignment.points}
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
                defaultValue={formatDateTimeLocal(assignment.dueDate)}
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
                    defaultValue={formatDateTimeLocalStart(
                      assignment.availableDate
                    )}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="wd-available-until">Until</Form.Label>
                  <Form.Control
                    type="datetime-local"
                    id="wd-available-until"
                    defaultValue={formatDateTimeLocal(assignment.dueDate)}
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
        <Link href={`/Courses/${cid}/Assignments`}>
          <Button variant="secondary">Cancel</Button>
        </Link>
        <Link href={`/Courses/${cid}/Assignments`}>
          <Button variant="danger">Save</Button>
        </Link>
      </div>
    </div>
  );
}

// "use client";

// import Form from "react-bootstrap/Form";
// import FormGroup from "react-bootstrap/FormGroup";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";

// import * as db from "../../../../Database";
// import { useParams } from "next/navigation";

// export default function AssignmentEditor() {
//   const { cid } = useParams();

//   const assignments = db.assignments.filter(
//     (assignment: any) => assignment.course === cid
//   );

//   return (
//     <div id="wd-assignments-editor" className="p-3">
//       {/* Assignment Name */}
//       <FormGroup className="mb-3">
//         <Form.Label htmlFor="wd-name">Assignment Name</Form.Label>
//         <Form.Control type="text" id="wd-name" defaultValue="A1" />
//       </FormGroup>

//       {/* Description */}
//       <Form.Group className="mb-3">
//         <Form.Control
//           as="textarea"
//           id="wd-description"
//           rows={10}
//           defaultValue={
//             "The assignment is available online\t\r\t\r" +
//             "Submit a link to the landing page of your Web application running on Netlify.\t\r\t\r" +
//             "The landing page should include the following:\t\r" +
//             "- Your full name and section\t\r" +
//             "- Links to each of the lab assignments\t\r" +
//             "- Link to the Kambaz application\t\r" +
//             "- Links to all relevant source code repositories\t\r" +
//             "The Kambaz application should include a link to navigate back to the landing page."
//           }
//         />
//       </Form.Group>

//       {/* Points */}
//       <Form.Group as={Row} className="mb-3">
//         <Form.Label column sm={3} className="text-end" htmlFor="wd-points">
//           Points
//         </Form.Label>
//         <Col sm={9}>
//           <Form.Control type="number" id="wd-points" defaultValue={100} />
//         </Col>
//       </Form.Group>

//       {/* Assignment Group */}
//       <Form.Group as={Row} className="mb-3">
//         <Form.Label column sm={3} className="text-end" htmlFor="wd-group">
//           Assignment Group
//         </Form.Label>
//         <Col sm={9}>
//           <Form.Select id="wd-group" defaultValue="ASSIGNMENTS">
//             <option value="ASSIGNMENTS">ASSIGNMENTS</option>
//             <option value="QUIZZES">QUIZZES</option>
//             <option value="EXAMS">EXAMS</option>
//             <option value="PROJECT">PROJECT</option>
//           </Form.Select>
//         </Col>
//       </Form.Group>

//       {/* Display Grade As */}
//       <Form.Group as={Row} className="mb-3">
//         <Form.Label
//           column
//           sm={3}
//           className="text-end"
//           htmlFor="wd-display-grade-as"
//         >
//           Display Grade as
//         </Form.Label>
//         <Col sm={9}>
//           <Form.Select id="wd-display-grade-as" defaultValue="Percentage">
//             <option value="Percentage">Percentage</option>
//             <option value="Points">Points</option>
//             <option value="Letter">Letter Grade</option>
//             <option value="Complete">Complete/Incomplete</option>
//           </Form.Select>
//         </Col>
//       </Form.Group>

//       {/* Submission Type */}
//       <Form.Group as={Row} className="mb-3">
//         <Form.Label
//           column
//           sm={3}
//           className="text-end"
//           htmlFor="wd-submission-type"
//         >
//           Submission Type
//         </Form.Label>
//         <Col sm={9}>
//           <Card className="p-3 border">
//             <Form.Select
//               id="wd-submission-type"
//               defaultValue="Online"
//               className="mb-3"
//             >
//               <option value="Online">Online</option>
//               <option value="Paper">On Paper</option>
//               <option value="External">External Tool</option>
//               <option value="None">No Submission</option>
//             </Form.Select>

//             <div className="mb-3">
//               <strong>Online Entry Options</strong>
//               <div className="mt-2">
//                 <Form.Check
//                   type="checkbox"
//                   id="wd-text-entry"
//                   label="Text Entry"
//                   className="mb-2"
//                 />
//                 <Form.Check
//                   type="checkbox"
//                   id="wd-website-url"
//                   label="Website URL"
//                   defaultChecked
//                   className="mb-2"
//                 />
//                 <Form.Check
//                   type="checkbox"
//                   id="wd-media-recordings"
//                   label="Media Recordings"
//                   className="mb-2"
//                 />
//                 <Form.Check
//                   type="checkbox"
//                   id="wd-student-annotation"
//                   label="Student Annotation"
//                   className="mb-2"
//                 />
//                 <Form.Check
//                   type="checkbox"
//                   id="wd-file-upload"
//                   label="File Uploads"
//                 />
//               </div>
//             </div>
//           </Card>
//         </Col>
//       </Form.Group>

//       {/* Assign Section */}
//       <Form.Group as={Row} className="mb-3">
//         <Form.Label column sm={3} className="text-end">
//           Assign
//         </Form.Label>
//         <Col sm={9}>
//           <Card className="p-3 border">
//             {/* Assign To */}
//             <Form.Group className="mb-3">
//               <Form.Label htmlFor="wd-assign-to">Assign to</Form.Label>
//               <Form.Control
//                 type="text"
//                 id="wd-assign-to"
//                 defaultValue="Everyone"
//                 className="bg-light"
//               />
//             </Form.Group>

//             {/* Due Date */}
//             <Form.Group className="mb-3">
//               <Form.Label htmlFor="wd-due-date">Due</Form.Label>
//               <Form.Control
//                 type="datetime-local"
//                 id="wd-due-date"
//                 defaultValue="2024-05-13T23:59"
//               />
//             </Form.Group>

//             {/* Available From and Until */}
//             <Row>
//               <Col md={6}>
//                 <Form.Group className="mb-3">
//                   <Form.Label htmlFor="wd-available-from">
//                     Available from
//                   </Form.Label>
//                   <Form.Control
//                     type="datetime-local"
//                     id="wd-available-from"
//                     defaultValue="2024-05-06T00:00"
//                   />
//                 </Form.Group>
//               </Col>
//               <Col md={6}>
//                 <Form.Group className="mb-3">
//                   <Form.Label htmlFor="wd-available-until">Until</Form.Label>
//                   <Form.Control
//                     type="datetime-local"
//                     id="wd-available-until"
//                     defaultValue="2024-05-20T23:59"
//                   />
//                 </Form.Group>
//               </Col>
//             </Row>
//           </Card>
//         </Col>
//       </Form.Group>

//       {/* Action Buttons */}
//       <hr />
//       <div className="d-flex justify-content-end gap-2">
//         <Button variant="secondary">Cancel</Button>
//         <Button variant="danger">Save</Button>
//       </div>
//     </div>
//   );
// }
