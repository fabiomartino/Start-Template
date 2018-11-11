// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';

// Routing
import { AppRoutingModule, routedComponents, layoutComponents } from './app-routing.module';

// Services
import { InfoService } from './services/info.service';

@NgModule({
  declarations: [
    AppComponent,
    routedComponents,
    layoutComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ InfoService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
