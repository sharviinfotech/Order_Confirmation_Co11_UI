import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-operator-dashboard',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './operatordashboard.component.html',
  styleUrls: ['./operatordashboard.component.css']
})
export class OperatorDashboardComponent {

operator = 'ALEXANDER, JEREMY';
  currentTime = new Date().toLocaleString();
  
  productCode = '1-F70-0381';
  description = 'FP206 Thin E105';
  scrap = 0;
  workOrder = 'W0098214';
  downtime = '10:35:55';
  performance = '0.0%';

  goodParts = 832;
  remaining = 198;
  totalOrder = 1030;

  maxLiftsHr = 31;
  shuttleTime = 25;
  shiftQty = 0;
  estimatedFinish = '05-12-2019 12:37:41 AM';

  toolRun = 'TR112041';
  oee = 0.0;
  cavities = 2;

  machineId = 61;
  machineStatus = 'running'; // could be used for dynamic coloring

  jobTimeline = [
    { time: '07 PM', status: 'running' },
    { time: '08 PM', status: 'running' },
    { time: '09 PM', status: 'stopped' },
    { time: '10 PM', status: 'running' },
    { time: '11 PM', status: 'stopped' },
    { time: '12 AM', status: 'running' },
  ];

  constructor() {}

  ngOnInit(): void {
    // Any future logic like auto-refresh or data fetching can go here
  }
}