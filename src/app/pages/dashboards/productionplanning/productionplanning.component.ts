import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface ProductionPlan {
  orderId: string;
  product: string;
  plannedQty: number;
  actualQty: number;
  shift: string;
  date: string;
  line: string;
  status: string;
}

@Component({
  selector: 'app-production-planning',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './productionplanning.component.html',
  styleUrls: ['./productionplanning.component.css']
})
export class ProductionPlanningComponent {
  plans: ProductionPlan[] = [];

  showPopup = false;
  isEditMode = false;
  editIndex: number | null = null;

  newPlan: ProductionPlan = this.getEmptyPlan();

  // Open popup for new plan
  openPopupForAdd() {
    this.isEditMode = false;
    this.newPlan = this.getEmptyPlan();
    this.showPopup = true;
  }

  // Open popup for edit
  openPopupForEdit(index: number) {
    this.isEditMode = true;
    this.editIndex = index;
    this.newPlan = { ...this.plans[index] };
    this.showPopup = true;
  }

  // Save (Add or Edit)
  savePlan() {
    if (!this.newPlan.orderId || !this.newPlan.product) return;

    if (this.isEditMode && this.editIndex !== null) {
      this.plans[this.editIndex] = { ...this.newPlan };
    } else {
      this.plans.push({ ...this.newPlan });
    }
   console.log("plans",this.plans)
    this.cancelPopup();
  }

  // Cancel popup
  cancelPopup() {
    this.newPlan = this.getEmptyPlan();
    this.showPopup = false;
    this.isEditMode = false;
    this.editIndex = null;
  }

  // Delete plan
  deletePlan(index: number) {
    this.plans.splice(index, 1);
  }

  private getEmptyPlan(): ProductionPlan {
    return {
      orderId: '',
      product: '',
      plannedQty: 0,
      actualQty: 0,
      shift: 'Morning',
      date: new Date().toISOString().substring(0, 10),
      line: 'Line 1',
      status: 'Planned'
    };
  }
}
