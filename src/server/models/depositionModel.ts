import { DataTypes, Model } from 'sequelize';
import {sequelize} from '../database/sequelize';

class Deposition extends Model {
  public id!: number;
  public author!: string;
  public main_message!: string;
  public subtitle!: string;
  public rating!: number;
}

Deposition.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false
    },
    main_message: {
      type: DataTypes.STRING,
      allowNull: false
    },
    subtitle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'Deposition',
    tableName: 'depositions'
  }
);

export { Deposition };
