import { IApp } from '.';
import { ICalendar } from './calendar';

export interface AppState {
    app: IApp;
    calendar: ICalendar;
}
