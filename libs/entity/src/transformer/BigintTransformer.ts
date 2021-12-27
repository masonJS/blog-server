import { ValueTransformer } from "typeorm";


/**
 * transformer: {
 *  from(value: DatabaseType): EntityType,
 *  to(value: EntityType): DatabaseType
 * }
 * */
export class BigintTransformer implements ValueTransformer {
  // bigint는 number type이 아닌 string type으로 매핑 된다.
  // https://typeorm.io/#/entities/column-types
  from(databaseValue: string): number | null {
    return parseInt(databaseValue, 10) || null;
  }

  to(entityValue: number): number {
    return entityValue
  }

}
