import { User } from './User';
import Product from './Product';
import {
    Model,
    DataType,
    PrimaryKey,
    ForeignKey,
    BelongsTo,
    Table,
    Column,
    Default
} from 'sequelize-typescript'


@Table({
    tableName: 'reviews',
})
class Review extends Model{
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id?: string;

    @ForeignKey(()=> User)
    @Column(DataType.UUID)
    userId?: string;

    @BelongsTo(()=> User)
    user?: User;

    @ForeignKey(()=> Product)
    @Column(DataType.UUID)
    productId?: string;

    @BelongsTo(()=> Product)
    product?: Product;

    @Column(DataType.STRING)
    title?: string;

    @Column(DataType.TEXT)
    content?: String;

    @Column(DataType.INTEGER)
    rating?: number;

    @Column(DataType.DATE)
    createdAt?: Date;








}


export default Review;