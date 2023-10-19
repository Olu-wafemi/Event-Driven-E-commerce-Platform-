import {
    Table,
    Column,
    DataType,
    Model,
    Default,
    HasMany,
    BelongsTo,
    PrimaryKey,
    Unique,

} from 'sequelize-typescript'


@Table({
    tableName: 'shipping_method'

})
class ShippingMethod extends Model{
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id?: string


    @Unique
    @Column(DataType.STRING)
    name?: string

    @Column(DataType.DECIMAL(10,2))
    cost?: number


    @Column(DataType.STRING)
    description?: string

    @Column(DataType.INTEGER)
    estimatedDeliveryDays?: number
}

export default ShippingMethod