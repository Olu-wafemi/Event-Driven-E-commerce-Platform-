import User from './User';
//import { User } from './User';
import Order from './Order';


import {
    Table,
    Column,
    DataType,
    PrimaryKey,
    ForeignKey,
    HasMany,
    BelongsTo,
    Default,
    Model

} from 'sequelize-typescript'


@Table({
    tableName: 'payment'

})

class Payment extends Model{
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id?: string;

    @ForeignKey(()=> Order)
    @Column(DataType.UUID)
    orderId?:string

    @BelongsTo(()=> Order)
    user?: Order

    @Column(DataType.STRING)
    paymentMethod?: string

    @Column(DataType.DECIMAL(10,2))
    amounnt?: number;

    @Column(DataType.DATE)
    paymentDate?: Date


}

export default Payment