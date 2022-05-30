const { Intern} = require("../models");

exports.createIntern = async (data) => {
    const intern = new Intern(data);
    await intern.save();
    return intern;
}

exports.retrieveAllInterns = async () => {
    const interns=await Intern.findAll();
    return interns;
}

exports.retrieveInternByEmail = async (email) => {
    const intern = await Intern.findOne({ where : { email }});
    return intern;
}

exports.retrieveInternById = async (id) => {
    const intern = await Intern.findByPk(id);
    return intern;
}

exports.updateInternWithData = async (intern, data) => {
    if(data.name){
        intern.name=data.name;
    }
    if(data.password){
        intern.password=data.password;
    }
    return await intern.save();
}

exports.deleteInternById = async (internId) => {
    const intern = await Intern.destroy({where:{id:internId} });
    return intern;
}