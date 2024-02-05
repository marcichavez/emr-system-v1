export interface SoapParameters {
  sex: string;
  age: { years: number; months: number; days: number };
  encounter: {
    payor: string;
    atc: string;
  };
}
