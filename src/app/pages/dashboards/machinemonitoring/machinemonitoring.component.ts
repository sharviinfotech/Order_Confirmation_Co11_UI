import {
  AfterViewChecked,
  Component,
  ViewChild,
  ElementRef
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Chart, ChartConfiguration } from 'chart.js/auto';

interface DailyCard {
  date: Date;
  orderId: string;
  productCode: string;
  productDescription: string;
  totalRunTime: string;
  downTime: string;
  oee: string;
}

@Component({
  selector: 'app-machine-monitoring',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './machinemonitoring.component.html',
  styleUrls: ['./machinemonitoring.component.css']
})
export class MachineMonitoringComponent implements AfterViewChecked {
  selection: string = '';
  selectedOrderId: string = '';

  orderIds: string[] = ['ORD-1001', 'ORD-1002', 'ORD-1003'];

  machine = {
    image: 'assets/images/Machinescreen.jpeg',
    state: 'RUN',
    stateTime: '27/07/2023 19:19:42',
    productionToday: 14000,
    productionWeek: 49983,
    productionMonth: 262956,
    shift: 'Shift 1',
    runTime: '11:43 hr',
    idleTime: '07:45 hr',
    offTime: '00:00 hr'
  };

  fromDate: string = '';
  toDate: string = '';
  dailyCards: DailyCard[] = [];

  private machineOperationLabels = ['Jul 24', 'Jul 25', 'Jul 26', 'Jul 27'];
  private runTimeData = [400, 300, 500, 600];
  private idleTimeData = [100, 200, 150, 120];

  private productionLabels = ['Jul 24', 'Jul 25', 'Jul 26', 'Jul 27'];
  private productionData = [9000, 4000, 12000, 6000];

  private machineChartRendered = false;
  private productionChartRendered = false;

  private machineChartInstance: Chart | null = null;
  private productionChartInstance: Chart | null = null;

  ngAfterViewChecked(): void {
    if (
      this.selection === 'with' &&
      this.selectedOrderId &&
      !this.machineChartRendered
    ) {
      this.initMachineOperationChart();
      this.initProductionChart();
      this.machineChartRendered = true;
      this.productionChartRendered = true;
    }
  }

  resetCharts(): void {
    this.machineChartRendered = false;
    this.productionChartRendered = false;

    if (this.machineChartInstance) {
      this.machineChartInstance.destroy();
      this.machineChartInstance = null;
    }

    if (this.productionChartInstance) {
      this.productionChartInstance.destroy();
      this.productionChartInstance = null;
    }
  }

  private initMachineOperationChart(): void {
    const ctx = document.getElementById(
      'machineOperationChart'
    ) as HTMLCanvasElement;
    if (!ctx) return;

    this.machineChartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.machineOperationLabels,
        datasets: [
          {
            label: 'RUN Time (mins)',
            data: this.runTimeData,
            backgroundColor: 'green'
          },
          {
            label: 'IDLE Time (mins)',
            data: this.idleTimeData,
            backgroundColor: 'orange'
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'top' },
          title: { display: true, text: 'Machine Operation Trend' }
        },
        scales: {
          y: {
            beginAtZero: true,
            title: { display: true, text: 'Minutes' }
          }
        }
      }
    });
  }

  private initProductionChart(): void {
    const ctx = document.getElementById(
      'productionChart'
    ) as HTMLCanvasElement;
    if (!ctx) return;

    this.productionChartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.productionLabels,
        datasets: [
          {
            label: 'Production (meters)',
            data: this.productionData,
            backgroundColor: 'blue'
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          title: { display: true, text: 'Production in meters' }
        },
        scales: {
          y: {
            beginAtZero: true,
            title: { display: true, text: 'Meters' }
          }
        }
      }
    });
  }

  private getDatesBetween(start: Date, end: Date): Date[] {
    const dates: Date[] = [];
    let current = new Date(start.getFullYear(), start.getMonth(), start.getDate());
    const last = new Date(end.getFullYear(), end.getMonth(), end.getDate());
    while (current <= last) {
      dates.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }
    return dates;
  }

  onDateChange(): void {
    this.dailyCards = [];
    if (this.fromDate && this.toDate) {
      const start = new Date(this.fromDate);
      const end = new Date(this.toDate);
      if (start > end) return;

      const dateList = this.getDatesBetween(start, end);

      this.dailyCards = dateList.map(date => ({
        date,
        orderId: `ORD-${date.getDate()}`,
        productCode: `PCODE-${date.getDate()}`,
        productDescription: `Description for ${date.toDateString()}`,
        totalRunTime: `${Math.floor(Math.random() * 8) + 1}h`,
        downTime: `${Math.floor(Math.random() * 3)}h`,
        oee: `${Math.floor(Math.random() * 100)}%`
      }));
    }
  }
}
