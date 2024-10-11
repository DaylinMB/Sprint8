"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const charts_1 = require("../controllers/charts");
const router = (0, express_1.Router)();
router.get('/:name', charts_1.getChart);
exports.default = router;
