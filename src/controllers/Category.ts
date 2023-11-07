import { Request, Response } from 'express';
import Category from '../models/Category';

import sequelize from '../../database/database'

//sequelize.addModels([Category])

export const CategoryController = {
    async createCategory(req: Request, res: Response){

        try{
            const {name, description} = req.body;

            const newCategory = await Category.create({
                name, description

            })

            res.status(201).json(newCategory)

        }
        catch(error){
            res.status(500).json({error: "error creating category"})
        }
    },

        async getCategories (req: Request, res: Response){
            try{
                const categories = await Category.findAll()
                res.json(categories)
            }
            catch(error){
                res.status(500).json({error: 'Error fecthing categories'})
            }
        },

        async updateCategory(req: Request, res: Response){
            try{
                const {categoryId} = req.params;
                const {name, description} = req.body

                const category = await Category.findByPk(categoryId)

                if(!category){
                    return res.status(404).json({error : 'Category not Found'})
                }

                category.name = name;
                category.description = description;

                await category.save();

                res.json(category);

            }
            catch(error){

                res.status(500).json({error: 'error updating category'})
            }
        },

        async deleteCategory(req: Request, res: Response){
            try{
                const {categoryId }= req.params;

                const deletedCategory = await Category.destroy({
                    where:{id: categoryId},
                })

                if(!deletedCategory){
                    return res.status(404).json({error: 'Category not found'})

                }

                res.json({message: 'Category deleted succesfully'})
            }
            catch(error){
                res.status (500).json({error: 'Error deleting category'})
            }
        }

        

    
}