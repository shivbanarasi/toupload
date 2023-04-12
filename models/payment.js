const Sequelize=require('sequelize');
const sequelize=require('../util/database');
const Payment=sequelize.define('payment',{
   
    
    orderId:{
        type:Sequelize.STRING,
        allowNull:false,
    },
   
    paymentId:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    sign:{
        type:Sequelize.STRING,
        allowNull:true,
    } ,
   
}); 
console.log(Payment===sequelize.models.Payment)
console.log('this is payment model')

module.exports=Payment;