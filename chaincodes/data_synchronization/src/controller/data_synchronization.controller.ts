/**
 *
 * Copyright (c) 2023, Oracle and/or its affiliates. All rights reserved.
 *
 */
import * as yup from "yup";
import { GetMethod, Validator } from "../../lib/decorators";
import { OchainController } from "../../lib/ochain-controller";
import { Address } from "../model/data_synchronization.model";
import { Employer } from "../model/data_synchronization.model";
import { Person } from "../model/data_synchronization.model";
import { Contract } from "../model/data_synchronization.model";
import { Context } from "../../lib/ochain-transaction-context";

export class Data_synchronizationController extends OchainController {
  private Ctx: Context;

  constructor(ctx: Context) {
    super(ctx.Stub);
    this.Ctx = ctx;
  }

    @Validator()
    public async init() {
        return;
    }

  //-----------------------------------------------------------------------------
  //Employer
  //-----------------------------------------------------------------------------
  @Validator(Employer)
  public async createEmployer(asset: Employer) {
      return await this.Ctx.Model.save(asset);
  }
    
  @GetMethod()
  @Validator(yup.string())
  public async getEmployerById(id: string) {
      const asset = await this.Ctx.Model.get(id, Employer);
      return asset;
  }
  
  @Validator(Employer)
  public async updateEmployer(asset: Employer) {
      return await this.Ctx.Model.update(asset);
  }
    
  @Validator(yup.string())
  public async deleteEmployer(id: string) {
      const result = await this.Ctx.Model.delete(id);
      return result;
  }
  
  @GetMethod()
  @Validator(yup.string())
  public async getEmployerHistoryById(id: string) {
      const result = await this.Ctx.Model.history(id);
      return result;
  }
  
  @GetMethod() 
  @Validator(yup.string(), yup.string())
  public async getEmployerByRange(startId: string, endId: string) {
      const result = await this.Ctx.Model.getByRange(startId, endId, Employer);
      return result;
  }


  //-----------------------------------------------------------------------------
  //Person
  //-----------------------------------------------------------------------------
  @Validator(Person)
  public async createPerson(asset: Person) {
      return await this.Ctx.Model.save(asset);
  }
    
  @GetMethod()
  @Validator(yup.string())
  public async getPersonById(id: string) {
      const asset = await this.Ctx.Model.get(id, Person);
      return asset;
  }
  
  @Validator(Person)
  public async updatePerson(asset: Person) {
      return await this.Ctx.Model.update(asset);
  }
    
  @Validator(yup.string())
  public async deletePerson(id: string) {
      const result = await this.Ctx.Model.delete(id);
      return result;
  }
  
  @GetMethod()
  @Validator(yup.string())
  public async getPersonHistoryById(id: string) {
      const result = await this.Ctx.Model.history(id);
      return result;
  }
  
  @GetMethod() 
  @Validator(yup.string(), yup.string())
  public async getPersonByRange(startId: string, endId: string) {
      const result = await this.Ctx.Model.getByRange(startId, endId, Person);
      return result;
  }


  //-----------------------------------------------------------------------------
  //Contract
  //-----------------------------------------------------------------------------
  @Validator(Contract)
  public async createContract(asset: Contract) {
      return await this.Ctx.Model.save(asset);
  }
    
  @GetMethod()
  @Validator(yup.string())
  public async getContractById(id: string) {
      const asset = await this.Ctx.Model.get(id, Contract);
      return asset;
  }
  
  @Validator(Contract)
  public async updateContract(asset: Contract) {
      return await this.Ctx.Model.update(asset);
  }
    
  @Validator(yup.string())
  public async deleteContract(id: string) {
      const result = await this.Ctx.Model.delete(id);
      return result;
  }
  
  @GetMethod()
  @Validator(yup.string())
  public async getContractHistoryById(id: string) {
      const result = await this.Ctx.Model.history(id);
      return result;
  }
  
  @GetMethod() 
  @Validator(yup.string(), yup.string())
  public async getContractByRange(startId: string, endId: string) {
      const result = await this.Ctx.Model.getByRange(startId, endId, Contract);
      return result;
  }

  //-----------------------------------------------------------------------------
    
  @Validator(yup.string(), yup.string(), yup.number(), yup.date(), yup.date(), yup.string())
  public async createRelationship(employeeId: string, employerId: string, workingHours: number, effectiveDate: Date, contractDate: Date, contractId: string) {
  }
  @Validator(yup.string(), yup.number(), yup.date())
  public async updateRelationship(contractId: string, workingHours: number, effectiveDate: Date) {
  }
  @Validator(yup.string(), yup.date())
  public async terminateRelationship(contractId: string, effectiveDate: Date) {
  }
  @Validator(yup.string(), yup.date())
  public async suspendRelationshipStart(contractId: string, suspensionStartDate: Date) {
  }
  @Validator(yup.string(), yup.date())
  public async suspendRelationshipEnd(contractId: string, suspensionEndDate: Date) {
  }
  @Validator(yup.string(), yup.number())
  public async suspendAllRelationshipStart(employeeId: string, suspensionStartDate: number) {
  }
  @Validator(yup.string(), yup.number())
  public async suspendAllRelationshipEnd(employeeId: string, suspensionEndDate: number) {
  }
  /**
   *
   * BDB sql rich queries can be executed in OBP CS/EE.
   * This method can be invoked only when connected to remote OBP CS/EE network.
   *
   */
  @GetMethod()
  @Validator(yup.string())
  public async executeQuery(query: string) {
    const result = await this.query(query);
    return result;
  }
}

