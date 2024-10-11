"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChart = void 0;
const charts_1 = __importDefault(require("../models/charts"));
const getChart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.params;
    const chart = yield charts_1.default.findOne({
        where: {
            name,
        },
    });
    console.log("CHART: ", chart);
    if (chart) {
        res.json(chart);
    }
    else {
        res.status(404).json({
            msg: ` No existe un chart con el nombre ${name}`,
        });
    }
});
exports.getChart = getChart;
