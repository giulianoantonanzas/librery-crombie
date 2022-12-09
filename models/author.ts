import {
  HasMany,
  Model,
  Column,
  Table,
  AllowNull,
  DeletedAt,
  DataType,
} from "sequelize-typescript";
import { Optional, UUIDV4 } from "sequelize";
import Book from "./book";

interface AuthorAttributes {
  id: string;
  name: string;
  age: number;
  books?: Book[];
}

export interface AuthorCreationAttributes
  extends Optional<AuthorAttributes, "id"> {}

@Table
class Author
  extends Model<AuthorAttributes, AuthorCreationAttributes>
  implements AuthorAttributes
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

  @Column
  age: number;

  @DeletedAt
  deletedAt?: Date;

  @HasMany(() => Book)
  books: Book[];
}

export default Author;
