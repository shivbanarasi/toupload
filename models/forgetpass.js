const Sequelize=require('sequelize');
const sequelize=require('../util/database');
const Forgetpass=sequelize.define('forgetpass',{
   
    email:{
        type:Sequelize.STRING,
      
        allowNull:false,
    },
    Id:{
        type:Sequelize.STRING,
        primaryKey:true,
        allowNull:false,
    },
   
    isactive:{
        type:Sequelize.STRING,
        allowNull:true,
    },

}); 
//Forgetpass.sync({force:true})
console.log(Forgetpass===sequelize.models.Forgetpass)
console.log('this is payment model')

module.exports=Forgetpass;