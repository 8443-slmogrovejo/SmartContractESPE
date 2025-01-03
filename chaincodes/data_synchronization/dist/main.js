"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chaincode_1 = require("./lib/chaincode");
const data_synchronization_controller_1 = require("./src/controller/data_synchronization.controller");
(0, chaincode_1.default)({
    chainCodeName: 'data_synchronization',
    chainCode: data_synchronization_controller_1.Data_synchronizationController,
});
//# sourceMappingURL=main.js.map