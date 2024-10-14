import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Marker = db.define(
  'Marker',
  {
    latitude: {
      type: DataTypes.NUMBER,
    },
    longitude: {
      type: DataTypes.NUMBER,
    },
    // category: {
    //   type: DataTypes.STRING, 
    //   allowNull: false, 
    // },
  },
  {
    createdAt: false,
    updatedAt: false,
    tableName: 'marker',
  }
);
Marker.removeAttribute('id');

export default Marker;
