import {Component, ViewChild} from '@angular/core';
import {MatAccordion} from '@angular/material';

/**
 * @title Basic expansion panel
 */
@Component({
  selector: 'expansion-overview-example',
  templateUrl: 'expansion-overview-example.html',
  styleUrls: ['expansion-overview-example.css'],
})
export class ExpansionOverviewExample {
   panelOpenState = false;

  @ViewChild('myaccordion') myPanels: MatAccordion;

  openAll(){
    this.panelOpenState=!this.panelOpenState;
    this.panelOpenState ? this.myPanels.openAll() : this.myPanels.closeAll();
  }
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */