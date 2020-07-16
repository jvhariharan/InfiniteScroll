import { Component, OnInit } from '@angular/core';
import { getData } from './datasource';

@Component({
  selector: 'app-root',
  template: `<ejs-grid [dataSource]='data' height=300 [enableInfiniteScrolling]='true' [frozenColumns]='2'>
                <e-columns>
                    <e-column field='TaskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                    <e-column field='Engineer' headerText='Engineer' width=120></e-column>
                    <e-column field='Designation' headerText='Designation'width=120></e-column>
                    <e-column field='Estimation' headerText='Estimation' textAlign='Right' width=120></e-column>
                    <e-column field='Status' headerText='Status'width=120></e-column>
                </e-columns>
                </ejs-grid>`
})

export class AppComponent implements OnInit {

  public data: object[];

  ngOnInit(): void {
    this.data = getData(10000);
  }
}