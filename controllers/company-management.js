const {createCompany, retrieveCompanyById, deleteCompanyById, retrieveAllCompanies, updateCompanyWithData} = require("../helpers/Companies");

exports.createNewCompany = async (req, res) => {
    try{
        if(req.body.email && req.body.name && req.body.password){
            const company = await createCompany(req.body);
            res.json(company);
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

exports.retrieveCompany = async (req, res) => {
    try{
        if(req.params.id){
            const company = await retrieveCompanyById(req.params.id);
            res.json(company);
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

exports.updateCompany = async (req, res) => {
    try{
        if(req.params.id){
            const company = await retrieveCompanyById(req.params.id);
            const updatedCompany = await updateCompanyWithData(company, req.body)
            res.json(updatedCompany);
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

exports.retrieveAllCompanies = async (req, res) => {
    try{
        const company = await retrieveAllCompanies();
        res.json(company);
    } catch (err) {
        res.status(500).json({
            error: err.message,
        })
    }
}


exports.deleteCompany = async (req, res) => {
    try{
        if(req.params.id){
            await deleteCompanyById(req.params.id);
            res.json({message:"Company deleted"});
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