import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  test: any = [];
  constructor() {}

  ngOnInit(): void {
    for (let i = 0; i < 20; i++) {
      this.test.push('Clinic Details');
    }
  }
}
