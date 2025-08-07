import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Machine {
  id: string;
  name: string;
  line: string;
  status: string;
  runningSince: string;
  uptime: number;
  alerts: string;
  maintenanceDue: string;
}

@Component({
  selector: 'app-machine-monitoring',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './machinemonitoring.component.html',
  styleUrls: ['./machinemonitoring.component.css']
})
export class MachineMonitoringComponent {
  machines: Machine[] = [];

  showPopup = false;
  isEditMode = false;
  editIndex: number | null = null;

  newMachine: Machine = this.getEmptyMachine();

  // Open popup for new machine
  openPopupForAdd() {
    this.isEditMode = false;
    this.newMachine = this.getEmptyMachine();
    this.showPopup = true;
  }

  // Open popup for edit
  openPopupForEdit(index: number) {
    this.isEditMode = true;
    this.editIndex = index;
    this.newMachine = { ...this.machines[index] };
    this.showPopup = true;
  }

  // Save (Add or Edit)
  saveMachine() {
    if (!this.newMachine.id || !this.newMachine.name) return;

    if (this.isEditMode && this.editIndex !== null) {
      this.machines[this.editIndex] = { ...this.newMachine };
    } else {
      this.machines.push({ ...this.newMachine });
    }

    this.cancelPopup();
  }

  // Cancel popup
  cancelPopup() {
    this.newMachine = this.getEmptyMachine();
    this.showPopup = false;
    this.isEditMode = false;
    this.editIndex = null;
  }

  // Delete machine
  deleteMachine(index: number) {
    this.machines.splice(index, 1);
  }

  // Get status class for badge
  getStatusClass(status: string): string {
    return status.replace(/\s+/g, '-').toLowerCase();
  }

  private getEmptyMachine(): Machine {
    return {
      id: '',
      name: '',
      line: '',
      status: 'Running',
      runningSince: '',
      uptime: 0,
      alerts: '',
      maintenanceDue: ''
    };
  }
}
