import { DataTypes } from 'sequelize';
import db from '../db/connection';

const chart = db.define(
  'Chart',
  {
    name: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    data: {
      type: DataTypes.STRING,
    }
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);

export default chart;
