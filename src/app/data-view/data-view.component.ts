import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.css']
})
export class DataViewComponent implements OnInit {

  constructor() { 
    this.image$ = this.loadImage(this.image);
  }
  image = '';
  image$ :Promise<any>;
  imgLoad:any

  ngOnInit(): void {
  }
  loadData():void{
    this.image = `http://127.0.0.1:5000/graph?time=${Date.now()}`;
    this.image$ = this.loadImage(this.image);
  }

  loadImage(src:string) {
    return new Promise((resolve, reject) => {
      resolve(src);
    });
  }

}
