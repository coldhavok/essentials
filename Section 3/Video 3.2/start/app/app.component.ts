declare var componentHandler;

import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

import { CORE_DIRECTIVES }  from '@angular/common';

@Component({
  selector: 'app',
  templateUrl: 'app/app.template.html',
  directives: [ CORE_DIRECTIVES ]
})
export class AppComponent {
    public options = {
        forValues: [
            'Click per object',
            'Views per object',
            'Objects selected',
            'Objects viewed'
        ],
        ifValue: true,
        switchValue: 'type3'
    };

    componentColor(){
        return { 'mdl-color--indigo-300': true }
    }

    ngAfterViewInit() {
        componentHandler.upgradeDom();
    }
}

bootstrap(AppComponent);
