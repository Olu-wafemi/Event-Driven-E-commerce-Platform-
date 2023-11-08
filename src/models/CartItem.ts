import Product from './Product';
import { 
    Table,
    Column, 
    Default,
    HasMany,
    BelongsTo,
    Model,
    PrimaryKey,
    ForeignKey,
    DataType
} from 'sequelize-typescript'
import { Col } from 'sequelize/types/utils';
import Cart from './Cart';

@Table({
    tableName: 'cart_items',
})
class CartItem extends Model{
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id?: string

    @ForeignKey(()=> Product)
    @Column(DataType.UUID)
    productId?: string

    @BelongsTo(()=> Product)
    product?: Product
  
    @ForeignKey(()=> Cart)
    @Column(DataType.UUID)
    cartId?: Cart

    @BelongsTo(()=> Cart)
    cart?: Cart
    

    @Column(DataType.INTEGER)
    quantity?: number

    @Column(DataType.DECIMAL(10,2))
    price?:number

}

export default CartItem;