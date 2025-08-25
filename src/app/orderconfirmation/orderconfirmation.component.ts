import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

interface ProductionPlan {
  confirmation: string;
  product: string;
  plannedQty: number;
  actualQty: number;
  shift: string;
  assignedOperator: string;
  assignedSupervisor: string;
  date: string;
  toDate: string;
  machine: string;
  plantCode: string;
  status: string;
}


@Component({
  selector: 'app-orderconfirmation',
   standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './orderconfirmation.component.html',
  styleUrls: ['./orderconfirmation.component.css']
})
export class OrderconfirmationComponent  {
    plans: ProductionPlan[] = [];
  isEditMode = false;
  editIndex: number | null = null;
  planForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    const today = new Date().toISOString().substring(0, 10);
    this.planForm = this.fb.group({
      confirmation: ['', Validators.required],
      product: ['', Validators.required],
      plannedQty: ['', Validators.required],
      actualQty: [''], // optional
      shift: ['', Validators.required],
      assignedOperator: ['', Validators.required],
      assignedSupervisor: ['', Validators.required],
      date: [today, Validators.required],
      toDate: [today, Validators.required],
      machine: ['', Validators.required],
      plantCode: ['', Validators.required],
      status: ['', Validators.required]
    });
  }

  // This method will be called by your edit button
  editPlan(index: number) {
    this.isEditMode = true;
    this.editIndex = index;
    const plan = this.plans[index];
    this.planForm.setValue({ ...plan });
    
    // Scroll to top so user can see the form
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  savePlan() {
    if (this.planForm.invalid) {
      this.planForm.markAllAsTouched();
      return;
    }

    const plan: ProductionPlan = this.planForm.value;

    if (this.isEditMode && this.editIndex !== null) {
      // Update existing plan
      this.plans[this.editIndex] = { ...plan };
      this.isEditMode = false;
      this.editIndex = null;
    } else {
      // Add new plan
      this.plans.push({ ...plan });
    }

    this.planForm.reset();
    this.createForm(); // Reset form with default values
  }

  cancelEdit() {
    this.isEditMode = false;
    this.editIndex = null;
    this.planForm.reset();
    this.createForm(); // Reset form with default values
  }

  deletePlan(index: number) {
    // If we're editing the plan that's being deleted, cancel edit mode
    if (this.editIndex === index) {
      this.cancelEdit();
    }
    // If we're editing a plan after the deleted one, adjust the index
    else if (this.editIndex !== null && this.editIndex > index) {
      this.editIndex--;
    }
    
    this.plans.splice(index, 1);
  }
}