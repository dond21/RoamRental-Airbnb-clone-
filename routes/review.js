const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware");
const { createReview, destroyReview } = require("../controllers/review.js");

//reviews
//post review route
router.post("/", isLoggedIn, validateReview, wrapAsync(createReview));

//review delete
router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(destroyReview)
);

module.exports = router;
