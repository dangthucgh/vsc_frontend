export interface ITableCell {
  label: string;
  align: 'center' | 'left' | 'right';
  field: string;
  width?: number;
}
