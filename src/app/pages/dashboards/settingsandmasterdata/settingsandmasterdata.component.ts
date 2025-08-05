import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-settingsmasterdata',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './settingsandmasterdata.component.html',
  styleUrls: ['./settingsandmasterdata.component.css']
})
export class SettingsandMasterdataComponent {
  masterForm: FormGroup;
  masterDataList: any[] = [];

  constructor(private fb: FormBuilder) {
    this.masterForm = this.fb.group({
      moduleType: ['', Validators.required], // Product, Machine, etc.
      name: ['', Validators.required],       // Name of Master Data
      code: ['', Validators.required],       // Code/ID
      description: [''],                      // Optional description
      isActive: [true]                        // Active/Inactive
    });
  }

  onSubmit() {
    if (this.masterForm.valid) {
      this.masterDataList.push({ ...this.masterForm.value });
      this.masterForm.reset({ isActive: true });
    }
  }

  deleteItem(index: number) {
    this.masterDataList.splice(index, 1);
  }

  editItem(index: number) {
    const item = this.masterDataList[index];
    this.masterForm.patchValue(item);
    this.deleteItem(index);
  }
}
