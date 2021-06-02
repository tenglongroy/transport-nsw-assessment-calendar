import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './material.module';
import { CustomFontAwesomeModule } from './custom-font-awesome.module';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        MaterialModule,
        CustomFontAwesomeModule,
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        MaterialModule,
        CustomFontAwesomeModule,
    ],
    declarations: [
    ],
    entryComponents: [],
    providers: [

    ]
})
export class SharedModule { }
