"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Data_synchronization_votos_v8Controller = void 0;
const tslib_1 = require("tslib");
const yup = require("yup");
const decorators_1 = require("../../lib/decorators");
const ochain_controller_1 = require("../../lib/ochain-controller");
const data_synchronization_votos_v8_model_1 = require("../model/data_synchronization_votos_v8.model");
class Data_synchronization_votos_v8Controller extends ochain_controller_1.OchainController {
    constructor(ctx) {
        super(ctx.Stub);
        this.Ctx = ctx;
    }
    init() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return;
        });
    }
    createVotosListas(asset) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.Ctx.Model.save(asset);
        });
    }
    getVotosListasById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const asset = yield this.Ctx.Model.get(id, data_synchronization_votos_v8_model_1.VotosListas);
            return asset;
        });
    }
    updateVotosListas(asset) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.Ctx.Model.update(asset);
        });
    }
    deleteVotosListas(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = yield this.Ctx.Model.delete(id);
            return result;
        });
    }
    getVotosListasHistoryById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = yield this.Ctx.Model.history(id);
            return result;
        });
    }
    getVotosListasByRange(startId, endId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = yield this.Ctx.Model.getByRange(startId, endId, data_synchronization_votos_v8_model_1.VotosListas);
            return result;
        });
    }
    createVote(idVoto, idLista, periodoPostulacion, idUs, fechaVotacion, aceptaAuditoria) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
        });
    }
    getVoteById(idVoto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const vote = yield this.Ctx.Model.get(idVoto, data_synchronization_votos_v8_model_1.VotosListas);
            return vote;
        });
    }
    updateVote(idVoto, idLista, periodoPostulacion, idUs, fechaVotacion, aceptaAuditoria) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
        });
    }
    deleteVote(idVoto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
        });
    }
    getVoteHistory(idVoto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
        });
    }
    getVotesByRange(startIdLista, endIdLista) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const votes = yield this.Ctx.Model.getByRange(startIdLista, endIdLista, data_synchronization_votos_v8_model_1.VotosListas);
            return votes;
        });
    }
    getVotesByPeriod(periodoPostulacion) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
        });
    }
    executeQuery(query) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = yield this.Ctx.Stub.getQueryResult(query);
            return result;
        });
    }
}
tslib_1.__decorate([
    (0, decorators_1.Validator)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], Data_synchronization_votos_v8Controller.prototype, "init", null);
tslib_1.__decorate([
    (0, decorators_1.Validator)(data_synchronization_votos_v8_model_1.VotosListas),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [data_synchronization_votos_v8_model_1.VotosListas]),
    tslib_1.__metadata("design:returntype", Promise)
], Data_synchronization_votos_v8Controller.prototype, "createVotosListas", null);
tslib_1.__decorate([
    (0, decorators_1.GetMethod)(),
    (0, decorators_1.Validator)(yup.string()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], Data_synchronization_votos_v8Controller.prototype, "getVotosListasById", null);
tslib_1.__decorate([
    (0, decorators_1.Validator)(data_synchronization_votos_v8_model_1.VotosListas),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [data_synchronization_votos_v8_model_1.VotosListas]),
    tslib_1.__metadata("design:returntype", Promise)
], Data_synchronization_votos_v8Controller.prototype, "updateVotosListas", null);
tslib_1.__decorate([
    (0, decorators_1.Validator)(yup.string()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], Data_synchronization_votos_v8Controller.prototype, "deleteVotosListas", null);
tslib_1.__decorate([
    (0, decorators_1.GetMethod)(),
    (0, decorators_1.Validator)(yup.string()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], Data_synchronization_votos_v8Controller.prototype, "getVotosListasHistoryById", null);
tslib_1.__decorate([
    (0, decorators_1.GetMethod)(),
    (0, decorators_1.Validator)(yup.string(), yup.string()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String]),
    tslib_1.__metadata("design:returntype", Promise)
], Data_synchronization_votos_v8Controller.prototype, "getVotosListasByRange", null);
tslib_1.__decorate([
    (0, decorators_1.Validator)(yup.string(), yup.string(), yup.string(), yup.string(), yup.string(), yup.number()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String, String, String, String, Number]),
    tslib_1.__metadata("design:returntype", Promise)
], Data_synchronization_votos_v8Controller.prototype, "createVote", null);
tslib_1.__decorate([
    (0, decorators_1.Validator)(yup.string()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], Data_synchronization_votos_v8Controller.prototype, "getVoteById", null);
tslib_1.__decorate([
    (0, decorators_1.Validator)(yup.string(), yup.string(), yup.string(), yup.string(), yup.string(), yup.number()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String, String, String, String, Number]),
    tslib_1.__metadata("design:returntype", Promise)
], Data_synchronization_votos_v8Controller.prototype, "updateVote", null);
tslib_1.__decorate([
    (0, decorators_1.Validator)(yup.string()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], Data_synchronization_votos_v8Controller.prototype, "deleteVote", null);
tslib_1.__decorate([
    (0, decorators_1.Validator)(yup.string()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], Data_synchronization_votos_v8Controller.prototype, "getVoteHistory", null);
tslib_1.__decorate([
    (0, decorators_1.Validator)(yup.string(), yup.string()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String]),
    tslib_1.__metadata("design:returntype", Promise)
], Data_synchronization_votos_v8Controller.prototype, "getVotesByRange", null);
tslib_1.__decorate([
    (0, decorators_1.Validator)(yup.string()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], Data_synchronization_votos_v8Controller.prototype, "getVotesByPeriod", null);
tslib_1.__decorate([
    (0, decorators_1.Validator)(yup.string()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], Data_synchronization_votos_v8Controller.prototype, "executeQuery", null);
exports.Data_synchronization_votos_v8Controller = Data_synchronization_votos_v8Controller;
//# sourceMappingURL=data_synchronization_votos_v8.controller.js.map