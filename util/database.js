const Sequelize=require('sequelize');
require('dotenv').config();
const sequelize=new Sequelize(process.env.DB_SCHEMA,process.env.DB_USER,process.env.DB_PASSWORD,{
    dialect:'mysql',
    host:process.env.DB_HOST
})



try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

module.exports=sequelize;