import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/models';
import { StaticMethodService } from '../shared/common-utilities';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html'
})
export class CalendarComponent implements OnInit, OnDestroy {

    constructor(private store: Store<AppState>,
                private staticMethod: StaticMethodService) { }

    ngOnInit(): void {
    }
    ngOnDestroy(): void {
    }
}
