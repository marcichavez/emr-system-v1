export class Column {
  constructor(public columnDef: string, public header: string) {}
  cell(element: any) {
    return element.position;
  }
}
