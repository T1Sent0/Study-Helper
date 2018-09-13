import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    declarations: [
        NavbarComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        CommonModule 
    ]
    exports: [ 
        NavbarComponent,
        FooterComponent
    ]
})

export class LayoutModule {}