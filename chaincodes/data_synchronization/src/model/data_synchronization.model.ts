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

export class Address extends EmbeddedModel<Address> {
  @Mandatory()
  @Validate(yup.string())
  public city: string;
  
  @Mandatory()
  @Validate(yup.string())
  public postalCode: string;
  
  @Mandatory()
  @Validate(yup.string())
  public streetName: string;
  
  @Mandatory()
  @Validate(yup.string())
  public houseNumber: string;
  
  @Validate(yup.string())
  public building: string;
  
  @Validate(yup.string())
  public entrace: string;
  
  @Validate(yup.string())
  public floor: string;
  
  @Validate(yup.string())
  public door: string;
  
}

@Id("taxNumber")
export class Employer extends OchainModel<Employer> {
    
  public readonly assetType = "employer";

  @Mandatory()
  @Validate(yup.string().min(11).max(11))
  public taxNumber: string;
  
  @Mandatory()
  @Validate(yup.string())
  public name: string;
  
  @Validate(yup.string())
  public phone: string;
  
  @Validate(yup.string().email())
  public email: string;
  
  @Embedded(Address)
  public address: Address;
  
  @Validate(yup.array().of(yup.string()))
  public employees: string[];
  
  @Validate(yup.array().of(yup.string()))
  public contracts: string[];
  
}

@Id("taxIdentificationNumber")
export class Person extends OchainModel<Person> {
    
  public readonly assetType = "person";

  @Mandatory()
  @Validate(yup.string())
  public taxIdentificationNumber: string;
  
  @Mandatory()
  @Validate(yup.string())
  public tajNumber: string;
  
  @Mandatory()
  @Validate(yup.string())
  public firstName: string;
  
  @Mandatory()
  @Validate(yup.string())
  public lastName: string;
  
  @Validate(yup.date())
  public dateOfBirth: Date;
  
  @Validate(yup.string())
  public citizenship: string;
  
  @Embedded(Address)
  public address: Address;
  
  @Validate(yup.array().of(yup.string()))
  public employers: string[];
  
  @Validate(yup.array().of(yup.string()))
  public contracts: string[];
  
}

@Id("contractId")
export class Contract extends OchainModel<Contract> {
    
  public readonly assetType = "contract";

  @Mandatory()
  @Validate(yup.string())
  public contractId: string;
  
  @Mandatory()
  @Validate(yup.date())
  public contractDate: Date;
  
  @Mandatory()
  @Validate(yup.string())
  public personId: string;
  
  @Mandatory()
  @Validate(yup.string())
  public employerId: string;
  
  @Validate(yup.number())
  public weekWorkingHours: number;
  
  @Validate(yup.date())
  public insuranceStart: Date;
  
  @Validate(yup.date())
  public insuranceEnd: Date;
  
  @Validate(yup.date())
  public suspensionStart: Date;
  
  @Validate(yup.date())
  public suspensionEnd: Date;
  
}

