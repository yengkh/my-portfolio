import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { NAV_BAR_TYPE } from '../../types/nav-bar.type';
import { NAB_BAR_DATA } from '../../data/nav-bar.data';

@Injectable({
  providedIn: 'root',
})
export class NavBarService {
  private _currentNavIndex = new BehaviorSubject<number>(0);
  public currentNavIndex$ = this._currentNavIndex.asObservable();
  constructor() {}

  getNavBarItem(): Observable<NAV_BAR_TYPE[]> {
    return of(NAB_BAR_DATA);
  }

  setCurrentIndex(index: number): void {
    if (index >= 0 && index < NAB_BAR_DATA.length) {
      this._currentNavIndex.next(index);
    } else {
      console.log('Invalid nav index : ', index);
    }
  }

  getActiveIndex(): number {
    return this._currentNavIndex.value;
  }
}
