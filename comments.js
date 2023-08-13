// Create web server

// Import express
const express = require('express');
const router = express.Router();

// Import comments controller
const commentsController = require('../controllers/commentsController');

// Import check auth middleware
const checkAuth = require('../middleware/check-auth');

// Handle incoming GET requests to /comments
router.get('/', commentsController.comments_get_all);

// Handle incoming POST requests to /comments
router.post('/', checkAuth, commentsController.comments_create_comment);

// Handle incoming GET requests to /comments/:commentId
router.get('/:commentId', commentsController.comments_get_comment);

// Handle incoming PATCH requests to /comments/:commentId
router.patch('/:commentId', checkAuth, commentsController.comments_update_comment);

// Handle incoming DELETE requests to /comments/:commentId
router.delete('/:commentId', checkAuth, commentsController.comments_delete_comment);

module.exports = router;