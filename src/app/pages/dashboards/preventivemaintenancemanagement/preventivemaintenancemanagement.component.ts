import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-preventivemaintenance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preventivemaintenancemanagement.component.html',
  styleUrls: ['./preventivemaintenancemanagement.component.css']
})
export class PreventivemaintenancemanagementComponent {
  // Duplicate sample data
  maintenanceRecords = [
    {
      machineId: 'MCH-001',
      maintenanceType: 'Preventive',
      lastServiceDate: '2025-07-15',
      nextDueDate: '2025-08-15',
      technician: 'John Smith',
      spareParts: 'Filter, Oil',
      costIncurred: '₹1,500',
      remarks: 'Routine check completed',
      status: 'Scheduled'
    },
    {
      machineId: 'MCH-002',
      maintenanceType: 'Breakdown',
      lastServiceDate: '2025-07-20',
      nextDueDate: '2025-08-20',
      technician: 'Alice Johnson',
      spareParts: 'Bearing, Belt',
      costIncurred: '₹3,000',
      remarks: 'Emergency repair due to breakdown',
      status: 'Completed'
    },
    // Duplicate entry for demonstration
    {
      machineId: 'MCH-001',
      maintenanceType: 'Preventive',
      lastServiceDate: '2025-07-15',
      nextDueDate: '2025-08-15',
      technician: 'John Smith',
      spareParts: 'Filter, Oil',
      costIncurred: '₹1,500',
      remarks: 'Routine check completed',
      status: 'Scheduled'
    }
  ];

  // Status color mapping
  getStatusClass(status: string): string {
    return status.toLowerCase() === 'scheduled' ? 'status-scheduled' : 'status-completed';
  }
}
