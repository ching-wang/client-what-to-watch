import { sanitiseQuery } from "../common/util";

const API_ENDPOINT = "http://localhost:3000/api/v1";
const LOGIN_URL = `${API_ENDPOINT}/login`;
const USER_URL = `${API_ENDPOINT}/users/`;
const VALIDATE_URL = `${API_ENDPOINT}/validate`;
const WISHLISTS_URL = `${API_ENDPOINT}/wish_lists`;
const WISHLIST_ITEMS_URL = `${API_ENDPOINT}/wish_list_items`;
const SEARCH_URL = `${API_ENDPOINT}/search`;
const MOVIE_URL = `${API_ENDPOINT}/movies`;

const jsonify = res => {
  if (res.ok) {
    return res.json();
  } else {
    throw res.json();
  }
};

const handleLoginResponse = loginResponse => {
  if (!loginResponse.token) {
    throw new Error("Bad login response! " + JSON.stringify(loginResponse));
  }
  localStorage.token = loginResponse.token;
  return validate().then(res => res.user);
};

const login = loginDetails =>
  fetch(LOGIN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({ user: loginDetails })
  })
    .then(jsonify)
    .then(handleLoginResponse);

const signup = signUpData => {
  fetch(USER_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({ user: signUpData })
  })
    .then(jsonify)
    .then(user => {
      if (user) {
        return login(signUpData.email, signUpData.password);
      }
    });
};

const updateProfile = (userId, newProfileFormData) => {
  return fetch(USER_URL + userId, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: localStorage.token
    },
    body: JSON.stringify(newProfileFormData)
  }).then(jsonify);
};

const handleSignupResponse = signupResponse => {
  login(signupResponse);
};

const validate = () =>
  fetch(VALIDATE_URL, {
    method: "POST",
    headers: {
      Authorization: localStorage.token
    }
  }).then(jsonify);

const postWishlist = wishList =>
  fetch(WISHLISTS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: localStorage.token
    },
    body: JSON.stringify({ wishList })
  }).then(jsonify);

const addToWishList = (wishListId, imdbID) => {
  return fetch(WISHLIST_ITEMS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: localStorage.token
    },
    body: JSON.stringify({
      wish_list_id: wishListId,
      imdb_id: imdbID
    })
  }).then(jsonify);
};

const deleteWishlist = wishListId =>
  fetch(WISHLISTS_URL + wishListId, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.token
    }
  });

const searchMovies = query => {
  query = sanitiseQuery(query);
  return fetch(`${SEARCH_URL}?s=${query}`).then(res => res.json());
};

const getMovie = imdbID => {
  return fetch(`${MOVIE_URL}/${imdbID}`).then(res => res.json());
};

const getWishList = wishListId => {
  return fetch(`${WISHLISTS_URL}/${wishListId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: localStorage.token
    }
  }).then(res => res.json());
};

const clearToken = () => {
  localStorage.removeItem("token");
};

export default {
  login,
  signup,
  validate,
  postWishlist,
  deleteWishlist,
  getWishList,
  updateProfile,
  searchMovies,
  getMovie,
  addToWishList,
  hasToken: () => !!localStorage.token,
  clearToken
};
