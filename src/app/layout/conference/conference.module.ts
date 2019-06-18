import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ConferenceRoutingModule } from './conference-routing.module';
import { OrganizersComponent } from './organizers/organizers.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { AwardsComponent } from './awards/awards.component';
import { EposterComponent } from './eposter/eposter.component';
import { SummaryComponent } from './summary/summary.component';
import { ConferencetopicsComponent } from './conferencetopics/conferencetopics.component';
import { VenueComponent } from './venue/venue.component';
import { ConfcontactComponent } from './confcontact/confcontact.component';
import { SponsersComponent } from './sponsers/sponsers.component';
import { ConferenceComponent } from './conference.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    OrganizersComponent,
    ScheduleComponent,
    AwardsComponent,
    EposterComponent,
    SummaryComponent,
    ConferencetopicsComponent,
    VenueComponent,
    ConfcontactComponent,
    SponsersComponent,
    ConferenceComponent
  ],
  imports: [CommonModule, FormsModule, ConferenceRoutingModule, NgbModule],
})
export class ConferenceModule {}
