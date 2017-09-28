import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  items =['О нас', 'Наши семьи','Отчёты','Контакты', 'Спрашивайте', 'Как помочь'];
  constructor() {
  }

  ngOnInit() {
  }
  count: number=0;
  increase() : void {
    this.count++;
    console.log('OK')
  }
  visibility: boolean = true;
  toggle(){
    this.visibility=!this.visibility;
  }

}
