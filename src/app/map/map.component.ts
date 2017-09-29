import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {


  constructor() {
  }

  ngOnInit() {
  }
  public heroes:Array<Object> = [
    {id: 1, name: 'Катерина Сухомлина', job: 'Руководитель', phone: '8-952-803-8513', email: 'tomsk.ekaterina@yandex.ru', photo: '/assets/pic/id1.jpg'},
    {id: 2, name: 'Ольга Рубцова', job: 'Куратор по закупкам и финансам', phone: '8-903-951-2399', email: '', photo: '/assets/pic/id1.jpg'},
    {id: 3, name: 'Наталья Козлова', job: 'Куратор информационного пространства', phone: '8-909-538-1412', email: '', photo: '/assets/pic/id1.jpg'},
    {id: 4, name: 'Татьяна Никифорова', job: 'Куратор проекта "Младенец - дар небес"', phone: '8-913-800-3016', email: '', photo: '/assets/pic/id1.jpg'},
    {id: 5, name: 'Аня Залецкая', job: 'Куратор проекта "Пятёрочка", координатор волонтёров', phone: '8-913-800-9800', email: '', photo: '/assets/pic/id1.jpg'},

  ];


}
