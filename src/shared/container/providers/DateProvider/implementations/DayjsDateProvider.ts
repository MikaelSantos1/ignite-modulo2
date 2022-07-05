import dayjs from "dayjs";

import { IDateProvider } from "../IDateProvider";

class DayjsDateProvider implements IDateProvider {
    compareInHours(start_date: Date, end_date: Date): number {
        const end_date_utc = this.convertToUtc(end_date);
        const start_date_utc = this.convertToUtc(start_date);
        return dayjs(end_date_utc).diff(start_date_utc, "hours");
    }
    convertToUtc(date: Date): string {
        return dayjs(date).utc().local().format();
    }
    dateNow(): Date {
        return dayjs().toDate();
    }
}
export { DayjsDateProvider };
