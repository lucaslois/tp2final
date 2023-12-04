import { DataTypes, Model } from "sequelize";

import { config } from "../config.js";
import connection from "../database/index.js";

class Vote extends Model {}

Vote.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    candidate: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { isIn: [config.candidates] },
    },
    zone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { isIn: [config.zones] },
    },
  },
  {
    sequelize: connection,
    modelName: "Vote",
  },
);

export default Vote;
