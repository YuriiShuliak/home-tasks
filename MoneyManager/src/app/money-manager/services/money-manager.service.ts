import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IOperation, IOperationCategory } from '../models/money-manager.models';

@Injectable()
export class MoneyManagerService {

  constructor(private _http: HttpClient) { }

  getOperationCategories(): Observable<IOperationCategory[]> {
    return this._http.get<IOperationCategory[]>('http://localhost:3000/categories');
  }

  getOperations(): Observable<IOperation[]> {
    return this._http.get<IOperation[]>('http://localhost:3000/operations');
  }

  addOperation(newOperation: IOperation): Observable<IOperation> {
    return this._http.post<IOperation>('http://localhost:3000/operations', newOperation);
  }

}

// export interface IResponseStatus {
//   status: number;
//   message: string;
// }

// export interface IResponse<T> {
//   data: T;
//   status: IResponseStatus;
// }
