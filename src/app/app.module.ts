import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { MainComponent } from './main/main.component';
import { ThematicComponent } from './thematic/thematic.component';
import { ExperienceComponent } from './experience/experience.component';
import { HobbyComponent } from './hobby/hobby.component';
import { SkillComponent } from './skill/skill.component';
import { FormationComponent } from './formation/formation.component';
import { FormationsComponent } from './formations/formations.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MainComponent,
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
export class AppModule {}
