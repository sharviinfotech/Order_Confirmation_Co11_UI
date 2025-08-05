import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-work-order',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './workordermanagement.component.html',
  styleUrls: ['./workordermanagement.component.css']
})
export class WorkOrderManagementComponent {
  workOrders = [
    {
      workOrderId: 'WO-001',
      salesOrder: 'SO-101',
      productSKU: 'PROD-123',
      quantity: 100,
      bom: 'BOM-001',
      assignedMachine: 'Machine-1',
      priority: 'High',
      startDate: '01-Aug-2025',
      endDate: '05-Aug-2025',
      status: 'In Progress'
    },
    {
      workOrderId: 'WO-002',
      salesOrder: 'SO-102',
      productSKU: 'PROD-456',
      quantity: 200,
      bom: 'BOM-002',
      assignedMachine: 'Machine-2',
      priority: 'Medium',
      startDate: '02-Aug-2025',
      endDate: '06-Aug-2025',
      status: 'Not Started'
    },
    // Duplicate rows
    {
      workOrderId: 'WO-003',
      salesOrder: 'SO-103',
      productSKU: 'PROD-789',
      quantity: 150,
      bom: 'BOM-003',
      assignedMachine: 'Machine-3',
      priority: 'Low',
      startDate: '03-Aug-2025',
      endDate: '07-Aug-2025',
      status: 'Halted'
    },
    {
      workOrderId: 'WO-004',
      salesOrder: 'SO-104',
      productSKU: 'PROD-123',
      quantity: 100,
      bom: 'BOM-001',
      assignedMachine: 'Machine-1',
      priority: 'High',
      startDate: '01-Aug-2025',
      endDate: '05-Aug-2025',
      status: 'Completed'
    }
  ];

  getPriorityClass(priority: string): string {
    switch (priority.toLowerCase()) {
      case 'high': return 'priority-high';
      case 'medium': return 'priority-medium';
      case 'low': return 'priority-low';
      default: return '';
    }
  }

  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'not started': return 'status-not-started';
      case 'in progress': return 'status-in-progress';
      case 'halted': return 'status-halted';
      case 'completed': return 'status-completed';
      default: return '';
    }
  }
}
