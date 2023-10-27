
import databseConfig from '../config/config.json'
import { Sequelize } from 'sequelize-typescript';


const sequelize = new Sequelize (
    databseConfig.test.database,
    databseConfig.test.username,
    databseConfig.test.password
  )


export default sequelize