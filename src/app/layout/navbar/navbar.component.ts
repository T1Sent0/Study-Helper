import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'sh-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

    public menuList: Array<string>;

    public constructor() {
        this.menuList = [];
    }

    public ngOnInit(): void {
        this.menuList.push('Новости', 'Почитать', 'Посмотреть', 'О проекте');    
    }
}