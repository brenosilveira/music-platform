import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { ListItemComponent } from './components/list-item/list-item.component';



@NgModule({
  declarations: [
    SearchBarComponent,
    CardComponent,
    ListItemComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  exports: [
    SearchBarComponent,
    CardComponent,
    ListItemComponent
  ]
})
export class ComponentsLibraryModule { }
