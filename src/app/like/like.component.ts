import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
@Input() circleClick:boolean;
onCircleClick(){

  this.circleClick = !this.circleClick;
}

  constructor() { }

  ngOnInit(): void {
  }

}
