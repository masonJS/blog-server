import { ValueTransformer } from "typeorm";
import { DateTimeUtil } from "@app/entity/util/DateTimeUtil";
import { LocalDateTime } from "@js-joda/core";

export class LocalDateTimeTransformer implements ValueTransformer {
  from(databaseValue: Date): LocalDateTime | null {
    return DateTimeUtil.toLocalDateTime(databaseValue);
  }

  to(entityValue: LocalDateTime): Date | null {
    return DateTimeUtil.toDate(entityValue);
  }
}
