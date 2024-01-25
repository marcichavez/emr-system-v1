import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { NavRouterlink } from 'src/app/core/interfaces/NavRouterLink.interface';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent implements OnInit {
  @Input() drawer!: MatDrawer;
  @Output() urlChange: EventEmitter<NavRouterlink> = new EventEmitter();
  navRouterLinks: Array<NavRouterlink> = [
    {
      name: 'Masterlist',
      url: 'patients-masterlist',
      icon: 'list_alt',
    },
  ];
  constructor(private router: Router) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        var endUrl = router.url.split('/')[2];
        var navRouterLink = this.navRouterLinks.find((o) => o.url === endUrl);
        this.urlChange.emit(navRouterLink);
      }
    });
  }

  ngOnInit(): void {}
}
