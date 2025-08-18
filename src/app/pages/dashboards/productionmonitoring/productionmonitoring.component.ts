import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-productionmonitoring',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './productionmonitoring.component.html',
  styleUrls: ['./productionmonitoring.component.css']
})
export class ProductionmonitoringComponent {
  plansForm!: FormArray;
  editingIndex: number | null = null;

  constructor(private fb: FormBuilder) {
    const plans = [
      {
        orderId: '1234',
        product: 'Product A',
        plannedQty: 3,
        actualQty: 0,
        shift: 'Shift B',
        date: '2025-08-06',
        machine: 'Machine 1',
        status: 'Planned',
        assignedOperator: 'Ramu',
        assignedSupervisor: 'Kumar',
        postingDate: '',
        runtime: '',
        downtime: ''
      },
      {
        orderId: '73829',
        product: 'Product C',
        plannedQty: 18,
        actualQty: 0,
        shift: 'Shift B',
        date: '2025-08-06',
        machine: 'Machine 2',
        status: 'In Progress',
        assignedOperator: 'Raju',
        assignedSupervisor: 'Karthik',
        postingDate: '',
        runtime: '',
        downtime: ''
      }
    ];

    this.plansForm = this.fb.array(
  plans.map(p => this.fb.group({
    orderId: [p.orderId],
    product: [p.product],
    plannedQty: [p.plannedQty],
    shift: [p.shift],
    assignedOperator: [p.assignedOperator],
    assignedSupervisor: [p.assignedSupervisor],
    date: [p.date],
    machine: [p.machine],
    actualQty: [p.actualQty], // ✅ moved after line
    status: [p.status],
    postingDate: [p.postingDate],
    runtime: [p.runtime],
    downtime: [p.downtime]
  }))
);

  }

  get plans() {
    return this.plansForm.controls as FormGroup[];
  }

  editRow(index: number) {
    this.editingIndex = index;
  }

  saveRow(index: number) {
    const updated = this.plans[index].value;
    console.log('Updated row:', updated);
    this.editingIndex = null;
  }
}
