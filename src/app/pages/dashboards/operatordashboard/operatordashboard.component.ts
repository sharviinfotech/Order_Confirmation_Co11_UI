import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

type TimelineSeg = { color: string; flex: number };
type Snapshot = {
  goodParts: number;
  scrap: number;
  downtime: string;
  performance: number;
  totalOrder: number;
};

@Component({
  selector: 'app-operator-dashboard',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './operatordashboard.component.html',
  styleUrls: ['./operatordashboard.component.css']
})
export class OperatorDashboardComponent {
  now = new Date();
  form: FormGroup;

  timeline: TimelineSeg[] = [
    { color: '#6cb6ff', flex: 5 } // initial production
  ];

  hours = [
    '07 PM','08 PM','09 PM','10 PM','11 PM','12 AM',
    '01 AM','02 AM','03 AM','04 AM','05 AM','06 AM'
  ];

  private lastSaved!: Snapshot;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      operator: ['ALEXANDER,JEREMY'],
      productCode: ['1-F70-0381'],
      description: ['FP206 Thin E105'],
      scrap: [0],
      workOrder: ['WO098214'],
      downtime: ['0'],              // keep '0' as "no downtime"
      performance: [0],
      goodParts: [832],
      remaining: [198],
      totalOrder: [1030],
      maxLiftsStd: [31],
      shuttleStd: [25],
      shiftQty: [0],
      estFinish: ['2019-12-05T00:37:41'],
      machineId: [61],
      toolRun: ['TR112041'],
      oee: [0],
      cavities: [2]
    });

    // live clock
    setInterval(() => (this.now = new Date()), 1000);

    // initial snapshot
    this.lastSaved = this.snapshot();
  }

  // ===== Save button handler =====
  saveData() {
    const current = this.snapshot();

    // deltas since last save
    const gpDelta = Math.max(0, current.goodParts - this.lastSaved.goodParts);
    const scrapDelta = Math.max(0, current.scrap - this.lastSaved.scrap);

    // 1) Production segment for good parts increase (blue)
    if (gpDelta > 0) {
      const flex = this.partsToFlex(gpDelta, current.totalOrder); // scaled
      this.addTimelineSegment('#6cb6ff', flex);
    }

    // 2) Scrap segment for scrap increase (purple)
    if (scrapDelta > 0) {
      const flex = Math.max(1, Math.round(scrapDelta / 20)); // 1 flex per ~20 scrap
      this.addTimelineSegment('#a855f7', flex);
    }

    // 3) Downtime segment (yellow=break, red=breakdown/other)
    if (current.downtime && current.downtime.toString().trim() !== '0') {
      const isBreakdown = /breakdown/i.test(current.downtime);
      const color = isBreakdown ? '#e34234' : '#facc15';
      this.addTimelineSegment(color, 2);
    }

    // 4) If only performance changed (no gp/scrap/downtime), show green intensity
    const perfChangedOnly =
      gpDelta === 0 &&
      scrapDelta === 0 &&
      (!current.downtime || current.downtime === '0') &&
      current.performance !== this.lastSaved.performance;

    if (perfChangedOnly) {
      const flex = Math.max(1, Math.round(current.performance / 20)); // 0–5
      this.addTimelineSegment('#30ba40', flex);
    }

    // persist your "save" locally (you can swap for API later)
    // localStorage.setItem('operatorForm', JSON.stringify(this.form.value));

    this.lastSaved = current;
    alert('Data saved & timeline updated ✅');
  }

  // ===== Helpers =====
  private snapshot(): Snapshot {
    const v = this.form.value;
    return {
      goodParts: Number(v.goodParts || 0),
      scrap: Number(v.scrap || 0),
      downtime: (v.downtime ?? '').toString(),
      performance: Number(v.performance || 0),
      totalOrder: Number(v.totalOrder || 0)
    };
  }

  private partsToFlex(delta: number, totalOrder: number): number {
    // Scale production segment relative to order size (1..10)
    if (!totalOrder || totalOrder <= 0) return Math.max(1, Math.round(delta / 50));
    const ratio = delta / totalOrder;       // 0..1
    return Math.min(10, Math.max(1, Math.round(ratio * 12)));
  }

  addTimelineSegment(color: string, flex: number) {
    this.timeline.push({ color, flex });
  }

  // existing actions (unchanged logic)
  endOfShift() {
    if (confirm('End of shift? This will clear all values.')) {
      this.form.reset();
      this.timeline = [];
      this.lastSaved = this.snapshot();
    }
  }

  emptyLift() {
    this.addTimelineSegment('#9ca3af', 2); // grey
    alert('Empty Lift executed.');
  }

  takeBreak() {
    this.form.patchValue({ downtime: 'On Break' });
    this.addTimelineSegment('#facc15', 2); // yellow
    alert('Break started.');
  }

  recordScrap() {
    const qty = prompt('Enter scrap quantity:');
    if (qty !== null && !isNaN(Number(qty))) {
      this.form.patchValue({ scrap: Number(qty) });
      this.addTimelineSegment('#a855f7', 2); // purple
    }
  }

  calculateOEE() {
    const gp = Number(this.form.value.goodParts || 0);
    const total = Number(this.form.value.totalOrder || 0);
    const perf = total ? ((gp / total) * 100).toFixed(2) : '0';
    this.form.patchValue({ oee: Number(perf) });
    alert(`OEE Calculated: ${perf}%`);
  }

  breakdown() {
    this.form.patchValue({ downtime: 'Machine Breakdown', performance: 0 });
    this.addTimelineSegment('#e34234', 3); // red
    alert('Breakdown recorded.');
  }

  recordProduction() {
    this.addTimelineSegment('#6cb6ff', 5); // blue
  }
}
