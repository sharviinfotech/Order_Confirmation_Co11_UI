import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration, ChartOptions, Chart } from 'chart.js';
import { registerables } from 'chart.js';

// register chart.js components once
Chart.register(...registerables);

@Component({
  selector: 'app-smart-dashboard',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent {
  now: Date = new Date(); 

  // KPI values
  productionToday = 1234;
  oee = 99;

  // Machine status simple counts (display only, match wireframe)
  machineStatus = {
    running: 5,
    idle: 2,
    faulty: 1
  };

  // Alerts (top small and bottom large share same list for simplicity)
  alerts = [
    'Machine 3: temperature high',
    'Line 2: minor vibration',
    'Order #456 delayed'
  ];

  // -------- Energy Consumption (line chart) --------
  public energyData: ChartConfiguration<'line'>['data'] = {
    labels: ['Mon','Tue','Wed','Thu','Fri'],
    datasets: [
      {
        label: 'Energy (kWh)',
        data: [60, 55, 75, 70, 85],
        fill: true,
        borderColor: '#60a5fa',
        backgroundColor: 'rgba(96,165,250,0.12)',
        tension: 0.35,
        pointRadius: 3
      }
    ]
  };
  public energyOptions: ChartOptions<'line'> = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
      x: { ticks: { color: '#cbd5e1' }, grid: { color: 'rgba(203,213,225,0.06)' } },
      y: { ticks: { color: '#cbd5e1' }, grid: { color: 'rgba(203,213,225,0.06)' } }
    }
  };

  // -------- Downtime Summary (bar chart) --------
  public downtimeData: ChartConfiguration<'bar'>['data'] = {
    labels: ['Machine 1','Machine 2','Machine 3','Machine 4'],
    datasets: [
      {
        label: 'Downtime (hrs)',
        data: [3, 5, 7, 9],
        backgroundColor: ['#f87171','#facc15','#60a5fa','#93c5fd']
      }
    ]
  };
  public downtimeOptions: ChartOptions<'bar'> = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
      x: { ticks: { color: '#cbd5e1' }, grid: { color: 'rgba(203,213,225,0.04)' } },
      y: { ticks: { color: '#cbd5e1' }, grid: { color: 'rgba(203,213,225,0.04)' } }
    }
  };

  // Optional: simulate small live updates (can be removed)
  constructor() {
    // small simulation to show charts live — remove if undesired
    setInterval(() => this.simulateLive(), 5000);
  }

  private simulateLive() {
    // add a tiny random delta to production & energy
    this.productionToday += Math.floor(Math.random() * 30);
    this.oee = Math.max(80, Math.min(100, this.oee + (Math.random() > 0.6 ? 1 : 0)));

    // rotate energy points
    const ds = this.energyData.datasets[0].data as number[];
    const next = Math.max(30, (ds[ds.length-1] ?? 60) + (Math.random() * 10 - 4));
    ds.shift();
    ds.push(Math.round(next));
    this.energyData = { ...this.energyData }; // trigger change detection

    // tweak downtime randomly
    const dds = this.downtimeData.datasets[0].data as number[];
    for (let i = 0; i < dds.length; i++) {
      dds[i] = Math.max(0, Math.round((dds[i] + (Math.random() * 2 - 0.8)) * 10) / 10);
    }
    this.downtimeData = { ...this.downtimeData };
  }
}
