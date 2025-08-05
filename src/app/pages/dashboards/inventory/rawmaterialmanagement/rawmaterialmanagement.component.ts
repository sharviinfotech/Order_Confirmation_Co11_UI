import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rawmaterialmanagement',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rawmaterialmanagement.component.html',
  styleUrls: ['./rawmaterialmanagement.component.css']
})
export class RawmaterialmanagementComponent {
  // Duplicate raw material data
  rawMaterials = [
    {
      materialId: 'RM-1001',
      description: 'Steel Rod 12mm',
      uom: 'Kg',
      availableQty: 500,
      minStock: 100,
      supplierName: 'ABC Steels',
      batchNo: 'BATCH-2025-01',
      dateReceived: '2025-07-15',
      expiryDate: '2026-07-15',
      status: 'OK'
    },
    {
      materialId: 'RM-1002',
      description: 'Aluminium Sheet 2mm',
      uom: 'Sheets',
      availableQty: 50,
      minStock: 100,
      supplierName: 'XYZ Metals',
      batchNo: 'BATCH-2025-02',
      dateReceived: '2025-06-20',
      expiryDate: '2026-06-20',
      status: 'Low'
    },
    {
      materialId: 'RM-1001',
      description: 'Steel Rod 12mm',
      uom: 'Kg',
      availableQty: 500,
      minStock: 100,
      supplierName: 'ABC Steels',
      batchNo: 'BATCH-2025-01',
      dateReceived: '2025-07-15',
      expiryDate: '2026-07-15',
      status: 'OK'
    }
  ];

  // Map status to CSS classes
  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'ok':
        return 'status-ok';
      case 'low':
        return 'status-low';
      case 'expired':
        return 'status-expired';
      default:
        return '';
    }
  }
}
