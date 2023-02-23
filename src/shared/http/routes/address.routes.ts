import { Router } from 'express';

import { CreateAddressController } from '@modules/address/useCases/CreateAddressUseCase/CreateAddressController';

const addressRoutes = Router();

const createAddressController = new CreateAddressController();

addressRoutes.post('/', createAddressController.handle);

export { addressRoutes };
