export interface ILophoc {
  idlop?: number;
  tenlop?: string;
  chunhiem?: string;
}

export class Lophoc implements ILophoc {
  constructor(
    public idlop?: number,
    public tenlop?: string,
    public chunhiem?: string,
  ) {
  }
}
