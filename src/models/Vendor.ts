import {
    Table,
    Column,
    Default,
    Model,
    PrimaryKey,
    ForeignKey,
    HasMany,
    BelongsTo,
    DataType,
    Unique,


} from 'sequelize-typescript'

@Table({
    tableName: 'vendor'
})
class Vendor extends Model{
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id?: string

    @Unique
    @Column(DataType.STRING)
    name?: string

    @Column(DataType.STRING)
    description?: string

    @Column(DataType.STRING)
    contactEmail?: string

    @Column(DataType.STRING)
    phone?: String

    @Column(DataType.STRING)
    website?: string
}

export default Vendor