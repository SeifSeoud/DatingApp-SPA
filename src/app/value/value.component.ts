import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { error } from 'console';

@Component({
  selector: 'app-value',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css'],
})
export class ValueComponent {
  values: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getValues();
  }
  getValues() {
    this.http.get('https://localhost:7071/api/values').subscribe(
      (response) => {
        this.values = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
