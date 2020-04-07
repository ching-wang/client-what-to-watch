import { sanitiseQuery } from "../common/util";
const PRODUCTION = "https://what-to-watch-tonight.herokuapp.com/api/v1";
const DEVELOPMENT = "http://localhost:3000/api/v1";
const API_ENDPOINT = DEVELOPMENT;
const LOGIN_URL = `${API_ENDPOINT}/login`;
const USER_URL = `${API_ENDPOINT}/users/`;
const VALIDATE_URL = `${API_ENDPOINT}/validate`;
const WISHLISTS_URL = `${API_ENDPOINT}/wish_lists`;
const WISHLIST_ITEMS_URL = `${API_ENDPOINT}/wish_list_items`;
const SEARCH_URL = `${API_ENDPOINT}/search`;
const MOVIE_URL = `${API_ENDPOINT}/movies`;

const jsonify = async (res) => {
  if (res.ok) {
    return res.json();
  } else {
    const errorBody = await res.json();
    throw errorBody.errors[0];
  }
};

const login = (loginDetails) =>
  fetch(LOGIN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ user: loginDetails }),
  }).then(jsonify);

const signup = (signUpData) => {
  return fetch(USER_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ user: signUpData }),
  }).then(jsonify);
};

const updateProfile = (userId, newProfileFormData) => {
  return fetch(USER_URL + userId, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: localStorage.token,
    },
    body: JSON.stringify(newProfileFormData),
  }).then(jsonify);
};

const validate = () =>
  fetch(VALIDATE_URL, {
    method: "POST",
    headers: {
      Authorization: localStorage.token,
    },
  }).then(jsonify);

const createWishlist = (wishListForm) =>
  fetch(WISHLISTS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: localStorage.token,
    },
    body: JSON.stringify(wishListForm),
  }).then(jsonify);

function deleteWishlist(wishListId) {
  return fetch(`${WISHLISTS_URL}/${wishListId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.token,
    },
  }).then(jsonify);
}

const getUserWishLists = () => {
  return fetch(WISHLISTS_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: localStorage.token,
    },
  }).then((res) => res.json());
};

const getWishList = (wishListId) => {
  return fetch(`${WISHLISTS_URL}/${wishListId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: localStorage.token,
    },
  }).then((res) => res.json());
};

const updateWishlist = (wishlistId, wishListFormData) => {
  return fetch(`${WISHLISTS_URL}/${wishlistId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: localStorage.token,
    },
    body: JSON.stringify(wishListFormData),
  }).then(console.log);
};

const getUserWishListItems = () => {
  return fetch(WISHLIST_ITEMS_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: localStorage.token,
    },
  }).then((res) => res.json());
};

const addToWishList = (wishListId, imdbID) => {
  return fetch(WISHLIST_ITEMS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: localStorage.token,
    },
    body: JSON.stringify({
      wish_list_id: wishListId,
      imdb_id: imdbID,
    }),
  }).then(jsonify);
};

const deleteUser = (userId) => {
  return fetch(USER_URL + userId, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: localStorage.token,
    },
  });
};

const deleteFromWishList = (wishListItemId) => {
  return fetch(`${WISHLIST_ITEMS_URL}/${wishListItemId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: localStorage.token,
    },
  }).then((res) => console.log(res.status));
};

const searchMovies = (query, page = 1) => {
  query = sanitiseQuery(query);
  return fetch(`${SEARCH_URL}?s=${query}&page=${page}`).then((res) =>
    res.json()
  );
};

const getMovie = (imdbID) => {
  return fetch(`${MOVIE_URL}/${imdbID}`).then((res) => res.json());
};

const clearToken = () => {
  localStorage.removeItem("token");
};

export default {
  login,
  deleteUser,
  signup,
  validate,
  getUserWishLists,
  createWishlist,
  deleteWishlist,
  getWishList,
  updateWishlist,
  getUserWishListItems,
  updateProfile,
  searchMovies,
  getMovie,
  addToWishList,
  deleteFromWishList,
  hasToken: !!localStorage.token,
  clearToken,
};
