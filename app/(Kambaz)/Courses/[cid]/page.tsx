import { redirect } from "next/navigation";
// export default async function CoursesPage({
//   params,
// }: {
//   params: Promise<{ cid: string }>;
// }) {
//   const { cid } = await params;
//   redirect(`/Courses/${cid}/Home`);
// }
function Courses() {
  return (
    <div>
      <h2>Courses</h2>
    </div>
  );
}
export default Courses;
