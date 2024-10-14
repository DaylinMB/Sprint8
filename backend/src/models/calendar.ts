import { DataTypes } from 'sequelize';
import db from '../db/connection';


const EventsCalendar = db.define('EventsCalendar', {
    title: {
        type: DataTypes.STRING,
    },
    start: {
        type: DataTypes.DATE,
    },
    end: {
        type: DataTypes.DATE
    }
},
{
    modelName: 'EventCalendar',
    tableName: 'calendar',
    createdAt: false,
    updatedAt: false,
});

export default EventsCalendar;