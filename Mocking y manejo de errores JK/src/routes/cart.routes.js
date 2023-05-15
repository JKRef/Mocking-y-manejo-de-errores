import { Router } from 'express';
import { isUser } from '../middleware/isUser.js';
import { passportCall } from '../utils.js';
import CartController from '../controllers/cart.controller.js';

const router = Router();

// crea carrito
router.post('/', CartController.createCart);

// va al carrito por id
router.get('/:id', CartController.getCartById);

// agregar producto al carrito
router.put('/:id', passportCall('current'), isUser, CartController.addProductToCart);

// agrgar cantidad de productos al carrito
router.put('/:id/product/:pid', CartController.addProductQuantityToCart);

// borrar producto del carrito
router.delete('/:id/product/:pid', CartController.deleteProductFromCart);

// borrar todos los productos del carrito
router.delete('/:id', CartController.deleteAllProductsFromCart);

router.get('/:id/purchase', passportCall('current'), CartController.completePurchase)

export default router;