import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { IvyCarouselModule } from 'angular-responsive-carousel';

// Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { JobComponent } from './pages/job/job.component';
import { FourOhFourComponent } from './pages/four-oh-four/four-oh-four.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ThematicComponent } from './components/thematic/thematic.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { MissionComponent } from './components/mission/mission.component';
import { HobbyComponent } from './components/hobby/hobby.component';
import { SkillComponent } from './components/skill/skill.component';
import { FormationComponent } from './components/formation/formation.component';
import { FormationsComponent } from './components/formation/formations.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

// Services
import { DataService } from './services/data.service';

const routes: Routes = [
  { path: 'fr', component: MainComponent },
  { path: 'en', component: MainComponent },
  { path: 'experience/:id', component: JobComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '', redirectTo: '/fr', pathMatch: 'full'  },
  { path: '**', redirectTo: 'not-found' },
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 32],
};

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    JobComponent,
    FourOhFourComponent,
    LayoutComponent,
    ThematicComponent,
    ExperienceComponent,
    HobbyComponent,
    SkillComponent,
    FormationComponent,
    FormationsComponent,
    FooterComponent,
    HeaderComponent,
    MissionComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, routerOptions),
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    IvyCarouselModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
