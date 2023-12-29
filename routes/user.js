const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const {
  signUp,
  renderSignUpForm,
  login,
  renderLoginFrom,
  logout,
  user_login,
} = require("../controllers/user.js");

router.route("/signup").get(renderSignUpForm).post(wrapAsync(signUp));

router
  .route("/login")
  .get(renderLoginFrom)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    user_login
  );

router.get("/logout", logout);

module.exports = router;
