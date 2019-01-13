import { Component, OnInit } from '@angular/core';
import { IOperation, IOperationCategory } from '../models/money-manager.models';
import { MoneyManagerService } from '../services/money-manager.service';

@Component({
  selector: 'app-work-place',
  templateUrl: './work-place.component.html',
  styleUrls: ['./work-place.component.scss'],
  providers: [MoneyManagerService]
})
export class WorkPlaceComponent implements OnInit {

  categories: IOperationCategory[] = [];
  operations: IOperation[] = [];

  constructor(private _moneyManagerService: MoneyManagerService) { }

  ngOnInit() {
    this.getCategories();
    this.getOperations();
  }

  getCategories() {
    this._moneyManagerService.getOperationCategories()
      .subscribe((res) => {
        this.categories = res;
      }, (e) => {
        console.log(e);
      });
  }

  getOperations() {
    this._moneyManagerService.getOperations()
      .subscribe(res => {
        console.log(res);
        this.operations = res;
      }, err => {
        console.log(err);
      });
  }

  getCategory(catId: string): IOperationCategory {
    return this.categories.find((c) => c.id === catId);
  }

}
