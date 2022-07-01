import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//icons
import { ComponentsLibraryModule } from './modules/components-library/components-library.module';

//rotas
import { AppRoutingModule } from './app-routing.module';

//components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ResultsComponent } from './pages/results/results.component';
import { HistoryComponent } from './pages/history/history.component';

//pipes
import { ToLocaleString } from './shared/pipes/to-locale-string.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ResultsComponent,
    ToLocaleString,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsLibraryModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
