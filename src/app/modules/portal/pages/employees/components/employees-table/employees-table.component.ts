import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { STATUS } from '@core/constants/STATUS.constant';
import { TableResponse } from '@core/interfaces/TableResponse.interface';
import { User } from '@core/interfaces/models/User.interface';
import { pairwise } from 'rxjs/operators';

@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.scss'],
})
export class EmployeesTableComponent {
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
  onEmployeeClick: EventEmitter<any> = new EventEmitter<any>();

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

  filterForm: FormGroup;

  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'status'];

  statusTypes = Object.values(STATUS);

  loadingRowNumber = new Array(7).fill(0);

  constructor(private formBuilder: FormBuilder) {
    console.log(this.tableResponse);
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

  onSelectEmployee(employee: User) {
    this.onEmployeeClick.emit(employee);
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
