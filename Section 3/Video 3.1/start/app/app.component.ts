declare var componentHandler;

import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

@Component({
    selector: 'app',
    templateUrl: 'app/app.template.html',
    styleUrls: ['styles.css']
})

export class AppComponent {
    ngAfterViewInit(){
        componentHandler.upgradeDom();
    }
}

bootstrap(AppComponent);