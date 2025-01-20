import { MigrationInterface, QueryRunner } from "typeorm";

export class FirstMigration1735398004697 implements MigrationInterface {
    name = 'FirstMigration1735398004697'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "country" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "picture" varchar NOT NULL, "code" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "player" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "firstname" varchar NOT NULL, "lastname" varchar NOT NULL, "shortname" varchar NOT NULL, "sex" varchar(1) NOT NULL, "picture" varchar NOT NULL, "rank" integer NOT NULL, "point" integer NOT NULL, "weight" integer NOT NULL, "height" integer NOT NULL, "age" integer NOT NULL, "last_match_scores" integer NOT NULL, "countryId" integer)`);
        await queryRunner.query(`CREATE TABLE "temporary_player" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "firstname" varchar NOT NULL, "lastname" varchar NOT NULL, "shortname" varchar NOT NULL, "sex" varchar(1) NOT NULL, "picture" varchar NOT NULL, "rank" integer NOT NULL, "point" integer NOT NULL, "weight" integer NOT NULL, "height" integer NOT NULL, "age" integer NOT NULL, "last_match_scores" integer NOT NULL, "countryId" integer, CONSTRAINT "FK_cdf78c461f48b3f642aaa370bc2" FOREIGN KEY ("countryId") REFERENCES "country" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_player"("id", "firstname", "lastname", "shortname", "sex", "picture", "rank", "point", "weight", "height", "age", "last_match_scores", "countryId") SELECT "id", "firstname", "lastname", "shortname", "sex", "picture", "rank", "point", "weight", "height", "age", "last_match_scores", "countryId" FROM "player"`);
        await queryRunner.query(`DROP TABLE "player"`);
        await queryRunner.query(`ALTER TABLE "temporary_player" RENAME TO "player"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "player" RENAME TO "temporary_player"`);
        await queryRunner.query(`CREATE TABLE "player" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "firstname" varchar NOT NULL, "lastname" varchar NOT NULL, "shortname" varchar NOT NULL, "sex" varchar(1) NOT NULL, "picture" varchar NOT NULL, "rank" integer NOT NULL, "point" integer NOT NULL, "weight" integer NOT NULL, "height" integer NOT NULL, "age" integer NOT NULL, "last_match_scores" integer NOT NULL, "countryId" integer)`);
        await queryRunner.query(`INSERT INTO "player"("id", "firstname", "lastname", "shortname", "sex", "picture", "rank", "point", "weight", "height", "age", "last_match_scores", "countryId") SELECT "id", "firstname", "lastname", "shortname", "sex", "picture", "rank", "point", "weight", "height", "age", "last_match_scores", "countryId" FROM "temporary_player"`);
        await queryRunner.query(`DROP TABLE "temporary_player"`);
        await queryRunner.query(`DROP TABLE "player"`);
        await queryRunner.query(`DROP TABLE "country"`);
    }

}
