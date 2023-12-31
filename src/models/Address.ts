import User from './User';
import sequelize from '../../database/database';

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
    @Column(DataType.UUID)
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

const AddressModel = Address

//sequelize.models.push(AddressModel)

export default Address;