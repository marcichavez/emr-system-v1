import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { STATUS } from '@core/constants/STATUS.constant';
import { TableResponse } from '@core/interfaces/TableResponse.interface';
import { User } from '@core/interfaces/models/User.interface';
import { pairwise } from 'rxjs/operators';
import { TENANT_ABLE_CONFIG } from './tenants-table.config';

export interface TableConfig {
  header: string;
  path: string;
}

@Component({
  selector: 'app-tenants-table',
  templateUrl: './tenants-table.component.html',
  styleUrls: ['./tenants-table.component.scss'],
})
export class TenantsTableComponent implements OnChanges {
  @Input()
  tableResponse: TableResponse<User> | null = null;
  @Input()
  query: Record<string, string | number> = {};
  @Input()
  isLoading: boolean = true;

  @Output()
  tableChange: EventEmitter<Record<string, string | number>> = new EventEmitter<
    Record<string, string | number>
  >();

  @Output()
  onTenantClick: EventEmitter<any> = new EventEmitter<any>();

  tableConfig: TableConfig[] = TENANT_ABLE_CONFIG;

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

  loadingRowNumber = new Array(7).fill(0);

  constructor(private formBuilder: FormBuilder) {
    this.filterForm = this.formBuilder.group({
      keyword: [''],
      searchType: [this.filterFields[0].value],
    });

    this.filterForm
      .get('searchType')
      ?.valueChanges.pipe(pairwise())
      .subscribe(([oldValue, newValue]) => {
        if (oldValue === 'status') {
          this.filterForm.get('keyword')?.reset('');
        } else if (newValue === 'status') {
          this.filterForm.get('keyword')?.reset('Active');
        }
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.isLoading) {
      if (changes.isLoading.currentValue) {
        this.filterForm.disable();
      } else {
        this.filterForm.enable();
      }
    }
  }

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
