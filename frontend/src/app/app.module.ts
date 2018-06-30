import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StageComponent } from './stage/stage.component';
import { HeaderComponent } from './header/header.component';
import { StartComponent } from './start/start.component';
import { LobbyComponent } from './lobby/lobby.component';

@NgModule({
  declarations: [
    AppComponent,
    StageComponent,
    HeaderComponent,
    StartComponent,
    LobbyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
