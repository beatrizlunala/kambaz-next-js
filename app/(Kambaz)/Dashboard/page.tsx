"use client";

import Link from "next/link";
import {
  Card,
  CardTitle,
  CardBody,
  CardText,
  CardImg,
  Row,
  Col,
  Button,
} from "react-bootstrap";

import * as db from "../Database";
import { FormControl } from "react-bootstrap";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse } from "../Courses/reducer";
import {
  enrollInCourse,
  unenrollFromCourse,
} from "../Courses/[cid]/People/Table/reducer";

export default function Dashboard() {
  const dispatch = useDispatch();
  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description",
  });

  const [showAllCourses, setShowAllCourses] = useState(false);

  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);

  // Check if user is enrolled in a course
  const isEnrolled = (courseId: string) => {
    return enrollments.some(
      (enrollment: any) =>
        currentUser &&
        enrollment.user === currentUser._id &&
        enrollment.course === courseId
    );
  };

  // Handle enrollment toggle
  const handleEnrollment = (courseId: string) => {
    if (!currentUser) return;

    if (isEnrolled(courseId)) {
      dispatch(unenrollFromCourse({ userId: currentUser._id, courseId }));
    } else {
      dispatch(enrollInCourse({ userId: currentUser._id, courseId }));
    }
  };

  // Filter courses based on showAllCourses toggle
  const displayedCourses = showAllCourses
    ? courses
    : courses.filter((course: any) => isEnrolled(course._id));

  return (
    <div id="wd-dashboard">
      <h1>
        Dashboard
        <Button
          variant="primary"
          className="float-end"
          onClick={() => setShowAllCourses(!showAllCourses)}
        >
          {showAllCourses ? "Show My Courses" : "Enrollments"}
        </Button>
      </h1>
      <hr />

      {currentUser?.role === "FACULTY" && (
        <>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={() => dispatch(addNewCourse(course))}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={() => dispatch(updateCourse(course))}
              id="wd-update-course-click"
            >
              Update
            </button>
          </h5>
          <br />
          <FormControl
            value={course.name}
            className="mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <FormControl
            value={course.description}
            as="textarea"
            rows={3}
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
          <hr />
        </>
      )}

      <h2>
        {showAllCourses ? "All Courses" : "Published Courses"} (
        {displayedCourses.length})
      </h2>
      <hr />

      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {displayedCourses.map((course: any) => {
            const enrolled = isEnrolled(course._id);

            return (
              <Col
                className="wd-dashboard-course"
                style={{ width: "300px" }}
                key={course._id}
              >
                <Card>
                  <Link
                    href={`/Courses/${course._id}/Home`}
                    className="wd-dashboard-course-link text-decoration-none text-dark"
                    onClick={(e) => {
                      // Prevent navigation if not enrolled
                      if (!enrolled && currentUser?.role !== "FACULTY") {
                        e.preventDefault();
                        alert("You must enroll in this course to access it.");
                      }
                    }}
                  >
                    <CardImg
                      src={course.image}
                      variant="top"
                      width="100%"
                      height={160}
                    />
                    <CardBody className="card-body">
                      <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                        {course.name}
                      </CardTitle>
                      <CardText
                        className="wd-dashboard-course-description overflow-hidden"
                        style={{ height: "100px" }}
                      >
                        {course.description}
                      </CardText>

                      {enrolled ? (
                        <Button variant="primary"> Go </Button>
                      ) : (
                        <Button
                          variant="secondary"
                          disabled={currentUser?.role !== "FACULTY"}
                        >
                          Go
                        </Button>
                      )}

                      {currentUser?.role === "FACULTY" && (
                        <>
                          <button
                            onClick={(event) => {
                              event.preventDefault();
                              dispatch(deleteCourse(course._id));
                            }}
                            className="btn btn-danger float-end"
                            id="wd-delete-course-click"
                          >
                            Delete
                          </button>
                          <button
                            id="wd-edit-course-click"
                            onClick={(event) => {
                              event.preventDefault();
                              setCourse(course);
                            }}
                            className="btn btn-warning me-2 float-end"
                          >
                            Edit
                          </button>
                        </>
                      )}

                      {currentUser?.role === "STUDENT" && showAllCourses && (
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            handleEnrollment(course._id);
                          }}
                          className={`btn ${
                            enrolled ? "btn-danger" : "btn-success"
                          } float-end`}
                        >
                          {enrolled ? "Unenroll" : "Enroll"}
                        </button>
                      )}
                    </CardBody>
                  </Link>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}
