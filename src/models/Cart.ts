import { User } from './User';

import CartItem from './CartItem'
import {
    Table, Column,DataType,
    Model,
    HasMany,BelongsTo,
    PrimaryKey,
    Default,
    ForeignKey
} from 'sequelize-typescript'

@Table({
    tableName: 'carts'
})

class Cart extends Model{

    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id?: string;

    @ForeignKey(()=> User)
    @Column(DataType.UUID)
    userId?: string

    @BelongsTo(()=> User)
    user?: User;

    @HasMany(()=> CartItem)
    items?: CartItem[];

}

export default Cart