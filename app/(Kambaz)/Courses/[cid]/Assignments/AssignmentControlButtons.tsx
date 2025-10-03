"use client";
import { FaPlus } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import GreenCheckmark from "./GreenCheckmark";

export default function AssignmentControlButtons() {
  return (
    <div id="wd-module-control-buttons" className="text-nowrap control-buttons">
      <GreenCheckmark />
      <BsThreeDotsVertical />
    </div>
  );
}
