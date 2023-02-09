const Mongoose = require("mongoose");

const schema = Mongoose.Schema;

const userEmployeeSchema = new schema(
    {
        FullName: String,
    Location: String,
    Position: String,
    Salary: String,
    addedDate:{
        type:Date,
        default:Date.now
    }

    }
)

const UserEmployeeModel = Mongoose.model("useremploys",userEmployeeSchema)

module.exports = UserEmployeeModel;