import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    Default,
    Unique,
    HasMany
}
from 'sequelize-typescript'
import { Col } from 'sequelize/types/utils';
import Product from './Product';

@Table({
    tableName: 'categories',
})

class Category extends Model{
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id?: string;

    @Unique
    @Column(DataType.STRING)
    name!: string

    @Column(DataType.TEXT)
    description!: string


    @HasMany(()=> Product)
    products!: Product[]
}

export default Category;