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
  operatorForm: FormGroup;

  // 🟡 Add this array for machine dropdown
  machines: string[] = ['Machine A', 'Machine B', 'Machine C'];

  // 🟡 Add this for table output (fake data or collected data)
  operatorData: any[] = [];
  operatorName:any
  downtime:any
  performance:any
  goodparts:any
  remaining:any
  totalOrder:any
  maxLifts:any
  shuttleTime:any
  shiftQty:any
  estimatedFinishTime:any
  machine:any
  toolRun:any
  oee:any
  cavities:any
  jobTimeline:any[]
  constructor(private fb: FormBuilder) {
    this.operatorForm = this.fb.group({
      operator: ['ALEXANDER, JEREMY', Validators.required],
      productCode: ['1-F70-0381', Validators.required],
      description: ['FP206 Thin E105', Validators.required],
      scrap: [0, Validators.required],
      workOrder: ['WO098214', Validators.required],
      downtime: ['10:35:55', Validators.required],
      performance: ['0.0%', Validators.required],
      goodParts: [832, Validators.required],
      remaining: [198, Validators.required],
      totalOrder: [1030, Validators.required],
      maxLiftsPerHr: [31, Validators.required],
      shuttleTime: [25, Validators.required],
      shiftQty: [0, Validators.required],
      estFinishTime: ['05-12-2019 12:37:41 AM', Validators.required],
      toolRun: ['TR112041', Validators.required],
      oee: ['0.0', Validators.required],
      cavities: [2, Validators.required],
      machine: ['', Validators.required],  // Optional dropdown
      shift: ['', Validators.required],    // Optional dropdown
      status: ['', Validators.required],   // Optional dropdown
    });
  }

  // 🟢 Form Actions
  endOfShift() {
    alert('End of Shift action triggered');
  }

  emptyLift() {
    alert('Empty Lift action triggered');
  }

  breakShift() {
    alert('Break action triggered');
  }

  scrapAction() {
    alert('Scrap action triggered');
  }

  oeeAction() {
    alert('OEE action triggered');
  }

  breakdown() {
    alert('Breakdown action triggered');
  }

  submitForm() {
    if (this.operatorForm.valid) {
      console.log('Form Submitted', this.operatorForm.value);
      this.operatorData.push(this.operatorForm.value);
      alert('Form Submitted Successfully');
      this.resetForm();
    } else {
      this.operatorForm.markAllAsTouched();
    }
  }

  // ✅ Needed to fix the error in HTML
  resetForm() {
    this.operatorForm.reset();
  }
}