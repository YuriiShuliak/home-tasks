export enum OperationType {
  income = 'income',
  consumption = 'consumption'
}

export interface IOperation {
  id?: string;
  catId: string;
  type: OperationType;
  sum: number;
  descr: string;
}

export interface IOperationCategory {
  id: string;
  name: string;
  type: OperationType;
}
