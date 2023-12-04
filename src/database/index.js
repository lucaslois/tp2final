import { Sequelize } from "sequelize";
import mysql from "mysql2/promise";
import { config } from "../config.js";
import "dotenv/config";

const createDatabase = async () => {
  try {
    const connection = await mysql.createConnection({
      database: config.database.database,
      port: config.database.port,
      user: config.database.user,
      password: config.database.password,
    });
    await connection.query(
      `CREATE DATABASE IF NOT EXISTS ${config.database.database};`,
    );
    console.log(
      `> Database ${config.database.database} created or successfully checked`,
    );
    connection.end();
  } catch (error) {
    console.error("Error creating database:", error);
    throw error;
  }
};

await createDatabase();

const connection = new Sequelize(
  config.database.database,
  config.database.user,
  config.database.password,
  {
    host: config.database.host,
    dialect: "mysql",
    port: config.database.port,
  },
);

try {
  await connection.authenticate();
  console.log("> Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

export default connection;
