import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ThematicComponent } from './components/thematic/thematic.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { HobbyComponent } from './components/hobby/hobby.component';
import { SkillComponent } from './components/skill/skill.component';
import { FormationComponent } from './components/formation/formation.component';
import { FormationsComponent } from './components/formation/formations.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CarouselComponent,
    LayoutComponent,
    ThematicComponent,
    ExperienceComponent,
    HobbyComponent,
    SkillComponent,
    FormationComponent,
    FormationsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
