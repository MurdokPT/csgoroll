import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridOfBoxesComponent } from './components/grid-of-boxes/grid-of-boxes.component';
import { ViewBoxComponent } from './components/view-box/view-box.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material..module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginStatusComponent } from './components/login-status/login-status.component';
import { GraphQLModule } from './graphql.module';
import { LoginService } from './core/login.service';
import { HeaderComponent } from './components/header/header.component';
import { CurrencyPipe } from '@angular/common';
import { GridService } from './core/grid.service';
import { BoxComponent } from './components/box/box.component';

@NgModule({
  declarations: [
    AppComponent,
    GridOfBoxesComponent,
    ViewBoxComponent,
    LoginStatusComponent,
    HeaderComponent,
    BoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GraphQLModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    MaterialModule,
  ],
  providers: [
    LoginService,
    GridService,
    CurrencyPipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}