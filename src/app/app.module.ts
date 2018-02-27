// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// Components
import { AppComponent } from './app.component';

// Routing
import { AppRoutingModule, routedComponents } from './app-routing.module';

// Services
import { InfoService } from './services/info.service';

@NgModule({
  declarations: [
    AppComponent,
    routedComponents
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ InfoService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
