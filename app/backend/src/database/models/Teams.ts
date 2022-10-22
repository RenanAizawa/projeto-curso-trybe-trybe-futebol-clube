import { INTEGER, Model, STRING } from 'sequelize';
import db from '.';

class Teams extends Model {
  id!: number;
  username!: string;
  role!: string;
  email!: string;
  password!: string;
}

Teams.init({
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  teamName: {
    type: STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  timestamps: false,
  underscored: true,
  tableName: 'teams',
});

export default Teams;
