import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {combineLatestWith, Observable, of, switchMap} from "rxjs";
import {ProductItemModel, JsonResponseModel, LocalStorageModel} from "../../core/models";
import {mapProductFromJson} from "../utils/mapStickersFromJson";
import {StateService} from "../../core/services/state.service";


@Injectable()
export class StickersService {
  constructor(
    private readonly http: HttpClient,
    private readonly state: StateService
  ) {}

  public getStickers(): Observable<ProductItemModel[]> {
    return this.http.get<JsonResponseModel[]>('/getStickers').pipe(
      combineLatestWith(this.state.getLocalStorage()),
      switchMap(([response, state]: [JsonResponseModel[], LocalStorageModel]) => {
        const cartItems: string[] = state.cart || [];
        const favoriteItems: string[] = state.favorite || [];
        return of(mapProductFromJson(response, cartItems, favoriteItems))
      })
    )
  }
}
