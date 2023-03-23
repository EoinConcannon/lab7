import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connaught-page',
  templateUrl: './connaught-page.page.html',
  styleUrls: ['./connaught-page.page.scss'],
})
export class ConnaughtPagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  counties: string[] = ["Galway","Mayo","Roscommon","Sligo","Leithrim"];

}
