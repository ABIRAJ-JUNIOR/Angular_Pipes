import { CommonModule} from '@angular/common';
import { Component, NgModule} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitlecasePipe } from './pipes/titlecase.pipe';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,TitlecasePipe,SearchFilterPipe,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  today: number = Date.now();
  price: number = 2500.5;
  obj = { name: 'John', age: 25 };
  binding: any;
  name: any;
  updateName() {
    this.obj.name = 'jane doe';
  }
  
  searchText:string = "";
  
  people:any[] = ["Abiraj","Sibiraj","Kabiksha","Vijayanathan","Uthayarani",456,54];

}
