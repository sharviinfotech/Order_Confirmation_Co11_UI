import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-productionintegrationiwith-erp',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './productionintegrationwith-erp.component.html',
  styleUrls: ['./productionintegrationwith-erp.component.css']
})
export class ProductionIntegrationWithERPComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      orderId: ['', Validators.required],
      product: ['', Validators.required],
      plannedQty: ['', Validators.required],
      actualQty: ['', Validators.required],
      shift: ['', Validators.required],
      assignedOperator: ['', Validators.required],
      assignedSupervisor: ['', Validators.required],
      Machine: ['', Validators.required],
      status: ['', Validators.required],
      plant: ['', Validators.required],
      productCode: ['', Validators.required],
      productDescription: ['', Validators.required],
      movementType: ['', Validators.required],
      sloc: ['', Validators.required],
      goodsActualQty: ['', Validators.required],
      batch: ['', Validators.required],
      valuationType: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      alert('Form Submitted Successfully');
      console.log(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }
}
