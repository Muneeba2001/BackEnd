import StudentModel from "../../model/student/index.js"

const studentController = {

    getAll : async (req,res)=> {
        try {
            const FindAll = await StudentModel.findAll();
            res.status(200).json({message: "FindAll", data: FindAll})
        } catch (error) {
            res.status(500).json({message: "Internal server error"})
        }
        
    },
    getOne: async (req,res) => {
        try {
            //destructring 
            const {id} = req.params;
            const findOne = await StudentModel.findByPk(id);
            if(!findOne){
                return res.status(404).json({message : "NotFound"});
            }
            res.status(200).json({message : "Find One", data: findOne})
        } catch (error) {
            res.status(500).json({message: "Internal server error"})  
        }
    },
    Create : async (req,res)=> {
        try {
            const payload = req.body; 
            const createData = new StudentModel();
            createData.firstName = payload.firstName;
            createData.lastName = payload.lastName;
            createData.subject = payload.subject;
            createData.Age = payload.Age;
            await createData.save();
            if(!payload){
                return res.status(404).json({message : "NotFound"});
            }
            res.status(200).json({message : "Created Data", data : createData})
        } catch (error) {
            console.log(error)
            res.status(500).json({message: "Internal server error"})  
        }
    },
    
}


export default studentController;