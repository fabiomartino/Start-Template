// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

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
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ InfoService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
