import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';


@Injectable({
  providedIn: 'root'
})
export class BackNavGuard implements CanDeactivate<EmployeeDetailComponent> {
  canDeactivate(component: EmployeeDetailComponent): boolean {
    if (component.isDirty()) {
      return confirm("Yakin ingin kembali?");
    }
    return true;
  }
}
