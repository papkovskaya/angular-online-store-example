import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StateService } from "./services/state.service";



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HeroComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HeroComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  providers: [ StateService ]
})
export class CoreModule { }
