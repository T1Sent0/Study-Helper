import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../routing/app.routing';

import { LayoutComponent } from '../layout/layout.component';
import { AppComponent } from '../app.component';
import { LayoutModule } from '../layout/layout.module';
import { NewsComponent } from '../pages/news/news.component';


@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent,
        NewsComponent
    ],
    imports: [ 
        AppRoutingModule,
        LayoutModule
    ],
    providers: [],
    bootstrap: [ LayoutComponent ]
})

export class SharedModule {}