import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'abc-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('navigation created');
  }

}
