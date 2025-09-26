const { Sequelize, User } = require('../models/index')
const { Op } = Sequelize


const userController = {
    async get(req, res){
        await User.findOne().then(users =>{
            if(users){
                res.status(200).send({message: 'Users', users})
            }else{
                res.status(500).send({message: 'Incorrect email'})
            }
        }).catch(error =>{console.log(error)})
    },

    async register(req, res, next){
        console.log('req.body', req.body)
        console.log('hola')
            let check
            try{
                await Sequelize.authenticate()
                 check = await User.findOne({
                    where:{
                        email: req.body.email
                    }
                })
                console.log('check')
                if(check){
                    const error = { status : 400, message: 'Email already used'}
                    throw error;
                } 
               const { email, password } = req.body
               
               if (!email || !password) {
                return res.status(400).json({ message: "Email and password are required" });
              }
                if(password){
                    console.log(password)
                    const user = await User.create({ email, password})
                    res.status(201).send({message: 'User created'})
                }
                else {
                    const error = {status: 500, message: 'Password is required'}
                    throw (error)
                  }
            }
            catch(error){
               return next(error)
            }
        }
    
}

    module.exports = userController