import { Store } from '@ngrx/store';
import { Inject, Injectable } from '@angular/core';
import { Effect, createEffect, Actions, ofType } from '@ngrx/effects';
import { of, from, Subscription, EMPTY, forkJoin } from 'rxjs';
import { catchError , switchMap, map, mergeMap } from 'rxjs/operators';

import * as appActions from '../actions/app.actions';
import * as calendarActions from '../actions/calendar.actions';

import { AppState } from '../models';
import { ActivatedRoute, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { ExternalService } from '../shared/external.service';

const jwtDecode = require('jwt-decode');
const cloneDeep = require('lodash/cloneDeep');
const deepMerge = require('lodash/merge');


@Injectable()
export class GeneralEffects {

    private queryParams: any;
    private queryParamsSubscription: Subscription;

    constructor(private store: Store<AppState>,
                private activatedRoute: ActivatedRoute,
                private externalService: ExternalService,
                private window: Window,
                @Inject(DOCUMENT) private document: any,
                private actions$: Actions,
                private router: Router) {
        this.queryParamsSubscription = this.activatedRoute.queryParams.subscribe(value => {
            this.queryParams = value;
        });
    }

    fetchExternalInfo$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(calendarActions.FETCH_EXTERNAL_INFO),
            switchMap((action: calendarActions.FetchExternalInfoAction) => {
                this.store.dispatch(new appActions.CalendarLoadingAction());
                return this.externalService.getAddInfo(action.payload).pipe(
                    map(response => {
                        this.store.dispatch(new calendarActions.FetchExternalInfoSuccessAction(response));
                        const calendarLoadingFinishAction = new appActions.CalendarLoadingFinishAction();
                        return calendarLoadingFinishAction;
                    }),
                    catchError( error => {
                        console.log('FetchExternalInfoAction error', error);
                        this.store.dispatch(new calendarActions.FetchExternalInfoFailAction());
                        const appLoadingErrorAction = new appActions.AppLoadingErrorAction(error?.error || error);
                        return of(appLoadingErrorAction);
                    })
                );
            })
        );
    });
}