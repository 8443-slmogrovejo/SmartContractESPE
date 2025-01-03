/**
 *
 * Copyright (c) 2023, Oracle and/or its affiliates. All rights reserved.
 *
 */
import * as yup from "yup";
import { GetMethod, Validator } from "../../lib/decorators";
import { OchainController } from "../../lib/ochain-controller";
import { VotosListas } from "../model/data_synchronization_votos_v8.model";
import { Context } from "../../lib/ochain-transaction-context";

export class Data_synchronization_votos_v8Controller extends OchainController {
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
  //VotosListas
  //-----------------------------------------------------------------------------
  @Validator(VotosListas)
  public async createVotosListas(asset: VotosListas) {
      return await this.Ctx.Model.save(asset);
  }
    
  @GetMethod()
  @Validator(yup.string())
  public async getVotosListasById(id: string) {
      const asset = await this.Ctx.Model.get(id, VotosListas);
      return asset;
  }
  
  @Validator(VotosListas)
  public async updateVotosListas(asset: VotosListas) {
      return await this.Ctx.Model.update(asset);
  }
    
  @Validator(yup.string())
  public async deleteVotosListas(id: string) {
      const result = await this.Ctx.Model.delete(id);
      return result;
  }
  
  @GetMethod()
  @Validator(yup.string())
  public async getVotosListasHistoryById(id: string) {
      const result = await this.Ctx.Model.history(id);
      return result;
  }
  
  @GetMethod() 
  @Validator(yup.string(), yup.string())
  public async getVotosListasByRange(startId: string, endId: string) {
      const result = await this.Ctx.Model.getByRange(startId, endId, VotosListas);
      return result;
  }

  //-----------------------------------------------------------------------------
    
  @Validator(yup.string(), yup.string(), yup.string(), yup.string(), yup.string(), yup.number())
  public async createVote(idVoto: string, idLista: string, periodoPostulacion: string, idUs: string, fechaVotacion: string, aceptaAuditoria: number) {
  }
  @Validator(yup.string())
  public async getVoteById(idVoto: string) {
      const vote = await this.Ctx.Model.get(idVoto, VotosListas);
      return vote;
  }
  @Validator(yup.string(), yup.string(), yup.string(), yup.string(), yup.string(), yup.number())
  public async updateVote(idVoto: string, idLista?: string, periodoPostulacion?: string, idUs?: string, fechaVotacion?: string, aceptaAuditoria?: number) {
  }
  @Validator(yup.string())
  public async deleteVote(idVoto: string) {
  }
  @Validator(yup.string())
  public async getVoteHistory(idVoto: string) {
  }
  @Validator(yup.string(), yup.string())
  public async getVotesByRange(startIdLista: string, endIdLista: string) {
      const votes = await this.Ctx.Model.getByRange(startIdLista, endIdLista, VotosListas);
      return votes;
  }
  @Validator(yup.string())
  public async getVotesByPeriod(periodoPostulacion: string) {
  }
  @Validator(yup.string())
  public async executeQuery(query: string) {
      const result = await this.Ctx.Stub.getQueryResult(query);
      return result;
  }
}

