const {createOrganization, retrieveOrganizationById, deleteOrganizationById, retrieveAllOrganizations, updateOrganizationWithData} = require("../helpers/organizations");

exports.createNewOrganization = async (req, res) => {
    try{
        if( req.body.name && req.body.package && req.body.bond){
            const organization = await createOrganization(req.body);
            res.json(organization);
        } else {
            res.status(400).json({
                error: "Invalid input"
            })
        }
    } catch (err) {
        res.status(500).json({
            error: err.message,
        })
    }
}

exports.retrieveOrganization = async (req, res) => {
    try{
        if(req.params.id){
            const organization = await retrieveOrganizationById(req.params.id);
            res.json(organization);
        } else {
            res.status(400).json({
                error: "Invalid input"
            })
        }
    } catch (err) {
        res.status(500).json({
            error: err.message,
        })
    }
}

exports.updateOrganization = async (req, res) => {
    try{
        if(req.params.id){
            const organization = await retrieveOrganizationById(req.params.id);
            const updatedOrganization = await updateOrganizationWithData(organization, req.body)
            res.json(updatedOrganization);
        } else {
            res.status(400).json({
                error: "Invalid input"
            })
        }
    } catch (err) {
        res.status(500).json({
            error: err.message,
        })
    }
}

exports.retrieveAllOrganizations = async (req, res) => {
    try{
        const organization = await retrieveAllOrganizations();
        res.json(organization);
    } catch (err) {
        res.status(500).json({
            error: err.message,
        })
    }
}


exports.deleteOrganization = async (req, res) => {
    try{
        if(req.params.id){
            await deleteOrganizationById(req.params.id);
            res.json({message:"Organization deleted"});
        } else {
            res.status(400).json({
                error: "Invalid input"
            })
        }
    } catch (err) {
        res.status(500).json({
            error: err.message,
        })
    }
}