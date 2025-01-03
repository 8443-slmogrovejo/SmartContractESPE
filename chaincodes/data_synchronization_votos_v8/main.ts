/**
 *
 * Copyright (c) 2023, Oracle and/or its affiliates. All rights reserved.
 *
 */
import ChaincodeSDK from './lib/chaincode';

import { Data_synchronization_votos_v8Controller } from './src/controller/data_synchronization_votos_v8.controller';


ChaincodeSDK({
    chainCodeName: 'data_synchronization_votos_v8',
    chainCode: Data_synchronization_votos_v8Controller,
});
