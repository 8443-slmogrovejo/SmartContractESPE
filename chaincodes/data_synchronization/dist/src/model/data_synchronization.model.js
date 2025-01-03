"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contract = exports.Person = exports.Employer = exports.Address = void 0;
const tslib_1 = require("tslib");
const yup = require("yup");
const decorators_1 = require("../../lib/decorators");
const ochain_model_1 = require("../../lib/ochain-model");
const ochain_embedded_model_1 = require("../../lib/ochain-embedded-model");
class Address extends ochain_embedded_model_1.EmbeddedModel {
}
tslib_1.__decorate([
    (0, decorators_1.Mandatory)(),
    (0, decorators_1.Validate)(yup.string()),
    tslib_1.__metadata("design:type", String)
], Address.prototype, "city", void 0);
tslib_1.__decorate([
    (0, decorators_1.Mandatory)(),
    (0, decorators_1.Validate)(yup.string()),
    tslib_1.__metadata("design:type", String)
], Address.prototype, "postalCode", void 0);
tslib_1.__decorate([
    (0, decorators_1.Mandatory)(),
    (0, decorators_1.Validate)(yup.string()),
    tslib_1.__metadata("design:type", String)
], Address.prototype, "streetName", void 0);
tslib_1.__decorate([
    (0, decorators_1.Mandatory)(),
    (0, decorators_1.Validate)(yup.string()),
    tslib_1.__metadata("design:type", String)
], Address.prototype, "houseNumber", void 0);
tslib_1.__decorate([
    (0, decorators_1.Validate)(yup.string()),
    tslib_1.__metadata("design:type", String)
], Address.prototype, "building", void 0);
tslib_1.__decorate([
    (0, decorators_1.Validate)(yup.string()),
    tslib_1.__metadata("design:type", String)
], Address.prototype, "entrace", void 0);
tslib_1.__decorate([
    (0, decorators_1.Validate)(yup.string()),
    tslib_1.__metadata("design:type", String)
], Address.prototype, "floor", void 0);
tslib_1.__decorate([
    (0, decorators_1.Validate)(yup.string()),
    tslib_1.__metadata("design:type", String)
], Address.prototype, "door", void 0);
exports.Address = Address;
let Employer = class Employer extends ochain_model_1.OchainModel {
    constructor() {
        super(...arguments);
        this.assetType = "employer";
    }
};
tslib_1.__decorate([
    (0, decorators_1.Mandatory)(),
    (0, decorators_1.Validate)(yup.string().min(11).max(11)),
    tslib_1.__metadata("design:type", String)
], Employer.prototype, "taxNumber", void 0);
tslib_1.__decorate([
    (0, decorators_1.Mandatory)(),
    (0, decorators_1.Validate)(yup.string()),
    tslib_1.__metadata("design:type", String)
], Employer.prototype, "name", void 0);
tslib_1.__decorate([
    (0, decorators_1.Validate)(yup.string()),
    tslib_1.__metadata("design:type", String)
], Employer.prototype, "phone", void 0);
tslib_1.__decorate([
    (0, decorators_1.Validate)(yup.string().email()),
    tslib_1.__metadata("design:type", String)
], Employer.prototype, "email", void 0);
tslib_1.__decorate([
    (0, decorators_1.Embedded)(Address),
    tslib_1.__metadata("design:type", Address)
], Employer.prototype, "address", void 0);
tslib_1.__decorate([
    (0, decorators_1.Validate)(yup.array().of(yup.string())),
    tslib_1.__metadata("design:type", Array)
], Employer.prototype, "employees", void 0);
tslib_1.__decorate([
    (0, decorators_1.Validate)(yup.array().of(yup.string())),
    tslib_1.__metadata("design:type", Array)
], Employer.prototype, "contracts", void 0);
Employer = tslib_1.__decorate([
    (0, decorators_1.Id)("taxNumber")
], Employer);
exports.Employer = Employer;
let Person = class Person extends ochain_model_1.OchainModel {
    constructor() {
        super(...arguments);
        this.assetType = "person";
    }
};
tslib_1.__decorate([
    (0, decorators_1.Mandatory)(),
    (0, decorators_1.Validate)(yup.string()),
    tslib_1.__metadata("design:type", String)
], Person.prototype, "taxIdentificationNumber", void 0);
tslib_1.__decorate([
    (0, decorators_1.Mandatory)(),
    (0, decorators_1.Validate)(yup.string()),
    tslib_1.__metadata("design:type", String)
], Person.prototype, "tajNumber", void 0);
tslib_1.__decorate([
    (0, decorators_1.Mandatory)(),
    (0, decorators_1.Validate)(yup.string()),
    tslib_1.__metadata("design:type", String)
], Person.prototype, "firstName", void 0);
tslib_1.__decorate([
    (0, decorators_1.Mandatory)(),
    (0, decorators_1.Validate)(yup.string()),
    tslib_1.__metadata("design:type", String)
], Person.prototype, "lastName", void 0);
tslib_1.__decorate([
    (0, decorators_1.Validate)(yup.date()),
    tslib_1.__metadata("design:type", Date)
], Person.prototype, "dateOfBirth", void 0);
tslib_1.__decorate([
    (0, decorators_1.Validate)(yup.string()),
    tslib_1.__metadata("design:type", String)
], Person.prototype, "citizenship", void 0);
tslib_1.__decorate([
    (0, decorators_1.Embedded)(Address),
    tslib_1.__metadata("design:type", Address)
], Person.prototype, "address", void 0);
tslib_1.__decorate([
    (0, decorators_1.Validate)(yup.array().of(yup.string())),
    tslib_1.__metadata("design:type", Array)
], Person.prototype, "employers", void 0);
tslib_1.__decorate([
    (0, decorators_1.Validate)(yup.array().of(yup.string())),
    tslib_1.__metadata("design:type", Array)
], Person.prototype, "contracts", void 0);
Person = tslib_1.__decorate([
    (0, decorators_1.Id)("taxIdentificationNumber")
], Person);
exports.Person = Person;
let Contract = class Contract extends ochain_model_1.OchainModel {
    constructor() {
        super(...arguments);
        this.assetType = "contract";
    }
};
tslib_1.__decorate([
    (0, decorators_1.Mandatory)(),
    (0, decorators_1.Validate)(yup.string()),
    tslib_1.__metadata("design:type", String)
], Contract.prototype, "contractId", void 0);
tslib_1.__decorate([
    (0, decorators_1.Mandatory)(),
    (0, decorators_1.Validate)(yup.date()),
    tslib_1.__metadata("design:type", Date)
], Contract.prototype, "contractDate", void 0);
tslib_1.__decorate([
    (0, decorators_1.Mandatory)(),
    (0, decorators_1.Validate)(yup.string()),
    tslib_1.__metadata("design:type", String)
], Contract.prototype, "personId", void 0);
tslib_1.__decorate([
    (0, decorators_1.Mandatory)(),
    (0, decorators_1.Validate)(yup.string()),
    tslib_1.__metadata("design:type", String)
], Contract.prototype, "employerId", void 0);
tslib_1.__decorate([
    (0, decorators_1.Validate)(yup.number()),
    tslib_1.__metadata("design:type", Number)
], Contract.prototype, "weekWorkingHours", void 0);
tslib_1.__decorate([
    (0, decorators_1.Validate)(yup.date()),
    tslib_1.__metadata("design:type", Date)
], Contract.prototype, "insuranceStart", void 0);
tslib_1.__decorate([
    (0, decorators_1.Validate)(yup.date()),
    tslib_1.__metadata("design:type", Date)
], Contract.prototype, "insuranceEnd", void 0);
tslib_1.__decorate([
    (0, decorators_1.Validate)(yup.date()),
    tslib_1.__metadata("design:type", Date)
], Contract.prototype, "suspensionStart", void 0);
tslib_1.__decorate([
    (0, decorators_1.Validate)(yup.date()),
    tslib_1.__metadata("design:type", Date)
], Contract.prototype, "suspensionEnd", void 0);
Contract = tslib_1.__decorate([
    (0, decorators_1.Id)("contractId")
], Contract);
exports.Contract = Contract;
//# sourceMappingURL=data_synchronization.model.js.map