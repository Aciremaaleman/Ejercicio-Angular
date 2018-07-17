import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing.module';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule} from '@angular/material';
import { HttpModule } from '@angular/http';
import { NewServiceService } from './new-service.service';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './myNav/myNav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ListComponent } from './list/list.component';
import { TodoComponent } from './todo/todo.component';
import { BitcoinsComponent } from './bitcoins/bitcoins.component';


@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    ListComponent,
    TodoComponent,
    BitcoinsComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    MatButtonModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [appRoutingProviders, NewServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
