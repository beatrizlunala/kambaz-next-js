"use client";
import { redirect } from "next/navigation";
import { useSelector } from "react-redux";

function Calendar() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  if (!currentUser) {
    redirect("/Account/Signin");
  }

  return (
    <div>
      <h2>Calendar</h2>
    </div>
  );
}
export default Calendar;
