
import { sequelize } from '../database/sequelize'; 

import { Contact } from '../models/contactModel';
import { Hero } from '../models/heroModel';
import { Deposition } from '../models/depositionModel';
import { Register } from '../models/registerModel';

const models = [Contact, Hero, Deposition, Register];

const initializeModels = async () => {
  try {
    await sequelize.authenticate(); 
    console.log('Connection to database has been established successfully.');

    models.forEach((model) => {
      model.init({}, {
        sequelize,
        modelName: model.name,
        tableName: model.tableName
      });
    });

    await sequelize.sync({ force: false });
    console.log('Database synchronized');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

initializeModels();

export { sequelize };
