import { Table, Model, PrimaryKey, Default, DataType, Column, ForeignKey, BelongsTo } from 'sequelize-typescript';
import Order from './Order';



@Table({
    tableName: 'transaction'
})

class Transaction extends Model{
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id?: string

    @ForeignKey(()=> Order)
    @Column(DataType.STRING)
    orderId?: string


    @BelongsTo(()=> Order)
    order?: Order

    @Column(DataType.DECIMAL(10,2))
    amount?: number


    @Column(DataType.DATE)
    transactionDate?: Date
}

export default Transaction