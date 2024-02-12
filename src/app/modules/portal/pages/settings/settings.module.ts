import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { TabNavigationComponent } from './components/tab-navigation/tab-navigation.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { ContentComponent } from './components/content/content.component';
import { ClinicDetailsComponent } from './components/content/components/clinic-details/clinic-details.component';

@NgModule({
  declarations: [SettingsComponent, TabNavigationComponent, ContentComponent, ClinicDetailsComponent],
  imports: [CommonModule, SettingsRoutingModule, MatTabsModule, MatListModule],
})
export class SettingsModule {}
