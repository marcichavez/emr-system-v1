import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { STATUS } from '@core/constants/STATUS.constant';
import { TableResponse } from '@core/interfaces/TableResponse.interface';
import { User } from '@core/interfaces/models/User.interface';

@Component({
  selector: 'app-tenants-table',
  templateUrl: './tenants-table.component.html',
  styleUrls: ['./tenants-table.component.scss'],
})
export class TenantsTableComponent implements OnInit {
  @Input()
  tableResponse: TableResponse<User> | null = null;

  @Input()
  query: Record<string, string | number> = {};

  @Output()
  tableChange: EventEmitter<Record<string, string | number>> = new EventEmitter<
    Record<string, string | number>
  >();

  @Output()
  onTenantClick: EventEmitter<any> = new EventEmitter<any>();

  filterFields = [
    {
      label: 'All',
      value: 'search',
    },
    {
      label: 'First Name',
      value: 'firstName',
    },
    {
      label: 'Last Name',
      value: 'lastName',
    },
    {
      label: 'Email',
      value: 'email',
    },
    {
      label: 'Status',
      value: 'status',
    },
  ];

  statusTypes = Object.values(STATUS);

  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'status'];

  filterForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.filterForm = this.formBuilder.group({
      keyword: [''],
      searchType: [this.filterFields[0].value],
    });

    let oldSearchType = '';
    this.filterForm.get('searchType')?.valueChanges.subscribe((value) => {
      if (oldSearchType === 'status') {
        this.filterForm.get('keyword')?.reset('');
      } else if (value === 'status') {
        this.filterForm.get('keyword')?.reset('Active');
      }
      oldSearchType = value;
    });
  }

  ngOnInit(): void {}

  onSelectTenant(tenant: User) {
    this.onTenantClick.emit(tenant);
  }

  onTableSortChange(event: Sort) {
    this.tableChange.emit({
      ...this.query,
      sort: `${event.active}:${event.direction}`,
    });
  }

  filterTable() {
    const { keyword, searchType } = this.filterForm.value;

    if (keyword) {
      this.tableChange.emit({
        [searchType]: keyword,
        perPage: this.query.perPage,
      });
    } else {
      this.tableChange.emit({
        perPage: 10,
      });
    }
  }

  onPageChange(event: PageEvent) {
    this.tableChange.emit({
      ...this.query,
      page: event.pageIndex + 1,
      perPage: event.pageSize,
    });
  }
}