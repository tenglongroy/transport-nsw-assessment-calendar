import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDatepicker, MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Store } from '@ngrx/store';
import * as moment from 'moment';
import { Moment } from 'moment';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/models';
import { StaticMethodService } from '../shared/common-utilities';
import * as calendarActions from '../actions/calendar.actions';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit, OnDestroy {

    selectedDate = new FormControl(moment());
    dateArray: (string | number)[];
    /* selectedDate = new FormControl(new Date()); */

    constructor(private store: Store<AppState>,
                private staticMethod: StaticMethodService) { }

    ngOnInit(): void {
        this.selectedDate.valueChanges.subscribe(momentValue => {
            this.dateArray = this.staticMethod.generateMonthDayArray(momentValue.year(), momentValue.month());
        });
        this.dateArray = this.staticMethod.generateMonthDayArray(this.selectedDate.value.year(), this.selectedDate.value.month());
    }
    ngOnDestroy(): void {
    }

    // TODO -> modify datepicker header to hide month view
    // https://material.angular.io/components/datepicker/overview#datepicker-custom-header
    chosenYearHandler(event) {
        /* console.log(event); */
    }
    chosenMonthHandler(normalizedMonth, datepicker: MatDatepicker<Moment>) {
        const ctrlValue = this.selectedDate.value;
        ctrlValue.month(normalizedMonth.month());
        this.selectedDate.setValue(ctrlValue);
        datepicker.close();
    }

    getSelectedMonth(): string {
        const month = this.selectedDate.value.month();
        return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][month]?.toUpperCase();
    }

    dateClick(event, date): void {
        const chosenDate = date + '-' + (this.selectedDate.value.month() + 1) + '-' + this.selectedDate.value.year();
        this.store.dispatch(new calendarActions.FetchExternalInfoAction({filterDateValid: chosenDate}));
    }
}
