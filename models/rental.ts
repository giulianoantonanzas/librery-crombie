import {
  AllowNull,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Optional, UUIDV4 } from "sequelize";
import Book from "./book";
import User from "./user";

interface RentalAttributes {
  id: string;
}

export interface RentalCreationAttributes
  extends Optional<RentalAttributes, "id"> {}

@Table
class Rental
  extends Model<RentalAttributes, RentalCreationAttributes>
  implements RentalAttributes
{
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
    allowNull: false,
  })
  id: string;

  @AllowNull(false)
  @Column
  endRentalTime: Date;

  @AllowNull(false)
  @ForeignKey(() => Book)
  @Column(DataType.UUID)
  bookId: string;

  @AllowNull(false)
  @ForeignKey(() => User)
  @Column(DataType.UUID)
  userId: string;

  @BelongsTo(() => Book)
  book: Book;

  @BelongsTo(() => User)
  user: User;
}

export default Rental;
