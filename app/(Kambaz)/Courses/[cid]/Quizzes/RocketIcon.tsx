import { IoRocketOutline } from "react-icons/io5";
export default function RocketIcon() {
  return (
    <span className="me-1 position-relative">
      <IoRocketOutline
        style={{ top: "2px" }}
        className="text-success me-1
                   position-absolute fs-5"
      />
      <IoRocketOutline className="text-white me-1 fs-6" />
      {"   "}
    </span>
  );
}
