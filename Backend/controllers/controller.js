const Member = require('../model/memberSchema');

const getHomePage = async (req,res) => {
    res
        .status(200)
        .send('Home page');
}

const getCOC = async (req,res) => {
    res
        .status(200)
        .send('COC Page' );
}

const getPrivacyPolicy = async (req,res) => {
    res 
        .status(200)
        .send('Privacy Policy Page')
}

const createMember = async (req,res) => {
    const member = await Member.create(req.body);
    res
        .status(200)
        .json({ member });
}

const getAllMembers = async (req,res) => {
    const members = await Member.find({});
    res
        .status(200)
        .json({ members });
}

const deleteMember = async (req,res) => {
    const { id: memberID } = req.params;
    const member = await Member.findOneAndDelete({ _id: memberID });
    res
        .status(200)
        .json({ member });
}

module.exports = {
    getHomePage,
    getCOC,
    getPrivacyPolicy,
    createMember,
    getAllMembers,
    deleteMember
}