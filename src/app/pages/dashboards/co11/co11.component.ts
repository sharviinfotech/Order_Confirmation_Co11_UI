import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Variance {
  yield: string;
  scrap: string;
  rework: string;
  reasonForVariance: string;
}

interface Co11Plan {
  AUFNR: string;        
  VORNR: string;       
  WERKS: string;       
  GAMNG: string;        
  WEMNG: string;        
  BALANCEQTY: string;   
  TCONFQTY: string;    
  TBALANCEQTY: string;  
  shift: string;        
  POSTDATE: string;     
  WORK_CNTR: string;    
  PLNBEZ: string;       
  DEFRBATCH: string;    
  variance: Variance;   
}

@Component({
  selector: 'app-co11',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './co11.component.html',
  styleUrls: ['./co11.component.css']
})
export class Co11Component {
  plans: Co11Plan[] = [];
  isEditMode = false;
  editIndex: number | null = null;
  planForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.planForm = this.fb.group({
      AUFNR: ['', Validators.required],
      VORNR: ['', Validators.required],
      WERKS: ['', Validators.required],
      GAMNG: ['', Validators.required],
      WEMNG: ['', Validators.required],
      BALANCEQTY: ['', Validators.required],
      TCONFQTY: ['', Validators.required],
      TBALANCEQTY: ['', Validators.required],
      shift: ['', Validators.required],
      POSTDATE: ['', Validators.required],
      WORK_CNTR: ['', Validators.required],
      PLNBEZ: ['', Validators.required],
      DEFRBATCH: ['', Validators.required],

      // ✅ Nested group for Quantities
      variance: this.fb.group({
        yield: ['', Validators.required],
        scrap: [''],
        rework: [''],
        reasonForVariance: ['']
      })
    });
  }

  editPlan(index: number) {
    this.isEditMode = true;
    this.editIndex = index;
    const plan = this.plans[index];
    this.planForm.setValue({ ...plan }); 
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  savePlan() {
    if (this.planForm.invalid) {
      this.planForm.markAllAsTouched();
      return;
    }

    const plan: Co11Plan = this.planForm.value;

    if (this.isEditMode && this.editIndex !== null) {
      this.plans[this.editIndex] = { ...plan };
      this.isEditMode = false;
      this.editIndex = null;
    } else {
      this.plans.push({ ...plan });
    }

    this.planForm.reset();
    this.createForm(); // reinitialize validators
  }

  cancelEdit() {
    this.isEditMode = false;
    this.editIndex = null;
    this.planForm.reset();
    this.createForm();
  }

  deletePlan(index: number) {
    if (this.editIndex === index) {
      this.cancelEdit();
    } else if (this.editIndex !== null && this.editIndex > index) {
      this.editIndex--;
    }
    this.plans.splice(index, 1);
  }
}
