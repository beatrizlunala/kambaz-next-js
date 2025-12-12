"use client";
import { redirect } from "next/navigation";
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
  FormControl,
} from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCourses, findCoursesForEnrolledUser } from "../Courses/reducer";
import * as client from "../Courses/client";

export default function Dashboard() {
  const dispatch = useDispatch();
  const [course, setCourse] = useState<any>({});
  const [showAllCoursesToggle, setShowAllCoursesToggle] = useState(false);

  // Track enrollment status for each course
  const [enrollmentStatuses, setEnrollmentStatuses] = useState<{
    [courseId: string]: boolean;
  }>({});

  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { courses } = useSelector((state: any) => state.coursesReducer);

  if (!currentUser) {
    redirect("/Account/Signin");
  }

  // Check enrollment status for all courses
  const checkEnrollmentStatuses = async (coursesToCheck: any[]) => {
    const statuses: { [courseId: string]: boolean } = {};

    for (const course of coursesToCheck) {
      const usersInCourse = await client.findUsersForCourse(course._id);
      statuses[course._id] = usersInCourse.some(
        (user: any) => user._id === currentUser._id
      );
    }

    setEnrollmentStatuses(statuses);
  };

  // Fetch courses based on toggle and role
  const fetchCourses = async () => {
    try {
      let coursesData;

      if (showAllCoursesToggle) {
        coursesData = await client.fetchAllCourses();
      } else {
        coursesData = await client.findMyCourses();
      }

      dispatch(setCourses(coursesData));
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  useEffect(() => {
    if (currentUser?._id) {
      fetchCourses();
    }
  }, [currentUser, showAllCoursesToggle]);

  const onAddNewCourse = async () => {
    const newCourse = await client.createCourse(course);
    dispatch(setCourses([...courses, newCourse]));
    setCourse({}); // Clear form
  };

  const onDeleteCourse = async (courseId: string) => {
    await client.deleteCourse(courseId);
    dispatch(setCourses(courses.filter((c: any) => c._id !== courseId)));
  };

  const onUpdateCourse = async () => {
    await client.updateCourse(course);
    dispatch(
      setCourses(courses.map((c: any) => (c._id === course._id ? course : c)))
    );
    setCourse({}); // Clear form
  };

  // Handle enrollment/unenrollment
  const handleEnrollmentToggle = async (courseId: string) => {
    const isEnrolled = enrollmentStatuses[courseId];

    try {
      if (isEnrolled) {
        await client.unenrollFromCourse(currentUser._id, courseId);
      } else {
        await client.enrollIntoCourse(currentUser._id, courseId);
      }

      // Update local state
      setEnrollmentStatuses({
        ...enrollmentStatuses,
        [courseId]: !isEnrolled,
      });
    } catch (error) {
      console.error("Error toggling enrollment:", error);
    }
  };

  return (
    <div id="wd-dashboard">
      <h1>
        Dashboard
        <Button
          variant="primary"
          className="float-end"
          onClick={() => setShowAllCoursesToggle(!showAllCoursesToggle)}
        >
          {showAllCoursesToggle ? "Show My Courses" : "Enrollments"}
        </Button>
      </h1>
      <hr />

      {currentUser?.role === "FACULTY" && (
        <>
          <h5>
            New Course
            <Button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={onAddNewCourse}
            >
              Add
            </Button>
            <Button onClick={onUpdateCourse} className="me-2">
              Update
            </Button>
          </h5>
          <br />
          <FormControl
            value={course.name || ""}
            placeholder="New Course Name"
            id="new-course-name"
            className="mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <FormControl
            value={course.description || ""}
            placeholder="New Description"
            id="new-course-description"
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
        {showAllCoursesToggle ? "All Courses" : "My Courses"} ({courses.length})
      </h2>
      <hr />

      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((course: any) => {
            const isEnrolled = enrollmentStatuses[course._id];

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
                      if (!isEnrolled && currentUser?.role !== "FACULTY") {
                        e.preventDefault();
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

                      {isEnrolled || currentUser?.role === "FACULTY" ? (
                        <Button variant="primary">Go</Button>
                      ) : (
                        <Button variant="secondary" disabled>
                          Go
                        </Button>
                      )}

                      {currentUser?.role === "FACULTY" && (
                        <>
                          <Button
                            variant="danger"
                            onClick={(event) => {
                              event.preventDefault();
                              onDeleteCourse(course._id);
                            }}
                            className="ms-2"
                          >
                            Delete
                          </Button>
                          <Button
                            id="wd-edit-course-click"
                            onClick={(event) => {
                              event.preventDefault();
                              setCourse(course);
                            }}
                            className="btn btn-warning float-end"
                          >
                            Edit
                          </Button>
                        </>
                      )}

                      {currentUser?.role === "STUDENT" &&
                        showAllCoursesToggle && (
                          <Button
                            onClick={(event) => {
                              event.preventDefault();
                              handleEnrollmentToggle(course._id);
                              setEnrollmentStatuses({
                                ...enrollmentStatuses,
                                [course._id]: !isEnrolled,
                              });
                            }}
                            className={`btn ${
                              isEnrolled ? "btn-danger" : "btn-success"
                            } float-end`}
                          >
                            {isEnrolled ? "Unenroll" : "Enroll"}
                          </Button>
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
