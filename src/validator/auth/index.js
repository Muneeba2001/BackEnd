import Joi from "joi";

const AuthValidator = 
    {
      LogIn : (req,res,next)=> {
        //creating schema
        const schema = Joi.object({
            email : Joi.string().email().required(),
            password : Joi.string().required()
        }); 

        //validating schema
        const {value, error} = schema.validate(req.body);
        if(error){
            return res.status(400).json({
                message: "Invalid Data",
                error,
            })
        }
        next();
      }
     
    }

export default AuthValidator;