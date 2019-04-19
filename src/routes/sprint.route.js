const express = require('express');
const router = express.Router();

// Authenticate function
import Authenticate from '../middlewares/auth.middleware';

// Controllers function
import SprintController from '../controllers/sprint.controller';
import IssueController from '../controllers/issue.controller';

// Create new Controller contructor
const sprintController = new SprintController();
const issueController = new IssueController();

// Route and method: GET POST PUT DELETE
router.post('/', Authenticate(),  sprintController.create);
router.post('/addIssue', Authenticate(),  sprintController.addIssueToSprint);
router.get('/:id', Authenticate(),  sprintController.getSprint);
router.get('/notComplete', Authenticate(),  sprintController.getListSprintNotComplete);
router.get('/', Authenticate(),  sprintController.getListAll);
router.put('/', Authenticate(),  sprintController.update);
router.post('/start', Authenticate(), sprintController.startSprint)
router.post('/complete', Authenticate(), sprintController.completeSprint)
router.get('/active', Authenticate(), sprintController.getSprint)


module.exports = router;