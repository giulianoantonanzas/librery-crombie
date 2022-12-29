import {
  AllowNull,
  BelongsTo,
  Column,
  DataType,
  DeletedAt,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { Optional, UUIDV4 } from "sequelize";
import Author, { AuthorCreationAttributes } from "./author";
import Rental from "./rental";

export interface BookAttributes {
  id: string;
  name: string;
  price: number;
  imageName?: string;
  authorId?: string;
  author?: AuthorCreationAttributes;
}

export interface BookCreationAttributes
  extends Optional<BookAttributes, "id"> {}

@Table
class Book
  extends Model<BookAttributes, BookCreationAttributes>
  implements BookAttributes
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
  name: string;

  @AllowNull(false)
  @Column
  price: number;

  @AllowNull(true)
  @Column
  imageName: string;

  @DeletedAt
  deletedAt?: Date;

  @ForeignKey(() => Author)
  @Column(DataType.UUID)
  authorId: string;

  @BelongsTo(() => Author)
  author: Author;

  @HasMany(() => Rental)
  rentals: Rental[];
}

export default Book;
