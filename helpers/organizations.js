const {Organization} = require("../models");

exports.createOrganization = async (data) => {
    const organization = new Organization(data);
    await organization.save();
    return organization;
}

exports.retrieveAllOrganizations = async () => {
    const organizations=await Organization.findAll();
    return organizations;
}

exports.retrieveOrganizationByEmail = async (email) => {
    const organization = await Organization.findOne({ where : { email }});
    return organization;
}

exports.retrieveOrganizationById = async (id) => {
    const organization = await Organization.findByPk(id);
    return organization;
}

exports.updateOrganizationWithData = async (organization, data) => {
    if(data.name){
        organization.name=data.name;
    }
    if(data.password){
        organization.password=data.password;
    }
    return await organization.save();
}

exports.deleteOrganizationById = async (organizationId) => {
    const organization = await Organization.destroy({where:{id:organizationId} });
    return organization;
}