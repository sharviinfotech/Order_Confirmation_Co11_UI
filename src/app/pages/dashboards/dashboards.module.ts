import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';

import { DashboardsRoutingModule } from './dashboards-routing.module';

// Standalone components (imported ONLY, not declared)
import { MachineMonitoringComponent } from './machinemonitoring/machinemonitoring.component';
import { RawmaterialmanagementComponent } from './inventory/rawmaterialmanagement/rawmaterialmanagement.component';
import { QualitycontrolComponent } from './qualitycontrol/qualitycontrol.component';
import { PreventivemaintenancemanagementComponent } from './preventivemaintenancemanagement/preventivemaintenancemanagement.component';
import { UserManagementComponent } from './usermanagement/usermanagement.component';
import { ReportsandAnalyticsComponent } from './reportsandanalytics/reportsandanalytics.component';
import { SettingsandMasterdataComponent } from './settingsandmasterdata/settingsandmasterdata.component';
import { ProductionPlanningComponent } from './productionplanning/productionplanning.component';
import { ProductionmonitoringComponent } from './productionmonitoring/productionmonitoring.component';
import { OperatorDashboardComponent } from './operatordashboard/operatordashboard.component';
import { ProductionIntegrationWithERPComponent } from './productionintegrationwith-erp/productionintegrationwith-erp.component';


@NgModule({
  // ❌ No declarations for standalone components
  declarations: [
  
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DashboardsRoutingModule,
    BsDatepickerModule.forRoot(),
    NgxSpinnerModule,

    // ✅ Standalone components only go in imports
    MachineMonitoringComponent,
    RawmaterialmanagementComponent,
    QualitycontrolComponent,
    PreventivemaintenancemanagementComponent,
    UserManagementComponent,
    ReportsandAnalyticsComponent,
    SettingsandMasterdataComponent,
    ProductionPlanningComponent,
    ProductionmonitoringComponent,
    OperatorDashboardComponent
  ],
  providers: [BsDropdownConfig]
})
export class DashboardsModule { }