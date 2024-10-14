"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Marker = connection_1.default.define('Marker', {
    latitude: {
        type: sequelize_1.DataTypes.NUMBER,
    },
    longitude: {
        type: sequelize_1.DataTypes.NUMBER,
    },
    // category: {
    //   type: DataTypes.STRING, 
    //   allowNull: false, 
    // },
}, {
    createdAt: false,
    updatedAt: false,
    tableName: 'marker',
});
Marker.removeAttribute('id');
exports.default = Marker;
