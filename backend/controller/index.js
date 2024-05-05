const indexH =require('../helper/indexH')
const bcrypt = require("bcrypt");
const {token} =require('../utils/jwt')
module.exports={
    
    signup:async (req,res)=>{
        console.log(req.body);
        try {
            const { name, email, password, age } = req.body ;
      const datas= req.body
      const user = await indexH.findUser(email);
      if (!user) {
        const insertdata = await indexH.insert(datas);
        const Token=token(email)
            res.status(200).json({ message: "successfully inserted user data",token:Token });
        }
        else{
            console.log("existing email");
            res.status(400).json({message:"email Exist"})

        }
        } catch (error) {
            res.status(400).json({ error: "error inserting controller" });
 
        }
    },
    loginUser:async (req, res) => {
        try {
            const { email, password } = req.body;
            console.log(req.body);
          const user= await indexH.findUser(email)
          console.log(user);
          
          if( !user){
            res.status(404).json({message:"invalid user"})
          }
          else{
                const matched=await bcrypt.compare(password, user.password)
                if (matched) {
                  const Token=token(email)
                  res.status(200).json({ message: "user loggedIn",token:Token });
                }
                else{
                    res.status(400).json({message:"invalid password"})
                } 
          } 
        } catch (error) {
          res.status(404).json({ message: "login error" });
        }
      }
}
