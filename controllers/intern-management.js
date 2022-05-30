const {createIntern, retrieveInternById, deleteInternById, retrieveAllInterns, updateInternWithData} = require("../helpers/Interns");
const {createOrganization} = require("../helpers/organizations");


exports.createNewIntern= async (req, res)=>{
    try {
        if (req.body.rollNo && req.body.companyD ) {
            const intern =await createIntern(req.body);
            await intern.save();
            res.json(intern);
        } else {
            res.status(400).json({
                error: "Invalid input"
            })

        }


    }catch (err){
        res.status(500).json({
            error: err.message,
        })
    }
}



exports.retrieveIntern = async (req, res) => {
    try{
        if(req.params.id){
            const intern = await retrieveInternById(req.params.id);
            res.json(intern);
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

exports.updateIntern = async (req, res) => {
    try{
        if(req.params.id){
            const intern = await retrieveInternById(req.params.id);
            const updatedIntern = await updateInternWithData(intern, req.body)
            res.json(updatedIntern);
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

exports.retrieveAllInterns = async (req, res) => {
    try{
        const intern = await retrieveAllInterns();
        res.json(intern);
    } catch (err) {
        res.status(500).json({
            error: err.message,
        })
    }
}


exports.deleteIntern = async (req, res) => {
    try{
        if(req.params.id){
            await deleteInternById(req.params.id);
            res.json({message:"Intern deleted"});
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