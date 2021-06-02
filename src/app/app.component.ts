import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { AppState } from './models';
import * as appActions from './actions/app.actions';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
    title = 'transport-nsw-assessment-calendar';
    appLoading = true;
    private subApp: Subscription;

    constructor(private store: Store<AppState>,
                private window: Window) { }

    ngOnInit() {
        this.store.dispatch(new appActions.AppLoadingAction());

        this.subApp = this.store.select(state => state.app).subscribe(app => {
            this.appLoading = !!app?.app_loading;
        });

        setTimeout(() => {
            this.store.dispatch(new appActions.AppLoadingFinishAction());
        }, 500);
    }
    ngOnDestroy() {
        !!this.subApp && this.subApp.unsubscribe();
    }
}
