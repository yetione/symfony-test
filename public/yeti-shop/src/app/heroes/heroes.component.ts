import {Component, OnInit} from '@angular/core';
import {Hero} from "./classes/hero";


@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
    hero: Hero = new Hero(1, 'Windranger');

    protected heroes : Hero[];

    constructor() {

    }

    ngOnInit() {
    }

}
