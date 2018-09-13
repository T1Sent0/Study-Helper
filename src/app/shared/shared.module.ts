import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../routing/app.routing';

import { LayoutComponent } from '../layout/layout.component';
import { AppComponent } from '../app.component';
import { LayoutModule } from '../layout/layout.module';


@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent
    ],
    imports: [ 
        AppRoutingModule,
        LayoutModule
    ],
    providers: [],
    bootstrap: [ LayoutComponent ]
})

export class SharedModule {}