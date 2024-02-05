import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
@Injectable({
  providedIn: 'root',
})
export class FormHelperService {
  constructor() {}
  SubFG: any;
  autofillForm(
    storedData: any,
    formGroup: FormGroup,
    formArrayStrs: Array<any>,
  ) {
    console.log({
      storedData,
      formGroup,
      formArrayStrs,
    });
    if (!storedData) return;

    if (storedData) {
      formGroup.patchValue(storedData);
      let local_SubFG: any = this.SubFG;
      for (let fa_fg of formArrayStrs) {
        var faVal = this.deepValue(storedData, fa_fg.path);
        if (faVal)
          for (let value of faVal) {
            var fg;
            if (fa_fg.fg) {
              fg = local_SubFG[fa_fg.fg]();
              fg.patchValue(value);
            } else {
              fg = new FormControl();
              fg.setValue(value);
            }

            this.deepValueFormArray(formGroup, fa_fg.path).push(fg);
            if (fa_fg.formArrayStrs) {
              this.autofillForm(value, fg, fa_fg.formArrayStrs);
            }
          }
      }
    }
  }

  deepValue(obj: any, path: string) {
    var objCopy = JSON.parse(JSON.stringify(obj));
    var paths = path.split('.');
    var len = paths.length;
    for (var i = 0; i < len; i++) {
      if (!objCopy[paths[i]]) return null;
      objCopy = objCopy[paths[i]];
    }
    return objCopy;
  }

  deepValueFormArray(fg: FormGroup, path: string) {
    var paths = path.split('.');
    var len = paths.length - 1;
    for (var i = 0; i < len; i++) {
      fg = fg.get(paths[i]) as FormGroup;
    }
    var fa = fg.get(paths[len]) as FormArray;
    fa.clear();
    return fa;
  }
}
