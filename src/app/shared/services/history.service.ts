import { LocalStorageService } from './local-storage.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  private readonly _history = new BehaviorSubject<string[]>([])
  readonly history$ = this._history.asObservable()

  private storageKey = 'searchHistory'

  constructor(private localStorageService: LocalStorageService) {
    this.history = this.localStorageService.load(this.storageKey) || []
  }

  private get history(): string[] {
    return this._history.getValue()
  }

  private set history(value: string[]) {
    this._history.next(value)
    this.localStorageService.save(this.storageKey, value)
  }

  addTerm(term: string) {
    const index = this.history.indexOf(term)
     const initialHistory = [...this.history]

    if(index > -1) {
      initialHistory.splice(index, 1)
    }

    initialHistory.push(term)
    this.history = initialHistory
  }

  removeTerm(term: string) {
    const index = this.history.indexOf(term)
    const initialHistory = this.history

    initialHistory.splice(index, 1)
    this.history = initialHistory
  }
}
