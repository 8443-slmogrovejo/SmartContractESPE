"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotosListas = void 0;
const tslib_1 = require("tslib");
const yup = require("yup");
const decorators_1 = require("../../lib/decorators");
const ochain_model_1 = require("../../lib/ochain-model");
let VotosListas = class VotosListas extends ochain_model_1.OchainModel {
    constructor() {
        super(...arguments);
        this.assetType = "votosListas";
    }
};
tslib_1.__decorate([
    (0, decorators_1.Mandatory)(),
    (0, decorators_1.Validate)(yup.string().min(1).max(40)),
    tslib_1.__metadata("design:type", String)
], VotosListas.prototype, "idVoto", void 0);
tslib_1.__decorate([
    (0, decorators_1.Mandatory)(),
    (0, decorators_1.Validate)(yup.string().min(1).max(10)),
    tslib_1.__metadata("design:type", String)
], VotosListas.prototype, "idLista", void 0);
tslib_1.__decorate([
    (0, decorators_1.Mandatory)(),
    (0, decorators_1.Validate)(yup.string().min(1).max(10)),
    tslib_1.__metadata("design:type", String)
], VotosListas.prototype, "periodoPostulacion", void 0);
tslib_1.__decorate([
    (0, decorators_1.Mandatory)(),
    (0, decorators_1.Validate)(yup.string().min(1).max(10)),
    tslib_1.__metadata("design:type", String)
], VotosListas.prototype, "idUs", void 0);
tslib_1.__decorate([
    (0, decorators_1.Mandatory)(),
    (0, decorators_1.Validate)(yup.string()),
    tslib_1.__metadata("design:type", String)
], VotosListas.prototype, "fechaVotacion", void 0);
tslib_1.__decorate([
    (0, decorators_1.Default)(0),
    (0, decorators_1.Validate)(yup.number()),
    tslib_1.__metadata("design:type", Number)
], VotosListas.prototype, "aceptaAuditoria", void 0);
VotosListas = tslib_1.__decorate([
    (0, decorators_1.Id)("idVoto")
], VotosListas);
exports.VotosListas = VotosListas;
//# sourceMappingURL=data_synchronization_votos_v8.model.js.map