const {Company: Companies} = require("../models");

exports.createCompany = async (data) => {
    const company = new Companies(data);
    await company.save();
    return company;
}

exports.retrieveAllCompanies = async () => {
    const companies=await Companies.findAll();
    return companies;
}

exports.retrieveCompanyByEmail = async (email) => {
    const company = await Companies.findOne({ where : { email }});
    return company;
}

exports.retrieveCompanyById = async (id) => {
    const company = await Companies.findByPk(id);
    return company;
}

exports.updateCompanyWithData = async (company, data) => {
    if(data.name){
        company.name=data.name;
    }
    if(data.password){
        company.password=data.password;
    }
    return await company.save();
}

exports.deleteCompanyById = async (companyId) => {
    const company = await Companies.destroy({where:{id:companyId} });
    return company;
}