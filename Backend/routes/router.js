const express = require('express');
const router = express.Router();
const { getHomePage, getCOC, createMember, getAllMembers, getPrivacyPolicy, deleteMember } = require('../controllers/controller');

router.route('/')
    .get(getHomePage);

router.route('/code-of-conduct')
    .get(getCOC);

router.route('/privacy-policy')
    .get(getPrivacyPolicy);

router.route('/add-member')
    .post(createMember);

router.route('/members')
    .get(getAllMembers);

router.route('/delete/:id')
    .delete(deleteMember);

module.exports = router