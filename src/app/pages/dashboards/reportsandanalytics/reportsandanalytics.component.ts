import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reports-analytics',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reportsandanalytics.component.html',
  styleUrls: ['./reportsandanalytics.component.css']
})
export class ReportsandAnalyticsComponent {
  filterForm: FormGroup;
  reports: string[] = [
    'Production Summary',
    'Shift Efficiency',
    'Downtime Analysis',
    'QC Failure Rate',
    'Material Consumption',
    'Machine Utilization',
    'Energy Usage'
  ];

  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      dateRange: [''],
      machineLine: [''],
      productWorkOrder: [''],
      shiftOperator: ['']
    });
  }

  onFilter() {
    console.log('Filters applied:', this.filterForm.value);
    // Add logic to fetch filtered reports
  }
}
