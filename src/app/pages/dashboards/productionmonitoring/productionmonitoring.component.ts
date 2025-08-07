
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-productionmonitoring',
  templateUrl: './productionmonitoring.component.html',
  styleUrl: './productionmonitoring.component.css',
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class ProductionmonitoringComponent {
plans: any= [ 
    {
        "orderId": "1234",
        "product": "Product A",
        "plannedQty": 3,
        "actualQty": 0,
        "shift": "Shift B",
        "date": "2025-08-06",
        "line": "Machine 1",
        "status": "Planned",
        "assignedOperator": "Ramu",
        "assignedSupervisor": "Kumar"
    },
    {
        "orderId": "73829",
        "product": "product c",
        "plannedQty": 18,
        "actualQty": 0,
        "shift": "Shift B",
        "date": "2025-08-06",
        "line": "Machine 2",
        "status": "In Progress",
        "assignedOperator": "Raju",
        "assignedSupervisor": "karthik"
    }
]

}
