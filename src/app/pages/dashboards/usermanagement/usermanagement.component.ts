import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-operator-management',
  standalone: true,
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.css'],
  imports: [CommonModule]
})
export class UserManagementComponent {
  operators = [
    {
      id: 'OP001',
      name: 'John Doe',
      role: 'Admin',
      department: 'Production',
      shift: 'Morning',
      contact: '9876543210',
      permissions: 'Full Access',
      lastLogin: '2025-08-01 09:00 AM'
    },
    {
      id: 'OP002',
      name: 'Alice Smith',
      role: 'Operator',
      department: 'Quality Control',
      shift: 'Evening',
      contact: '9123456780',
      permissions: 'Limited Access',
      lastLogin: '2025-08-02 02:30 PM'
    },
    {
      id: 'OP003',
      name: 'Bob Johnson',
      role: 'Supervisor',
      department: 'Maintenance',
      shift: 'Night',
      contact: '9988776655',
      permissions: 'Moderate Access',
      lastLogin: '2025-08-03 11:45 PM'
    }
  ];
}
