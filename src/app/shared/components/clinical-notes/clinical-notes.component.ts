import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-clinical-notes',
  templateUrl: './clinical-notes.component.html',
  styleUrls: ['./clinical-notes.component.scss'],
})
export class ClinicalNotesComponent implements OnInit {
  @Input() soap: any;
  constructor() {}

  ngOnInit(): void {}
}
