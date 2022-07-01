import { Subject, takeUntil } from 'rxjs';
import { HistoryService } from './../../shared/services/history.service';
import { Component, OnInit } from '@angular/core';
import { faXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  closeIcon = faXmark;
  searchIcon = faMagnifyingGlass;

  history: string[] = [];
  private unsubscribe = new Subject()

  constructor(private historyService: HistoryService) {
    this.historyService.history$
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(history => {
        this.history = [...history].reverse()
        console.log('history')
      })
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.unsubscribe.next(true)
    this.unsubscribe.complete()
  }

  delete(term: string) {
    this.historyService.removeTerm(term)
  }
}
