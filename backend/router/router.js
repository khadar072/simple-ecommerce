import express from 'express';
import { addProduct, deleteSingleProduct, getProduct, getSingleProduct, updateSingleProduct } from '../controller/product.controller.js';
import upload from '../config/multer.js';

const router = express.Router();

router.post('/add-product',upload.single("image"), addProduct);
router.get('/get-product',getProduct);
router.get('/get-single-product/:id',getSingleProduct);
router.put('/update-single-product/:id',upload.single("image"),updateSingleProduct);
router.delete('/delete-single-product/:id',deleteSingleProduct);

export default router;
