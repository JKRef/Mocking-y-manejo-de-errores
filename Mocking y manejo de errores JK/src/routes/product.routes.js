import { Router } from 'express';
import { isAdmin } from '../middleware/isAdmin.js';
import { passportCall } from '../utils.js';
import ProductController from '../controllers/products.controller.js';


const router = Router();

// get all products
router.get('/', ProductController.getAllProducts); 

// get a product by ID
router.get('/:id', ProductController.getProductByID);

// agrega nuevo producto
router.post('/', passportCall('current'), isAdmin, ProductController.addProduct);

// editar informacion de producto
router.put('/:id', passportCall('current'), isAdmin, ProductController.editProduct);

// borrar producto de la lista
router.delete('/:id', passportCall('current'), isAdmin, ProductController.deleteProduct);

export default router;