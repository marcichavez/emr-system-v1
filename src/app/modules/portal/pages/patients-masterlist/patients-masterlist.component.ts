import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PhilhealtApiService } from 'src/app/core/api/philhealth-api/philhealt-api.service';
import { Column } from 'src/app/core/classes/Column.class';
import { MASTERLIST } from 'src/app/core/mocks/data/masterlist';

@Component({
  selector: 'app-patients-masterlist',
  templateUrl: './patients-masterlist.component.html',
  styleUrls: ['./patients-masterlist.component.scss'],
})
export class PatientsMasterlistComponent implements OnInit {
  columns: Column[] = [
    {
      columnDef: 'pin',
      header: 'PIN',
      cell: (element: any) => `${element.pin}`,
    },
    {
      columnDef: 'memberPin',
      header: 'Member PIN',
      cell: (element: any) => `${element.memberPin}`,
    },
    {
      columnDef: 'sex',
      header: 'Sex',
      cell: (element: any) => `${element.sex}`,
    },
    {
      columnDef: 'lastName',
      header: 'Last Name',
      cell: (element: any) => `${element.lastName}`,
    },
    {
      columnDef: 'firstName',
      header: 'First Name',
      cell: (element: any) => `${element.firstName}`,
    },
    {
      columnDef: 'middleName',
      header: 'Middle Name',
      cell: (element: any) => `${element.middleName}`,
    },
    {
      columnDef: 'suffix',
      header: 'Suffix',
      cell: (element: any) => `${element.suffix}`,
    },
    {
      columnDef: 'dob',
      header: 'Date of Birth',
      cell: (element: any) => `${element.dob}`,
    },
    {
      columnDef: 'age',
      header: 'Age',
      cell: (element: any) => `${element.age}`,
    },
    {
      columnDef: 'mobileNo',
      header: 'Mobile Number',
      cell: (element: any) => `${element.mobileNo}`,
    },
    {
      columnDef: 'memberType',
      header: 'Member Type',
      cell: (element: any) => `${element.memberType}`,
    },
    {
      columnDef: 'memberName',
      header: 'Member Name',
      cell: (element: any) => `${element.memberName}`,
    },
    {
      columnDef: 'memberDob',
      header: 'Member Date of Birth',
      cell: (element: any) => `${element.memberDob}`,
    },
  ];

  dataSource!: any[];
  totalRecordCount = 0;
  filterForm = new FormGroup({
    keyword: new FormControl(''),
    memberType: new FormControl(''),
  });

  memberTypes = [
    { value: '', label: 'Both' },
    { value: 'Member', label: 'Member' },
    { value: 'Dependent', label: 'Dependent' },
  ];

  constructor(
    private phicApiService: PhilhealtApiService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.phicApiService.getMasterlist().subscribe((res) => {
      this.dataSource = res.records;
      this.totalRecordCount = res.total;
    });
    this.phicApiService.getLastUpdate().subscribe((res) => {
      this.lastUpdate = res.lastUpdate;
    });
  }

  lastUpdate?: Date;
  updateMasterList() {
    this.phicApiService.updateMasterlist().subscribe(
      (res) => {
        this.lastUpdate = res.lastUpdate;
        this.snackBar.open(res.message, 'Okay');
      },
      (err) => {
        alert(err.message);
      }
    );
  }

  filter(page?: PageEvent, sort?: Sort) {
    alert('Filter table');
    var { keyword, memberType } = this.filterForm.value;

    var query = {
      atlas: {
        NameAndPin: keyword,
        memberType: memberType,
      },
      page: {
        index: page?.pageIndex,
        size: page?.pageSize,
      },
      sort: {
        by: sort?.active,
        direction: sort?.direction,
      },
    };

    this.phicApiService.getMasterlist(query).subscribe((res) => {
      this.dataSource = res.records;
      this.totalRecordCount = res.total;
    });
  }

  pageChange(page: PageEvent) {
    console.log(page);
  }

  sortChange(sort: Sort) {
    console.log(sort);
  }

  rowClick(row: any) {
    console.log(row);
  }
}
