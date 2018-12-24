import { HttpErrorResponse } from '@angular/common/http';
import { NotFoundError } from './not-found-error';
import { BadInput } from './bad-input';
import { AppError } from './app-error';
import { throwError } from 'rxjs';

export class HttpErrorHandler {

    public static handleError(error: HttpErrorResponse) {
        if (error.status === 404)
            return throwError(new NotFoundError())
        else if (error.status === 400)
            return throwError(new BadInput(error));
        else
            return throwError(new AppError(error));
    }
}