import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productionplanning',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productionplanning.component.html',
  styleUrls: ['./productionplanning.component.css']
})
export class ProductionplanningComponent {

  productionPlans = [
    {
      orderId: 'ORD-1001',
      productName: 'Widget A / PROD-001',
      plannedQty: 500,
      actualQty: 480,
      shift: 'Shift 1 / 2025-08-04 / 08:00 AM',
      productionLine: 'Line-1',
      operator: 'John Doe',
      targetTime: '10:00 AM',
      status: 'Planned'
    },
    {
      orderId: 'ORD-1002',
      productName: 'Widget B / PROD-002',
      plannedQty: 300,
      actualQty: 290,
      shift: 'Shift 2 / 2025-08-04 / 02:00 PM',
      productionLine: 'Line-2',
      operator: 'Jane Smith',
      targetTime: '06:00 PM',
      status: 'In Progress'
    },
    {
      orderId: 'ORD-1003',
      productName: 'Widget C / PROD-003',
      plannedQty: 400,
      actualQty: 400,
      shift: 'Shift 3 / 2025-08-05 / 10:00 PM',
      productionLine: 'Line-3',
      operator: 'Mike Johnson',
      targetTime: '02:00 AM',
      status: 'Completed'
    },
    // Duplicate entries for table filling
    {
      orderId: 'ORD-1001',
      productName: 'Widget A / PROD-001',
      plannedQty: 500,
      actualQty: 480,
      shift: 'Shift 1 / 2025-08-04 / 08:00 AM',
      productionLine: 'Line-1',
      operator: 'John Doe',
      targetTime: '10:00 AM',
      status: 'Planned'
    }
  ];

  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'planned': return 'status-planned';
      case 'in progress': return 'status-in-progress';
      case 'completed': return 'status-completed';
      default: return '';
    }
  }

}
