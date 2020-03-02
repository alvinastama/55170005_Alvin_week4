import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EmployeeService } from './employee.service';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeResolverService implements Resolve<any> {
  constructor(private es: EmployeeService) {}

  resolve(): Observable<Employee[]> {
    return this.es.getEmployees();
  }
}
