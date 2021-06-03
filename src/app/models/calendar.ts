import { IMonthInfo } from ".";

export interface ICalendar{
    [key: number]: {
        [key: number]: IMonthInfo;
    }
    currentMonth: IMonthInfo;
}