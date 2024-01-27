import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PhilhealtApiService } from 'src/app/core/api/philhealth-api/philhealt-api.service';

@Component({
  selector: 'app-s1-check-masterlist',
  templateUrl: './s1-check-masterlist.component.html',
  styleUrls: ['./s1-check-masterlist.component.scss'],
})
export class S1CheckMasterlistComponent implements OnInit {
  @Input() form: FormGroup = new FormGroup({});

  constructor(private phicApiService: PhilhealtApiService) {}

  ngOnInit(): void {}

  lookupMasterlist() {
    let { pin } = this.form.value;
    return this.phicApiService.getMemberDetailsByPIN(pin);
  }
}
