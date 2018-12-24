import { ErrorHandler, Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AppErrorHandler implements ErrorHandler {

    constructor(private toastrService: ToastrService) { }

    handleError(error) {
        console.log(error);
        this.toastrService.error("Unexpected error", null, { onActivateTick: true })
    }

}