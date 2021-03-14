import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { EverithingModule } from './taskList/everithing.module';
import { FooterComponent } from './footer/footer.component';
import {homeworkReducer} from './taskList/homeworks.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment} from '../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import {appReducers} from './app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    EverithingModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
