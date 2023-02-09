//task 1 : initiate app and run server at 3000

const Express = require("express");
const Bodyparser = require("body-parser");
const  Mongoose  = require("mongoose");
const UserEmployeeModel = require("./model/employeeDb")
const Cors = require("cors");
const  UserModel  = require ("./model/loginuser");



const app = new Express();

//to read file using body-parser
app.use(Bodyparser.json());
app.use(Bodyparser.urlencoded({extended:true}))
app.use(Cors())

//connecting with mongodb database
Mongoose.connect("mongodb+srv://pearlmongo123:hellomongo123@cluster0.rqz4jdj.mongodb.net/UserEmployeeDB?retryWrites=true&w=majority",{useNewUrlParser:true});

//Task 2 : write api with error handling and appropriate api mentioned in the TODO below

// Find 404 and hand over to error handler
app.use((err,req, res, next) => {
    next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
    console.error(err.message) // Log error message in our server's console
    if (!err.statusCode) err.statusCode = 500 // If err has no specified error code, set error code to 'Internal Server Error (500)'
    res.status(err.statusCode).send(err.message) // All HTTP requests must have a response, so let's send back an error with its status code and message
})

const createError = require('http-errors');



//admin CRUD operations

//adding employee
app.post('/addemployee',async(req,res)=>{
console.log(req.body)
const userEmployee = new UserEmployeeModel(req.body);
 await userEmployee.save(
    (error,data)=>{
        if(error){
            res.json({"Status":"Error","Error":error})
        }else{
            res.json({"Status":"Success","Success":data})
        }
    }
)

   
})

// view all employees

app.post('/viewallemployees',async(req,res)=>{
    try{
        const data = await UserEmployeeModel.find();
        console.log("Data from user input=", data);
        res.send(data);
    }
    catch(err){
        console.log(`Error ${err}`);
    }

})

app.get('/viewallemployees',async(req,res)=>{
    UserEmployeeModel.find((err,data)=>{
        if (err) {
            res.json({"status":"error","error":err})
        } else {
            res.json(data);
        }
 
        }
     )

})



app.post('/searchemployee',async(req,res)=>{
    try{
        const data = await UserEmployeeModel.find({"_id":req.body._id});
     
        res.json({"Status":"Success","Data":data});  
    }
    catch(err){
res.status(500).send(err)
    }
})

app.post('/updateemployee',async(req,res)=>{
    const  _id = req.body._id
    const  data = req.body;
    UserEmployeeModel.findOneAndUpdate(
       {"_id":_id},data,(error,data)=>{
        if (error) {
            res.json({"Status":"Error","Error":error})    
            
        } else {
            res.json({"Status":"updated","Data":data})
        }
       }
    )
    })
    

app.delete('/deleteemployee',async(req,res)=>{
    const  _id = req.body._id
    const  data = req.body;
    UserEmployeeModel.findOneAndDelete(
       {"_id":_id},data,(error,data)=>{
        if (error) {
            res.json({"Status":"Error","Error":error})    
            
        } else {
            res.json({"Status":"Deleted","Data":data})
        }
       }
    )
    })

//signup

app.post("/signup", async (req, res) => {
  const { fname, lname, email, password, userType } = req.body;

  const encryptedPassword = await bcrypt.hash(password, 10);
  try {
    const oldUser = await UserModel.findOne({ email });

    if (oldUser) {
      return res.json({ error: "User Exists" });
    }
    await UserModel.create({
      fname,
      lname,
      email,
      password: encryptedPassword,
      userType,
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error" });
  }
});





//Login user

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
  
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.json({ error: "User Not found" });
    }
    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ email: user.email }, JWT_SECRET, {
        expiresIn: "10s",
      });
  
      if (res.status(201)) {
        return res.json({ status: "ok", data: token });
      } else {
        return res.json({ error: "error" });
      }
    }
    res.json({ status: "error", error: "Invalid Password" });
  });
  
  app.post("/userData", async (req, res) => {
    const { token } = req.body;
    try {
      const user = jwt.verify(token, JWT_SECRET, (err, res) => {
        if (err) {
          return "token expired";
        }
        return res;
      });
      console.log(user);
      if (user == "token expired") {
        return res.send({ status: "error", data: "token expired" });
      }
  
      const useremail = user.email;
      UserModel.findOne({ email: useremail })
        .then((data) => {
          res.send({ status: "ok", data: data });
        })
        .catch((error) => {
          res.send({ status: "error", data: error });
        });
    } catch (error) {}
  });


    
app.listen(3002,(req,res)=>{
    console.log("server started listening")
})


