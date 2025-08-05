import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-qualitycontrol',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './qualitycontrol.component.html',
  styleUrls: ['./qualitycontrol.component.css']
})
export class QualitycontrolComponent {
  // Duplicate sample QC data
  qualityChecks = [
    {
      qcId: 'QC-1001',
      workOrderId: 'WO-001',
      inspectorName: 'John Doe',
      productMaterial: 'Steel Rod 12mm',
      parameters: 'Length: 12mm, Color: Silver, Weight: 10kg',
      result: 'Pass',
      deviationNotes: 'No deviations',
      image: 'https://via.placeholder.com/50', // sample placeholder image
      inspectionDateTime: '2025-08-04 10:30 AM'
    },
    {
      qcId: 'QC-1002',
      workOrderId: 'WO-002',
      inspectorName: 'Alice Smith',
      productMaterial: 'Aluminium Sheet 2mm',
      parameters: 'Dimensions: 2x2 ft, Color: Silver, Weight: 3kg',
      result: 'Fail',
      deviationNotes: 'Minor surface scratches found',
      image: 'https://via.placeholder.com/50',
      inspectionDateTime: '2025-08-04 11:00 AM'
    },
    {
      qcId: 'QC-1001', // Duplicate for demonstration
      workOrderId: 'WO-001',
      inspectorName: 'John Doe',
      productMaterial: 'Steel Rod 12mm',
      parameters: 'Length: 12mm, Color: Silver, Weight: 10kg',
      result: 'Pass',
      deviationNotes: 'No deviations',
      image: 'https://via.placeholder.com/50',
      inspectionDateTime: '2025-08-04 10:30 AM'
    }
  ];

  // Map result to CSS classes
  getResultClass(result: string): string {
    return result.toLowerCase() === 'pass' ? 'result-pass' : 'result-fail';
  }
}
