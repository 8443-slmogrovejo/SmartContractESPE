"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Data_synchronizationController = void 0;
const tslib_1 = require("tslib");
const yup = require("yup");
const decorators_1 = require("../../lib/decorators");
const ochain_controller_1 = require("../../lib/ochain-controller");
const data_synchronization_model_1 = require("../model/data_synchronization.model");
const data_synchronization_model_2 = require("../model/data_synchronization.model");
const data_synchronization_model_3 = require("../model/data_synchronization.model");
class Data_synchronizationController extends ochain_controller_1.OchainController {
    constructor(ctx) {
        super(ctx.Stub);
        this.Ctx = ctx;
    }
    init() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return;
        });
    }
    createEmployer(asset) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.Ctx.Model.save(asset);
        });
    }
    getEmployerById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const asset = yield this.Ctx.Model.get(id, data_synchronization_model_1.Employer);
            return asset;
        });
    }
    updateEmployer(asset) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.Ctx.Model.update(asset);
        });
    }
    deleteEmployer(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = yield this.Ctx.Model.delete(id);
            return result;
        });
    }
    getEmployerHistoryById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = yield this.Ctx.Model.history(id);
            return result;
        });
    }
    getEmployerByRange(startId, endId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = yield this.Ctx.Model.getByRange(startId, endId, data_synchronization_model_1.Employer);
            return result;
        });
    }
    createPerson(asset) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.Ctx.Model.save(asset);
        });
    }
    getPersonById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const asset = yield this.Ctx.Model.get(id, data_synchronization_model_2.Person);
            return asset;
        });
    }
    updatePerson(asset) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.Ctx.Model.update(asset);
        });
    }
    deletePerson(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = yield this.Ctx.Model.delete(id);
            return result;
        });
    }
    getPersonHistoryById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = yield this.Ctx.Model.history(id);
            return result;
        });
    }
    getPersonByRange(startId, endId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = yield this.Ctx.Model.getByRange(startId, endId, data_synchronization_model_2.Person);
            return result;
        });
    }
    createContract(asset) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.Ctx.Model.save(asset);
        });
    }
    getContractById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const asset = yield this.Ctx.Model.get(id, data_synchronization_model_3.Contract);
            return asset;
        });
    }
    updateContract(asset) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.Ctx.Model.update(asset);
        });
    }
    deleteContract(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = yield this.Ctx.Model.delete(id);
            return result;
        });
    }
    getContractHistoryById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = yield this.Ctx.Model.history(id);
            return result;
        });
    }
    getContractByRange(startId, endId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = yield this.Ctx.Model.getByRange(startId, endId, data_synchronization_model_3.Contract);
            return result;
        });
    }
    createRelationship(employeeId, employerId, workingHours, effectiveDate, contractDate, contractId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
        });
    }
    updateRelationship(contractId, workingHours, effectiveDate) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
        });
    }
    terminateRelationship(contractId, effectiveDate) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
        });
    }
    suspendRelationshipStart(contractId, suspensionStartDate) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
        });
    }
    suspendRelationshipEnd(contractId, suspensionEndDate) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
        });
    }
    suspendAllRelationshipStart(employeeId, suspensionStartDate) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
        });
    }
    suspendAllRelationshipEnd(employeeId, suspensionEndDate) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
        });
    }
    executeQuery(query) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = yield this.query(query);
            return result;
        });
    }
}
tslib_1.__decorate([
    (0, decorators_1.Validator)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], Data_synchronizationController.prototype, "init", null);
tslib_1.__decorate([
    (0, decorators_1.Validator)(data_synchronization_model_1.Employer),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [data_synchronization_model_1.Employer]),
    tslib_1.__metadata("design:returntype", Promise)
], Data_synchronizationController.prototype, "createEmployer", null);
tslib_1.__decorate([
    (0, decorators_1.GetMethod)(),
    (0, decorators_1.Validator)(yup.string()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], Data_synchronizationController.prototype, "getEmployerById", null);
tslib_1.__decorate([
    (0, decorators_1.Validator)(data_synchronization_model_1.Employer),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [data_synchronization_model_1.Employer]),
    tslib_1.__metadata("design:returntype", Promise)
], Data_synchronizationController.prototype, "updateEmployer", null);
tslib_1.__decorate([
    (0, decorators_1.Validator)(yup.string()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], Data_synchronizationController.prototype, "deleteEmployer", null);
tslib_1.__decorate([
    (0, decorators_1.GetMethod)(),
    (0, decorators_1.Validator)(yup.string()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], Data_synchronizationController.prototype, "getEmployerHistoryById", null);
tslib_1.__decorate([
    (0, decorators_1.GetMethod)(),
    (0, decorators_1.Validator)(yup.string(), yup.string()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String]),
    tslib_1.__metadata("design:returntype", Promise)
], Data_synchronizationController.prototype, "getEmployerByRange", null);
tslib_1.__decorate([
    (0, decorators_1.Validator)(data_synchronization_model_2.Person),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [data_synchronization_model_2.Person]),
    tslib_1.__metadata("design:returntype", Promise)
], Data_synchronizationController.prototype, "createPerson", null);
tslib_1.__decorate([
    (0, decorators_1.GetMethod)(),
    (0, decorators_1.Validator)(yup.string()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], Data_synchronizationController.prototype, "getPersonById", null);
tslib_1.__decorate([
    (0, decorators_1.Validator)(data_synchronization_model_2.Person),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [data_synchronization_model_2.Person]),
    tslib_1.__metadata("design:returntype", Promise)
], Data_synchronizationController.prototype, "updatePerson", null);
tslib_1.__decorate([
    (0, decorators_1.Validator)(yup.string()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], Data_synchronizationController.prototype, "deletePerson", null);
tslib_1.__decorate([
    (0, decorators_1.GetMethod)(),
    (0, decorators_1.Validator)(yup.string()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], Data_synchronizationController.prototype, "getPersonHistoryById", null);
tslib_1.__decorate([
    (0, decorators_1.GetMethod)(),
    (0, decorators_1.Validator)(yup.string(), yup.string()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String]),
    tslib_1.__metadata("design:returntype", Promise)
], Data_synchronizationController.prototype, "getPersonByRange", null);
tslib_1.__decorate([
    (0, decorators_1.Validator)(data_synchronization_model_3.Contract),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [data_synchronization_model_3.Contract]),
    tslib_1.__metadata("design:returntype", Promise)
], Data_synchronizationController.prototype, "createContract", null);
tslib_1.__decorate([
    (0, decorators_1.GetMethod)(),
    (0, decorators_1.Validator)(yup.string()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], Data_synchronizationController.prototype, "getContractById", null);
tslib_1.__decorate([
    (0, decorators_1.Validator)(data_synchronization_model_3.Contract),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [data_synchronization_model_3.Contract]),
    tslib_1.__metadata("design:returntype", Promise)
], Data_synchronizationController.prototype, "updateContract", null);
tslib_1.__decorate([
    (0, decorators_1.Validator)(yup.string()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], Data_synchronizationController.prototype, "deleteContract", null);
tslib_1.__decorate([
    (0, decorators_1.GetMethod)(),
    (0, decorators_1.Validator)(yup.string()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], Data_synchronizationController.prototype, "getContractHistoryById", null);
tslib_1.__decorate([
    (0, decorators_1.GetMethod)(),
    (0, decorators_1.Validator)(yup.string(), yup.string()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String]),
    tslib_1.__metadata("design:returntype", Promise)
], Data_synchronizationController.prototype, "getContractByRange", null);
tslib_1.__decorate([
    (0, decorators_1.Validator)(yup.string(), yup.string(), yup.number(), yup.date(), yup.date(), yup.string()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String, Number, Date, Date, String]),
    tslib_1.__metadata("design:returntype", Promise)
], Data_synchronizationController.prototype, "createRelationship", null);
tslib_1.__decorate([
    (0, decorators_1.Validator)(yup.string(), yup.number(), yup.date()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Number, Date]),
    tslib_1.__metadata("design:returntype", Promise)
], Data_synchronizationController.prototype, "updateRelationship", null);
tslib_1.__decorate([
    (0, decorators_1.Validator)(yup.string(), yup.date()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Date]),
    tslib_1.__metadata("design:returntype", Promise)
], Data_synchronizationController.prototype, "terminateRelationship", null);
tslib_1.__decorate([
    (0, decorators_1.Validator)(yup.string(), yup.date()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Date]),
    tslib_1.__metadata("design:returntype", Promise)
], Data_synchronizationController.prototype, "suspendRelationshipStart", null);
tslib_1.__decorate([
    (0, decorators_1.Validator)(yup.string(), yup.date()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Date]),
    tslib_1.__metadata("design:returntype", Promise)
], Data_synchronizationController.prototype, "suspendRelationshipEnd", null);
tslib_1.__decorate([
    (0, decorators_1.Validator)(yup.string(), yup.number()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Number]),
    tslib_1.__metadata("design:returntype", Promise)
], Data_synchronizationController.prototype, "suspendAllRelationshipStart", null);
tslib_1.__decorate([
    (0, decorators_1.Validator)(yup.string(), yup.number()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Number]),
    tslib_1.__metadata("design:returntype", Promise)
], Data_synchronizationController.prototype, "suspendAllRelationshipEnd", null);
tslib_1.__decorate([
    (0, decorators_1.GetMethod)(),
    (0, decorators_1.Validator)(yup.string()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], Data_synchronizationController.prototype, "executeQuery", null);
exports.Data_synchronizationController = Data_synchronizationController;
//# sourceMappingURL=data_synchronization.controller.js.map