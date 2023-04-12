const Sequelize=require('sequelize');
const sequelize=require('../util/database');
const Expence=sequelize.define('expence',{
   
    discription:{
        type:Sequelize.STRING,
        allowNull:false,
    },
   
    category:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    amount:{
        type:Sequelize.FLOAT,
        allowNull:true,
    } ,
   
}); 


console.log(Expence===sequelize.models.expence)
console.log('this is expence model')

module.exports=Expence;