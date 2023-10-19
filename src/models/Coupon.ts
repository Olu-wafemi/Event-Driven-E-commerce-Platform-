import {
    Table,
    Column,
    ForeignKey,
    PrimaryKey,
    Default,
    BelongsTo,
    HasMany,
    Unique,
    Model,
    DeletedAt,
    DataType
} from 'sequelize-typescript'
import { Col } from 'sequelize/types/utils'

@Table({
    tableName: 'coupon'
})

class Coupon extends Model{
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id?: string


    @Unique
    @Column(DataType.STRING)
    code?: string

    @Column(DataType.DECIMAL(10,2))
    discountAmount?: number

    @Column(DataType.DATE)
    startDate?: Date

    @Column(DataType.DATE)
    endDate?: Date

    
}

export default Coupon