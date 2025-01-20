import { DataSource } from "typeorm";
import { Player } from "../entities/Player";
import { Country } from "../entities/Country";

export const dataSource = new DataSource({
  type: "sqlite",
  database: "./bdd/tenisu.sqlite",
  entities: [Player, Country],
  migrations: ["./bdd/migrations/*.ts"],
  migrationsTableName: "migrations",
  synchronize: false,
});