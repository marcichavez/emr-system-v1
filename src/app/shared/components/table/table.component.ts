import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { Column } from 'src/app/core/classes/Column.class';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() dataSource: Array<any> = [];
  @Input() columns: Array<Column> = [];
  @Input() totalRecordCount: number = 0;
  @Output() page: EventEmitter<PageEvent> = new EventEmitter();
  @Output() sort: EventEmitter<Sort> = new EventEmitter();
  @Output() row: EventEmitter<any> = new EventEmitter();

  displayedColumns: any;
  constructor() {}

  ngOnInit(): void {
    this.displayedColumns = this.columns.map((c) => c.columnDef);
  }

  pageChange(page: PageEvent) {
    this.page.emit(page);
  }

  sortChange(sort: Sort) {
    this.sort.emit(sort);
  }

  rowClick(row: any) {
    this.row.emit(row);
  }
}
