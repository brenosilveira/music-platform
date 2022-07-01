import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Output()
  onSearch: EventEmitter<string> = new EventEmitter()

  searchIcon = faMagnifyingGlass
  closeIcon = faXmark

  control = new FormControl('');


  constructor() { }

  ngOnInit(): void {
  }

  get searchText() {
    return this.control.value
  }

  clearText() {
    this.control.reset()
  }

  search() {
    if(this.searchText) {
      this.onSearch.emit(this.searchText)
    }
  }

}
