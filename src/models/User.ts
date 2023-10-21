import { Table, Column, Model, DataType,
    PrimaryKey,
    Default,
    Unique


} from 'sequelize-typescript';
import { Col } from 'sequelize/types/utils';

@Table({
    tableName: 'user'
})
class User extends Model {
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id!: string;


   @Unique
   @Column(DataType.STRING)
   username!: string;


    @Unique
    @Column(DataType.STRING)
    email!: string;

    @Column(DataType.STRING)
    password!: string;


    @Column(DataType.STRING)
    role!: string
}
export default User;
