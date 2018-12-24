import { HttpErrorResponse } from '@angular/common/http';
import { NotFoundError } from './not-found-error';
import { BadInput } from './bad-input';
import { AppError } from './app-error';

import { ToastrService } from 'ngx-toastr';

export class SpecificErrorHandler {

    constructor(private toastrService: ToastrService) { }

    public handleError(error: AppError) {
        if (error instanceof NotFoundError) {
            this.toastrService.error("Not Found", null, { onActivateTick: true, closeButton: true, positionClass: 'toast-bottom-right' })
        }
        else if (error instanceof BadInput) {
            let errorText = "";

            for (var fieldName in error.originalError.error) {
                if (error.originalError.error.hasOwnProperty(fieldName)) {
                    errorText = errorText + error.originalError.error[fieldName] + "\r\n";
                }
            }

            this.toastrService.error(errorText, "Error message", { onActivateTick: true, positionClass: 'toast-top-full-width' })
        }
        else {
            throw error;
        }
    }
}