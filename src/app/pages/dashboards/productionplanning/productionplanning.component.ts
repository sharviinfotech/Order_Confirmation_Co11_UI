import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

interface ProductionPlan {
  orderId: string;
  product: string;
  plannedQty: number;
  actualQty: number;
  shift: string;
  assignedOperator: string;
  assignedSupervisor: string;
  date: string;   // From Date
  toDate: string; // To Date
  line: string;
  status: string;
}

@Component({
  selector: 'app-production-planning',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './productionplanning.component.html',
  styleUrls: ['./productionplanning.component.css']
})
export class ProductionPlanningComponent {
  plans: ProductionPlan[] = [];

  showPopup = false;
  isEditMode = false;
  editIndex: number | null = null;

  planForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    const today = new Date().toISOString().substring(0, 10);
    this.planForm = this.fb.group({
      orderId: ['', Validators.required],
      product: ['', Validators.required],
      plannedQty: ['', Validators.required],
      actualQty: [''], // optional
      shift: ['', Validators.required],
      assignedOperator: ['', Validators.required],
      assignedSupervisor: ['', Validators.required],
      date: [today, Validators.required],    // From Date
      toDate: [today, Validators.required],  // To Date
      line: ['', Validators.required],
      status: ['Planned', Validators.required]
    });
  }

  openPopupForAdd() {
    this.isEditMode = false;
    this.createForm();
    this.showPopup = true;
  }

  openPopupForEdit(index: number) {
    this.isEditMode = true;
    this.editIndex = index;
    const plan = this.plans[index];
    this.planForm.setValue({ ...plan });
    this.showPopup = true;
  }

  savePlan() {
    if (this.planForm.invalid) {
      this.planForm.markAllAsTouched();
      return;
    }

    const plan: ProductionPlan = this.planForm.value;

    if (this.isEditMode && this.editIndex !== null) {
      this.plans[this.editIndex] = { ...plan };
    } else {
      this.plans.push({ ...plan });
    }

    this.cancelPopup();
  }

  cancelPopup() {
    this.showPopup = false;
    this.isEditMode = false;
    this.editIndex = null;
    this.planForm.reset();
  }

  deletePlan(index: number) {
    this.plans.splice(index, 1);
  }
}
