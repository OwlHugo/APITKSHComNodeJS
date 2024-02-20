import { DataTypes, Model } from 'sequelize';
import {sequelize} from '../database/sequelize';

class Register extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
  public password_hash!: string;
  public is_admin!: boolean;
}

Register.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password_hash: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    is_admin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  },
  {
    sequelize,
    modelName: 'Register',
    tableName: 'users'
  }
);

export { Register };
