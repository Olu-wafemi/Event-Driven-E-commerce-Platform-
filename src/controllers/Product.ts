import { Request, Response } from 'express';
import Product from '../models/Product';

import sequelize from '../../database/database'

//sequelize.addModels([Product])

export const ProductController = {
  async createProduct(req:Request, res: Response){
    try{
      const {name, description, price, stock, categoryId } = req.body

      await Product.create({
        name, price,description,stock, categoryId
      })

      return res.status(201).json({status: true, message: "product created"})

    }catch(error){
      console.log(error)
      return res.status(500).json({status:false, message: "true"})

    }

  },
 
  async getProducts(req: Request, res: Response) {
    try {
      const products = await Product.findAll();
      res.json(products);
    } catch (error) {
      console.error('Error fetching products:', error);
      res.status(500).json({ error: 'Error fetching products' });
    }
  },

  
  async getProductById(req: Request, res: Response) {
    try {
      const { productId } = req.params;
      const product = await Product.findByPk(productId);

      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }

      res.json(product);
    } catch (error) {
      console.error('Error fetching product by ID:', error);
      res.status(500).json({ error: 'Error fetching product' });
    }
  },

  
};
