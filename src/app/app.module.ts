import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import the GridModule for the Grid component
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { InfiniteScrollService, FreezeService } from '@syncfusion/ej2-angular-grids';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GridModule 
  ],
  providers: [InfiniteScrollService, FreezeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
