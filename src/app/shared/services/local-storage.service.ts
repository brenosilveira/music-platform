import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  save(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  load(key: string) {
    const data = localStorage.getItem(key)
    return data ? JSON.parse(data) : null
  }
}
