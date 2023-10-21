import User from './User';
//import { User } from './User';
import Order from './Order';
import Payment from './Payment';
import {

    Table,
    Column,
    Default,
    HasMany,
    BelongsTo,
    HasOne,
    PrimaryKey,
    ForeignKey,
    Model,
    DataType
    
} from 'sequelize-typescript'

@Table({
    tableName: 'invoice'
})
class Invoice extends Model{
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id?: string

    @ForeignKey(()=> Order)
    @Column(DataType.STRING)
    orderId?: string


    @BelongsTo(()=> Order)
    order?: Order


    @Column(DataType.DATE)
    invoiceDate?: Date

    @Column(DataType.DECIMAL(10,2))
    totalAmount?: number

    @Column(DataType.STRING)
    paymentStatus?: string

    
}

export default Invoice