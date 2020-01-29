const API_ENDPOINT = "http://localhost:3000/api/v1";
const LOGIN_URL = `${API_ENDPOINT}/login`;
const SIGNUP_URL = `${API_ENDPOINT}/users`;
const VALIDATE_URL = `${API_ENDPOINT}/validate`;
const WISHLISTS_URL = `${API_ENDPOINT}/wishlists`;

const jsonify = res => {
  if (res.ok) {
    return res.json();
  } else {
    throw res.json();
  }
};

const handleUserReponse = user => {
  if (user.token) {
    localStorage.token = user.token;
  }
  return user;
};

const login = user =>
  fetch(LOGIN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({ user })
  })
    .then(jsonify)
    .then(handleUserReponse);

const signup = user =>
  fetch(SIGNUP_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({ user })
  })
    .then(jsonify)
    .then(handleUserReponse);

const validate = () =>
  fetch(VALIDATE_URL, {
    method: "POST",
    headers: {
      Authorisation: localStorage.token
    }
  })
    .then(jsonify)
    .then(handleUserReponse);

const postWishlist = wishList =>
  fetch(WISHLISTS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorisation: localStorage.token
    },
    body: JSON.stringify({ wishList })
  }).then(jsonify);

const deleteWishlist = wishListId =>
  fetch(WISHLISTS_URL + wishListId, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorisation: localStorage.token
    }
  });

export default {
  login,
  signup,
  validate,
  postWishlist,
  deleteWishlist,
  hasToken: () => !!localStorage.token,
  clearToken: () => localStorage.removeItem("token")
};