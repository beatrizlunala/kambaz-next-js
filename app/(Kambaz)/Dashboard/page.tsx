import Link from "next/link";
import Image from "next/image";
import Card from "react-bootstrap/Card";
import CardTitle from "react-bootstrap/CardTitle";
import CardBody from "react-bootstrap/CardBody";
import CardText from "react-bootstrap/CardText";
import CardImg from "react-bootstrap/CardImg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1>Dashboard</h1> <hr />
      <h2>Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {/*React*/}
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                className="wd-dashboard-course-link
                           text-decoration-none text-dark"
                href="/Courses/1234/Home"
              >
                <CardImg
                  variant="top"
                  width="100%"
                  src="/images/reactjs.png"
                  height={160}
                />
                <CardBody>
                  <CardTitle
                    className="wd-dashboard-course-title
                                    text-nowrap overflow-hidden"
                  >
                    CS 1234
                  </CardTitle>
                  <CardText
                    className="wd-dashboard-course-description
                                    overflow-hidden"
                    style={{ height: "100px" }}
                  >
                    React JS: Full Stack software developer
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          {/*Fundies ii*/}
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                className="wd-dashboard-course-link
                           text-decoration-none text-dark"
                href="/Courses/1234/Home"
              >
                <CardImg
                  variant="top"
                  width="100%"
                  src="/images/cs2500.png"
                  height={160}
                />
                <CardBody>
                  <CardTitle
                    className="wd-dashboard-course-title
                                    text-nowrap overflow-hidden"
                  >
                    CS 2500
                  </CardTitle>
                  <CardText
                    className="wd-dashboard-course-description
                                    overflow-hidden"
                    style={{ height: "100px" }}
                  >
                    Fundamentals of Computer Science II
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          {/*Lab for fundies ii*/}
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                className="wd-dashboard-course-link
                           text-decoration-none text-dark"
                href="/Courses/1234/Home"
              >
                <CardImg
                  variant="top"
                  width="100%"
                  src="/images/cs2501.png"
                  height={160}
                />
                <CardBody>
                  <CardTitle
                    className="wd-dashboard-course-title
                                    text-nowrap overflow-hidden"
                  >
                    CS 2501
                  </CardTitle>
                  <CardText
                    className="wd-dashboard-course-description
                                    overflow-hidden"
                    style={{ height: "100px" }}
                  >
                    Lab for Fundamentals of Computer Science II
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          {/*Design Process and practices*/}
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                className="wd-dashboard-course-link
                           text-decoration-none text-dark"
                href="/Courses/1234/Home"
              >
                <CardImg
                  variant="top"
                  width="100%"
                  src="/images/artg1270.png"
                  height={160}
                />
                <CardBody>
                  <CardTitle
                    className="wd-dashboard-course-title
                                    text-nowrap overflow-hidden"
                  >
                    ARTG 1270
                  </CardTitle>
                  <CardText
                    className="wd-dashboard-course-description
                                    overflow-hidden"
                    style={{ height: "100px" }}
                  >
                    Design Process and Practice
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          {/*studio for design pp*/}
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                className="wd-dashboard-course-link
                           text-decoration-none text-dark"
                href="/Courses/1234/Home"
              >
                <CardImg
                  variant="top"
                  width="100%"
                  src="/images/artg1271.png"
                  height={160}
                />
                <CardBody>
                  <CardTitle
                    className="wd-dashboard-course-title
                                    text-nowrap overflow-hidden"
                  >
                    ARTG 1271
                  </CardTitle>
                  <CardText
                    className="wd-dashboard-course-description
                                    overflow-hidden"
                    style={{ height: "100px" }}
                  >
                    Studio for Design Process and Practice
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          {/*color and composition*/}
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                className="wd-dashboard-course-link
                           text-decoration-none text-dark"
                href="/Courses/1234/Home"
              >
                <CardImg
                  variant="top"
                  width="100%"
                  src="/images/artf1123.png"
                  height={160}
                />
                <CardBody>
                  <CardTitle
                    className="wd-dashboard-course-title
                                    text-nowrap overflow-hidden"
                  >
                    ARTF 1123
                  </CardTitle>
                  <CardText
                    className="wd-dashboard-course-description
                                    overflow-hidden"
                    style={{ height: "100px" }}
                  >
                    Color and Composition
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          {/*ethics in creativity*/}
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                className="wd-dashboard-course-link
                           text-decoration-none text-dark"
                href="/Courses/1234/Home"
              >
                <CardImg
                  variant="top"
                  width="100%"
                  src="/images/inam2000.png"
                  height={160}
                />
                <CardBody>
                  <CardTitle
                    className="wd-dashboard-course-title
                                    text-nowrap overflow-hidden"
                  >
                    INAM 2000
                  </CardTitle>
                  <CardText
                    className="wd-dashboard-course-description
                                    overflow-hidden"
                    style={{ height: "100px" }}
                  >
                    Ethics in Creativity
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
