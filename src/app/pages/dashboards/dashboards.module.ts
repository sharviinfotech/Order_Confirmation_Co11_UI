import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';

import { DashboardsRoutingModule } from './dashboards-routing.module';

// Standalone components (import them directly)
import { OperatorDashboardComponent } from './operatordashboard/operatordashboard.component';
import { MachineMonitoringComponent } from './machinemonitoring/machinemonitoring.component';
import { RawmaterialmanagementComponent } from './inventory/rawmaterialmanagement/rawmaterialmanagement.component';
import { QualitycontrolComponent } from './qualitycontrol/qualitycontrol.component';
import { PreventivemaintenancemanagementComponent } from './preventivemaintenancemanagement/preventivemaintenancemanagement.component';
import { UserManagementComponent } from './usermanagement/usermanagement.component';
import { ReportsandAnalyticsComponent } from './reportsandanalytics/reportsandanalytics.component';
import { SettingsandMasterdataComponent } from './settingsandmasterdata/settingsandmasterdata.component';
import { ProductionPlanningComponent } from './productionplanning/productionplanning.component';
import { ProductionmonitoringComponent } from './productionmonitoring/productionmonitoring.component';
import { ProductionIntegrationWithERPComponent } from './productionintegrationwith-erp/productionintegrationwith-erp.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DashboardsRoutingModule,
    BsDatepickerModule.forRoot(),
    NgxSpinnerModule,

    // Standalone components go here
    
    MachineMonitoringComponent,
    RawmaterialmanagementComponent,
    QualitycontrolComponent,
    PreventivemaintenancemanagementComponent,
    UserManagementComponent,
    ReportsandAnalyticsComponent,
    SettingsandMasterdataComponent,
    ProductionPlanningComponent,
    ProductionmonitoringComponent,
    ProductionIntegrationWithERPComponent
  ],
  providers: [BsDropdownConfig]
})
export class DashboardsModule {}
