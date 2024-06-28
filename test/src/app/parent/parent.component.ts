import { Component, DoCheck, Input, OnDestroy, OnInit, Pipe, PipeTransform } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { MyCustomPipePipe } from '../my-custom-pipe.pipe';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent,CommonModule,FormsModule,MyCustomPipePipe],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})

export class ParentComponent {
  searchTerm = '';
  data = ['apple', 'banana', 'orange', 'grape', 'pineapple'];
  filteredData: string[] = []; // Initialize to empty

  search() {
    this.filteredData = this.searchTerm
      ? this.data.filter(item => item.toLowerCase().includes(this.searchTerm.toLowerCase()))
      : this.data; // Return entire data if search term is empty
  }
  }









  
