import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-s4-summary',
  templateUrl: './s4-summary.component.html',
  styleUrls: ['./s4-summary.component.scss'],
})
export class S4SummaryComponent implements OnInit {
  @Input() summary!: any;

  constructor() {}

  ngOnInit(): void {}
}
