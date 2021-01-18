import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NgxToastrServiceService {

  constructor(private toastrService: ToastrService) {
  }
  success(text: string, toastr?: () => void) {
    this.toastrService.success(text, null, { timeOut: 3000 }).onTap.pipe(take(1)).subscribe(() => toastr());
  }

  error(text: string, toastr?: () => void) {
    this.toastrService.error(text, null, { timeOut: 3000 }).onTap.pipe(take(1)).subscribe(() => toastr());
  }

  info(text: string, toastr?: () => void) {
    this.toastrService.info(text, null, { timeOut: 3000 }).onTap.pipe(take(1)).subscribe(() => toastr());
  }

  warning(text: string, toastr?: () => void) {
    this.toastrService.warning(text, null, { timeOut: 3000 }).onTap.pipe(take(1)).subscribe(() => toastr());
  }
}
