const express = require('express');
const router = express.Router();
const Goal = require('../models/goal');
const GoalController = require('../controllers/goals');

router.get('/',GoalController.goals_get_all);

router.post('/',GoalController.create_goal);

router.get('/:goalId', GoalController.goals_get_one);

router.patch('/:goalId',GoalController.update_goal);

router.delete('/:goalId',GoalController.delete_goal);

router.post('/:goalId/:userId/createComment',GoalController.post_comment);

router.patch(':/goalId/:commentId/removeComment',GoalController.remove_comment);

module.exports=router;