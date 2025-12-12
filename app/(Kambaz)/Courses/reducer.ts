import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  courses: [],
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addNewCourse: (state, { payload: course }) => {
      const newCourse = { ...course, _id: uuidv4() };
      state.courses = [...state.courses, newCourse] as any;
    },
    deleteCourse: (state, { payload: courseId }) => {
      state.courses = state.courses.filter(
        (course: any) => course._id !== courseId
      );
    },
    updateCourse: (state, { payload: course }) => {
      state.courses = state.courses.map((c: any) =>
        c._id === course._id ? course : c
      ) as any;
    },
    setCourses: (state, { payload: courses }) => {
      state.courses = courses;
    },
    findCoursesForEnrolledUser: (state, { payload: userId }) => {
      state.courses = state.courses.filter((course: any) =>
        course.enrolledUsers?.includes(userId)
      ) as any;
    },
  },
});
export const {
  addNewCourse,
  deleteCourse,
  updateCourse,
  setCourses,
  findCoursesForEnrolledUser,
} = coursesSlice.actions;
export default coursesSlice.reducer;
