import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-coois',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './coois.component.html',
  styleUrls: ['./coois.component.css']
})
export class CooisComponent {
  form: FormGroup;

  dropdownOptions: string[] = ['Order Headers', 'CONFIRMATION', 'Goods'];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      dropdown: [''],            // List dropdown
      prdOrdersCheck: [false],   // Production Order checkbox
      plndOrdersCheck: [false],  // Planned Order checkbox
      WERKS: [''],               // Plant

      AUFNR_F: [''], // From Order Number
      AUFNR_T: [''], // To Order Number
      AUART_F: [''], // From Order Type
      AUART_T: [''], // To Order Type

      KDAUF_F: [''], // From Sales Order
      KDAUF_T: [''], // To Sales Order
      KDPOS_F: [''], // From Sales Order Item
      KDPOS_T: ['']  // To Sales Order Item
    });
  }

}