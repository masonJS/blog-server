import { convert, LocalDate, LocalDateTime, nativeJs } from "@js-joda/core";

export class DateTimeUtil {
  static toDate(localDate: LocalDate | LocalDateTime): Date | null {
    if(!localDate) {
      return null;
    }
    return convert(localDate).toDate();
  }

  static toLocalDateTime(date: Date): LocalDateTime | null {
    if(!date) {
      return null;
    }
    return LocalDateTime.from(nativeJs(date))
  }
}
