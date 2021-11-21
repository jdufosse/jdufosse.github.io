import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { IvyCarouselModule } from 'angular-responsive-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ThematicComponent } from './components/thematic/thematic.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { HobbyComponent } from './components/hobby/hobby.component';
import { SkillComponent } from './components/skill/skill.component';
import { FormationComponent } from './components/formation/formation.component';
import { FormationsComponent } from './components/formation/formations.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 32],
};

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LayoutComponent,
    ThematicComponent,
    ExperienceComponent,
    HobbyComponent,
    SkillComponent,
    FormationComponent,
    FormationsComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, routerOptions),
    AppRoutingModule,
    FontAwesomeModule,
    IvyCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
