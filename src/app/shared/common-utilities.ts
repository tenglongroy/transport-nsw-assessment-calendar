import { Injectable } from "@angular/core";
import { RippleGlobalOptions } from "@angular/material/core";

export const globalRippleConfig: RippleGlobalOptions = {
    animation: {
        enterDuration: 300,
        exitDuration: 500
    },
    terminateOnPointerUp: false
};

@Injectable({
    providedIn: 'root'
})
export class StaticMethodService {
    constructor() {

    }

    generateMonthDayArray(year: number, month: number): any[] {
        /* const now = new Date();
        const day = now.getDate();
        const month = now.getMonth();
        const year = now.getFullYear(); */
        const days = this.getMonthDays(month + 1, year);
        const firstDay = new Date(year, month, 1);
        const startDay = firstDay.getDay();
        return this.setThePrintLoop(startDay, days)
    }
    getMonthDays(month, year): number {
        let days;
        if ([1, 3, 5, 7, 8, 10, 12].includes(month)){
            days = 31;
        }
        else if ([4, 6, 9, 11].includes(month)){
            days = 30;
        }
        else if (month === 2) {
            if (year % 4 === 0) {
                days = 29;
            }
            else {
                days = 28;
            }
        }
        return days;
    }
    setThePrintLoop(s, d): any[] {
        const DayArray = []
        for (let i = 0; i < 35; i++) {
            if (i >= (s) && (i - s) < 31) {
                DayArray.push(i - s + 1);
            }
            else {
                DayArray.push('');
            }
        }
        return DayArray;
    }
}