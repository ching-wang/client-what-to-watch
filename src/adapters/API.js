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
  fetch(SIGNUP_URL, {
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

const deleteWishlist = wishListId =>
  fetch(WISHLISTS_URL + wishListId, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.token
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
