"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productctr_1 = require("../controllers/productctr");
const router = (0, express_1.Router)();
router.get('/', productctr_1.getProducts);
exports.default = router;
