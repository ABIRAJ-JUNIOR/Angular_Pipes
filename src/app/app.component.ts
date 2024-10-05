import { CommonModule} from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitlecasePipe } from './pipes/titlecase.pipe';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,TitlecasePipe,SearchFilterPipe],
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

  people:string[] = ["Abiraj","Sibiraj","Kabiksha","Vijayanathan","Uthayarani"];

}
