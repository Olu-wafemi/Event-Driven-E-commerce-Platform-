import User from './User';

import {
    Table,
    Model,
    Column,
    ForeignKey,
    BelongsTo,HasMany,
    Default,
    PrimaryKey,
    DataType,
} from 'sequelize-typescript'


@Table({
    tableName: 'address'
})
class Address extends Model{
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id?: string


    @ForeignKey(()=> User)
    @Column(DataType.STRING)
    userId?: string

    @BelongsTo(()=> User)
    user?: User;

    @Column(DataType.STRING)
    street?: string

    @Column(DataType.STRING)
    city?: string

    @Column(DataType.STRING)
    state?: string

    @Column(DataType.STRING)
    country?: string

    @Column(DataType.STRING)
    postalCode?: string

    @Column(DataType.BOOLEAN)
    isBillingAddress?: Boolean

    @Column(DataType.BOOLEAN)
    isShippingAddress?: boolean




}

export default Address;