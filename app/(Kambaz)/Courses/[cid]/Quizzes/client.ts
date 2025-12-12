import axios from "axios";

const HTTP_SERVER =
  process.env.NEXT_PUBLIC_HTTP_SERVER || "http://localhost:4000";
const COURSES_API = `${HTTP_SERVER}/api/courses`;
const QUIZZES_API = `${HTTP_SERVER}/api/quizzes`;
const QUIZ_ATTEMPTS_API = QUIZZES_API;

export const findQuizzesForCourse = async (courseId: string) => {
  const { data } = await axios.get(`${COURSES_API}/${courseId}/quizzes`);
  return data;
};

export const findQuizById = async (quizId: string) => {
  const { data } = await axios.get(`${QUIZZES_API}/${quizId}`);
  return data;
};

export const createQuizForCourse = async (courseId: string, quiz: any) => {
  const { data } = await axios.post(`${COURSES_API}/${courseId}/quizzes`, quiz);
  return data;
};

export const updateQuiz = async (quiz: any) => {
  const { data } = await axios.put(`${QUIZZES_API}/${quiz._id}`, quiz);
  return data;
};

export const deleteQuiz = async (quizId: string) => {
  const { data } = await axios.delete(`${QUIZZES_API}/${quizId}`);
  return data;
};

export const findAttemptsForQuizAndStudent = async (
  quizId: string,
  uid: string
) => {
  const { data } = await axios.get(
    `${QUIZ_ATTEMPTS_API}/${quizId}/attempts/${uid}`
  );
  return data;
};

export const createAttemptForQuizAndStudent = async (
  quizId: string,
  uid: string,
  attempt: any
) => {
  const { data } = await axios.post(
    `${QUIZ_ATTEMPTS_API}/${quizId}/attempts/${uid}`,
    attempt
  );
  return data;
};
