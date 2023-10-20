import { Table, Model, PrimaryKey, Default, DataType, Column, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from './User';

@Table({
    tableName: 'notification'
})

class Notification extends Model {
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id?: string


    @ForeignKey(()=> User)
    @Column(DataType.STRING)
    userId?: string

    @BelongsTo(()=> User)
    user?: User

    @Column(DataType.STRING)
    type?: string

    @Column(DataType.TEXT)
    message?: string

    @Column(DataType.BOOLEAN)
    isRead?: boolean;


}

export default Notification