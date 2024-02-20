import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'tksh_codebase_db',
  username: 'postgres',
  password: '123'
});

export { sequelize }; 
