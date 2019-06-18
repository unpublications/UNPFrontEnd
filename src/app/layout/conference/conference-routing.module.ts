import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConferenceComponent } from './conference.component';
import { OrganizersComponent } from './organizers/organizers.component';
import { AwardsComponent } from './awards/awards.component';
import { ConfcontactComponent } from './confcontact/confcontact.component';
import { ConferencetopicsComponent } from './conferencetopics/conferencetopics.component';
import { EposterComponent } from './eposter/eposter.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SponsersComponent } from './sponsers/sponsers.component';
import { SummaryComponent } from './summary/summary.component';
import { VenueComponent } from './venue/venue.component';

const routes: Routes = [
  {path: '', component: ConferenceComponent},
  {path: 'organize', component: OrganizersComponent},
  {path: 'awards', component: AwardsComponent},
  {path: 'contact', component: ConfcontactComponent},
  {path: 'topics', component: ConferencetopicsComponent},
  {path: 'eposter', component: EposterComponent},
  {path: 'schedule', component: ScheduleComponent},
  {path: 'sponser', component: SponsersComponent},
  {path: 'summary', component: SummaryComponent},
  {path: 'venue', component: VenueComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConferenceRoutingModule { }
