import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-nest-http',
  templateUrl: './nest-http.component.html',
  styleUrls: ['./nest-http.component.scss']
})
export class NestHttpComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    
  }
  
  test() {
    this.http.post('/api/cats',{name:"yizhi",age:456}).subscribe(data => {
      console.log(data)
    })
  }
}
