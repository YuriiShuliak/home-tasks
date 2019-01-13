import { Component, Input, OnInit } from '@angular/core';
import { IOperation, IOperationCategory, OperationType } from '../models/money-manager.models';
import { MoneyManagerService } from '../services/money-manager.service';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss'],
  providers: [MoneyManagerService]
})
export class InputsComponent implements OnInit {

  currentType: OperationType = OperationType.income;

  private _categories: IOperationCategory[] = [];
  private _operations: IOperation[] = [];

  operation: IOperation = {
    type: this.currentType,
    catId: '0',
    sum: 0,
    descr: ''
  };
  @Input()
  set operations(operations: IOperation[]) {
    this._operations = operations;
  }

  @Input()
  set categories(categories: IOperationCategory[]) {
    this._categories = categories;
  }

  get categories(): IOperationCategory[] {
    return this._categories.filter(c => c.type === this.currentType);
  }

  constructor(
    private _mms: MoneyManagerService
  ) { }


  ngOnInit() {
  }

  toggleType() {
    this.currentType === OperationType.consumption ?
      this.currentType = OperationType.income :
      this.currentType = OperationType.consumption;
    this.operation.type = this.currentType;
  }

  addOperation() {
    this._mms.addOperation(this.operation)
      .subscribe(res => {
        this._operations.push(res);
      });
  }
}
