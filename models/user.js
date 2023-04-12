const Sequelize=require('sequelize');
const sequelize=require('../util/database');
const User=sequelize.define('User',{
   
    name:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    email:{
        type:Sequelize.STRING,
       // primaryKey:true,
        allowNull:false,
    },
    phone:{
        type:Sequelize.BIGINT,
        allowNull:false,
    },
    password:{
        type:Sequelize.STRING,
        allowNull:false
    },
    payment:{
        type:Sequelize.STRING,
        allowNull:true,
    } ,
    total:{
        type:Sequelize.FLOAT,
        allowNull:true,
    }   
}); 
console.log(User===sequelize.models.user)
console.log('this is user model')

module.exports=User;