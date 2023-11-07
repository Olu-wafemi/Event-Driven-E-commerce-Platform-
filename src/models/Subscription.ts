import { BelongsTo, Column, DataType, Default, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
//import { User } from './User';

import User from './User';
@Table({
    tableName: 'subscriptions'
})

class Subscription extends Model{
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id?: string

    @ForeignKey(()=> User)
    @Column(DataType.UUID)
    userId?: string

    @BelongsTo(()=> User)
    user?: User

    @Column(DataType.STRING)
    planName?: string

    @Column(DataType.DECIMAL(10,2))
    price?: number

    @Column(DataType.DATE)
    startDate?: Date

    @Column(DataType.DATE)
    endDate?: Date
}
export default Subscription