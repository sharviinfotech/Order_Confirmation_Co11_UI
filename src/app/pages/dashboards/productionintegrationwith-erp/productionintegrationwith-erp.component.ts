import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-production-integration-tables',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productionintegrationwith-erp.component.html',
  styleUrls: ['./productionintegrationwith-erp.component.css']
})
export class ProductionIntegrationWithERPComponent {
  // Sample left table data (ERP Integration)
  erpRows = [
    {
      orderId: '1001', product: 'Prod A', plannedQty: 50, shift: 'A',
      assignedOperator: 'Ramu', assignedSupervisor: 'Kumar',
      machine: 'Machine 1', actualQty: 45, status: 'Completed',
      postingDate: '2025-08-12', runtime: '5h', downtime: '1h'
    },
    {
      orderId: '1002', product: 'Prod B', plannedQty: 30, shift: 'B',
      assignedOperator: 'Raju', assignedSupervisor: 'Suresh',
      machine: 'Machine 2', actualQty: 25, status: 'In Progress',
      postingDate: '', runtime: '', downtime: ''
    }
  ];

  // Sample right table data (Goods Movement)
  goodsRows = [
    {
      plant: 'Plant A', productCode: 'P001', productDescription: 'Description 1',
      movementType: '101', sloc: 'S1', actualQty: 45,
      batch: 'B001', valuationType: 'Standard'
    },
    {
      plant: 'Plant B', productCode: 'P002', productDescription: 'Description 2',
      movementType: '102', sloc: 'S2', actualQty: 25,
      batch: 'B002', valuationType: 'Average'
    }
  ];

  editERP(row: any) {
    console.log('Edit ERP row', row);
  }

  deleteERP(row: any) {
    console.log('Delete ERP row', row);
  }
}
