import { DataTypes, Model, Sequelize } from 'sequelize';
import {sequelize} from '../database/sequelize';

class Hero extends Model {
  public id!: number;
  public main_message!: string;
  public subtitle!: string;
}

Hero.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    main_message: {
      type: DataTypes.STRING,
      allowNull: false
    },
    subtitle: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'Hero',
    tableName: 'heroes'
  }
);

export { Hero };
