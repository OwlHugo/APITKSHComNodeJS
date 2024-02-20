import { DataTypes, Model, Sequelize } from 'sequelize';
import {sequelize} from '../database/sequelize';

class Contact extends Model {
  public id!: number;
  public full_name!: string;
  public email!: string;
  public message!: string;
}

Contact.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    full_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'Contact',
    tableName: 'contacts'
  }
);

export { Contact };
