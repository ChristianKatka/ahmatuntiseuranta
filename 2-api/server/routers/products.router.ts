import Router from 'koa-router';

import { createProduct } from '../controllers/products/create-product.controller';
import { deleteProduct } from '../controllers/products/delete-product.controller';
import { getAllProducts } from '../controllers/products/get-all-products.controller';
import { updateProduct } from '../controllers/products/update-product.controller';

const productsRouter = new Router({ prefix: '/products' });

productsRouter.get('/', getAllProducts);
productsRouter.post('/', createProduct);
productsRouter.delete('/:productId', deleteProduct);
productsRouter.put('/:productId', updateProduct);

export { productsRouter };
