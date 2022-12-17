import {
  AllowNull,
  Column,
  DataType,
  DeletedAt,
  HasMany,
  Model,
  Table,
  Unique,
  Validate,
} from "sequelize-typescript";
import { Optional, UUIDV4 } from "sequelize";
import Rental from "./rental";

interface UserAttributes {
  id: string;
  email: string;
  password: string;
}

export interface UserCreationAttributes
  extends Optional<UserAttributes, "id"> {}

@Table
class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
    allowNull: false,
  })
  id: string;

  @AllowNull(false)
  @Validate({ isEmail: true })
  @Unique(true)
  @Column
  email: string;

  @AllowNull(false)
  @Column
  password: string;

  @DeletedAt
  deletedAt?: Date;

  @HasMany(() => Rental)
  rentals: Rental[];
}

export default User;
