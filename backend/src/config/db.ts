import { DataSource } from "typeorm";
import { Player } from "../entities/Player";

export const dataSource = new DataSource({
  type: "sqlite",
  database: "./bdd/tenisu.sqlite",
  entities: [Player],
  synchronize: true,
});