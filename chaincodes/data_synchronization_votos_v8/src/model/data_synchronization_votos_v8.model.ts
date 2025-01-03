/**
 *
 * Copyright (c) 2023, Oracle and/or its affiliates. All rights reserved.
 *
 */

import * as yup from "yup";
import { Id, Mandatory, Validate, Default, Embedded, Derived, ReadOnly } from "../../lib/decorators";
import { OchainModel } from "../../lib/ochain-model";
import { STRATEGY } from "../../lib/utils";
import { EmbeddedModel } from "../../lib/ochain-embedded-model";

@Id("idVoto")
export class VotosListas extends OchainModel<VotosListas> {
    
  public readonly assetType = "votosListas";

  @Mandatory()
  @Validate(yup.string().min(1).max(40))
  public idVoto: string;
  
  @Mandatory()
  @Validate(yup.string().min(1).max(10))
  public idLista: string;
  
  @Mandatory()
  @Validate(yup.string().min(1).max(10))
  public periodoPostulacion: string;
  
  @Mandatory()
  @Validate(yup.string().min(1).max(10))
  public idUs: string;
  
  @Mandatory()
  @Validate(yup.string())
  public fechaVotacion: string;
  
  @Default(0)
  @Validate(yup.number())
  public aceptaAuditoria: number;
  
}

