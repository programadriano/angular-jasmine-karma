import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public question(year: string): boolean {
    return this.validateAge(year);;
  }

  validateAge(date: string) {
    var birthday = date.split('/');
    let day = Number(birthday[1]);
    let month = Number(birthday[0]);
    let year = Number(birthday[2]);
    return new Date(year + 18, month - 1, day) <= new Date();
  }

}
