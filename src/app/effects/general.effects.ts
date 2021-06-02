import { Store } from '@ngrx/store';
import { Inject, Injectable } from '@angular/core';
import { Effect, createEffect, Actions, ofType } from '@ngrx/effects';
import { of, from, Subscription, EMPTY, forkJoin } from 'rxjs';
import { catchError , switchMap, map, mergeMap } from 'rxjs/operators';

import * as appActions from '../actions/app.actions';

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
}