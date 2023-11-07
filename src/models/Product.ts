import Category from './Category';
import { Table, Column, Model, DataType,
    PrimaryKey,
    Default,
    Unique,
    ForeignKey


} from 'sequelize-typescript';


@Table({
    tableName: 'products',
})
class Product extends  Model{

    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id?: String;


    @Column(DataType.STRING)
    name?: string;

    @ForeignKey(()=> Category)
    @Column(DataType.UUID)
    categoryId?: String

    @Column(DataType.TEXT)
    description?: string


    @Column(DataType.DECIMAL(10,2))
    price!: number;

    @Column(DataType.INTEGER)
    stock?: number;

    @Column(DataType.STRING)
    imageUrl?:string





}

export default Product;