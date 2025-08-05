import { Component } from '@angular/core';

@Component({
  selector: 'app-machine-monitoring',
  templateUrl: './machinemonitoring.component.html',
  styleUrls: ['./machinemonitoring.component.css'],
  standalone: true
})
export class MachineMonitoringComponent {
  machines = [
    {
      id: 'MC-1001',
      department: 'Line A',
      status: 'Running',
      runningSince: new Date('2025-08-04T08:00:00'),
      rpm: 1420,
      temp: 68,
      load: 75,
      uptime: 98.5,
      alerts: 0,
      maintenanceDue: new Date('2025-08-10')
    },
    {
      id: 'MC-1002',
      department: 'Line B',
      status: 'Idle',
      runningSince: new Date('2025-08-04T06:30:00'),
      rpm: 0,
      temp: 40,
      load: 5,
      uptime: 82.1,
      alerts: 2,
      maintenanceDue: new Date('2025-08-12')
    }
  ];

  formatDate(date: Date): string {
    return date.toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
}