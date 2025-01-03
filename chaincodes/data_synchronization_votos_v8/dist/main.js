"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chaincode_1 = require("./lib/chaincode");
const data_synchronization_votos_v8_controller_1 = require("./src/controller/data_synchronization_votos_v8.controller");
(0, chaincode_1.default)({
    chainCodeName: 'data_synchronization_votos_v8',
    chainCode: data_synchronization_votos_v8_controller_1.Data_synchronization_votos_v8Controller,
});
//# sourceMappingURL=main.js.map