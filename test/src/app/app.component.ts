import { CommonModule } from '@angular/common';
import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ParentComponent } from './parent/parent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,ParentComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnChanges {

  color: number = 1; // Assuming this is not meant to be a data-bound property

  ngOnChanges(changes: SimpleChanges): void {
    // This logic would only be relevant if 'color' is an @Input() and receives data
    if (changes['color']) {
      console.log('User data changed:', changes['color'].currentValue);
    }
  }
}
