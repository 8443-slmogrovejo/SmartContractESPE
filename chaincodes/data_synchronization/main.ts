/**
 *
 * Copyright (c) 2023, Oracle and/or its affiliates. All rights reserved.
 *
 */
import ChaincodeSDK from './lib/chaincode';

import { Data_synchronizationController } from './src/controller/data_synchronization.controller';


ChaincodeSDK({
    chainCodeName: 'data_synchronization',
    chainCode: Data_synchronizationController,
});
