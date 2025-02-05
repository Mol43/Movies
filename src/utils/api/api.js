// Bu yerda serverga so'rov jo'natish uchun funksiyalar bo'ladi.

import { MOVIES_ENDPOINT } from "../../constants/index";

/**
 * Bu funksiya bazadan barcha filmlarni ma'lumotlarini yuklab keladi.
 * @param {*} endpoint - buyerda backendga link bo'ladi (masalan: https://localhost:3000/movies)
 */

async function getAllMovies(endpoint) {
  try {
    const response = await fetch(endpoint, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return await response.json();
  } catch (error) {
    return error;
  }
}

/**
 * Ma'lumotlar bazasidan id orqali kinoni topib beradi
 * @param {*} id - Kinoning idsi
 */
async function getMovieWithId(id) {
  const movies = await getAllMovies(MOVIES_ENDPOINT);
  return movies.find((movie) => movie.id == id);
}

async function createAccount(endpoint, userData) {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: Date.now(),
      username: userData.username,
      password: userData.password,
      email: userData.email,
    }),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return {
    status: true,
    message: "Account created",
  };
}

const signIn = async (endpoint, credentials) => {
  const response = await fetch(endpoint);
  const users = await response.json();
  const user = users.find(
    (user) =>
      (user.username === credentials.username ||
        user.email === credentials.username) &&
      user.password === credentials.password
  );
  if (user) {
    return { status: true, user };
  }
};

export { getAllMovies, getMovieWithId, createAccount, signIn };
