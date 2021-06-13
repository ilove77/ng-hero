import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Tour of Heroes';
  items = [1,2,3,4]
  // 第一種方法

  // @ViewChild('tests') div!:ElementRef;
  // constructor() {}
  
  // ngAfterViewInit(){
  //   console.log(this.div)
  // } 

  // 第二種方法
  // @ViewChild('tests') div!:ElementRef<HTMLElement>;
 
  // tests():void {
  //   console.log(this.div.nativeElement)
  // }
  tests(events:any):void{
    console.log(event)
  }
  
}
