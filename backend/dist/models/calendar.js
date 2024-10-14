"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const EventsCalendar = connection_1.default.define('EventsCalendar', {
    title: {
        type: sequelize_1.DataTypes.STRING,
    },
    start: {
        type: sequelize_1.DataTypes.DATE,
    },
    end: {
        type: sequelize_1.DataTypes.DATE
    }
}, {
    modelName: 'EventCalendar',
    tableName: 'calendar',
    createdAt: false,
    updatedAt: false,
});
exports.default = EventsCalendar;
