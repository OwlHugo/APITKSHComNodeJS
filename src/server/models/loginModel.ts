import { DataTypes, Model } from 'sequelize';
import {sequelize} from '../database/sequelize';

class Login extends Model {
  public id!: number;
  public email!: string;
  public password_hash!: string;
}

Login.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password_hash: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'Login',
    tableName: 'users'
  }
);

export { Login };
