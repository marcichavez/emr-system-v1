import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-navigation',
  templateUrl: './tab-navigation.component.html',
  styleUrls: ['./tab-navigation.component.scss'],
})
export class TabNavigationComponent implements OnInit {
  test: any = [];
  constructor() {}

  ngOnInit(): void {
    for (let i = 0; i < 20; i++) {
      this.test.push('Clinic Details');
    }
  }
}
