import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {Observable, of} from "rxjs";
import getStickersResponse from '../utils/get-stickers-response.json';

@Injectable()
export class GetStickersInterceptorService implements HttpInterceptor {
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.includes('getStickers')) {
      return of(new HttpResponse({status: 200, body: getStickersResponse}));
    }
    return next.handle(req);
  }
}
