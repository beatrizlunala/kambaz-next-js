import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.png" alt="" width={200} height={150} />
            <div>
              <h5> CS1234 </h5>
              <p className="wd-dashboard-course-title">React Fundamentals</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1123" className="wd-dashboard-course-link">
            <Image src="/images/artf1123.png" alt="" width={200} height={150} />
            <div>
              <h5> ARTF1123 </h5>
              <p className="wd-dashboard-course-title">Color and Composition</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/2500" className="wd-dashboard-course-link">
            <Image src="/images/cs2500.png" alt="" width={200} height={150} />
            <div>
              <h5> CS2500 Fundamentals of Computer Science </h5>
              <p className="wd-dashboard-course-title">Java</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/2501" className="wd-dashboard-course-link">
            <Image src="/images/cs2501.jpeg" alt="" width={200} height={150} />
            <div>
              <h5> CS2501 </h5>
              <p className="wd-dashboard-course-title">
                Lab for Fundamentals of Computer Science
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1270" className="wd-dashboard-course-link">
            <Image src="/images/artg1270.png" alt="" width={200} height={150} />
            <div>
              <h5> ARTG1270 </h5>
              <p className="wd-dashboard-course-title">
                Design Process and Practices
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1271" className="wd-dashboard-course-link">
            <Image src="/images/artg1271.png" alt="" width={200} height={150} />
            <div>
              <h5> ARTG1271 </h5>
              <p className="wd-dashboard-course-title">
                Studio for Design Process and Practices
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/2000" className="wd-dashboard-course-link">
            <Image src="/images/inam2000.png" alt="" width={200} height={150} />
            <div>
              <h5> INAM2000 </h5>
              <p className="wd-dashboard-course-title">Ethics in Creativity</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
