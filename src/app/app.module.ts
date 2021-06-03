import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MAT_RIPPLE_GLOBAL_OPTIONS } from '@angular/material/core';
import { environment } from 'src/environments/environment';
import { globalRippleConfig } from './shared/common-utilities';
import { appReducer } from './reducers/app.reducer';
import { GeneralEffects } from './effects/general.effects';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { infoReducer } from './reducers/info.reducer';
import { CalendarComponent } from './components/calendar.component';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { calendarReducer } from './reducers/calendar.reducer';




const imports: any[] = [
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({
        app: appReducer,
        info: infoReducer,
        calendar: calendarReducer,
    }),
    EffectsModule.forRoot([GeneralEffects]),
];

const devImports: any[] = [
    // NOTE: instrument must come *after* importing StoreModule
    StoreDevtoolsModule.instrument()
];

if (!environment.production) {
    imports.push(devImports);
}


@NgModule({
    declarations: [
        AppComponent,
        CalendarComponent
    ],
    imports: [
        imports
    ],
    providers: [
        { provide: Window, useValue: window },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
