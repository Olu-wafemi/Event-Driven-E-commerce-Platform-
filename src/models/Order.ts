import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    Default,
    BelongsTo,
    ForeignKey,
  } from 'sequelize-typescript';
import { Col } from 'sequelize/types/utils';
 // import  from '../models/User'; // Adjust the import path based on your project's file structure
import Product from './Product';
import User from './User';

  // Define the Orders model using Sequelize decorators
  @Table({
    tableName: 'orders', // Specify the table name for the Orders model
  })
  class Order extends Model {
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id!: string; // Unique identifier for the order
  
    @ForeignKey(() => User)
    @Column(DataType.UUID)
    userId!: string; // Foreign key to link the order to a user

    
  
    @BelongsTo(() => User)
    user!: User; // Define a relationship with the User model
  
    @ForeignKey(() => Product)
    @Column(DataType.UUID)
    productId?: String

    @BelongsTo(() => Product)
    product?: Product

    @Column(DataType.STRING)
    quantity?: String

    @Column(DataType.DATE)
    orderDate!: Date; // Date and time when the order was placed
  
    @Column(DataType.DECIMAL(10, 2))
    totalAmount!: String  ; // Total amount of the order (with two decimal places)
  }
  
  export default Order; // Export the Orders model
  