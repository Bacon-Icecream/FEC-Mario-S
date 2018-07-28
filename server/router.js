const router = require('express').Router();
const controller = require('./controller');

router.route('/customer-reviews/items')
.get(controller.items.get)
.post(controller.items.post)
.put(controller.items.put);

router.route('/customer-reviews/reviews')
.get(controller.reviews.get)
.post(controller.reviews.post)
.put(controller.reviews.put);

router.route('/customer-reviews/reviewsItem')
.get(controller.reviewsItem.get);

router.route('/customer-reviews/images')
.get(controller.images.get)
.post(controller.images.post);

router.route('/customer-reviews/imagesItem')
.get(controller.imagesItem.get);

module.exports = router;