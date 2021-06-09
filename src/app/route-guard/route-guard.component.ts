import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-route-guard',
  templateUrl: './route-guard.component.html',
  styleUrls: ['./route-guard.component.scss']
})
export class RouteGuardComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  test() {
    // 第一種方式（較推薦）
    this.route.queryParams.subscribe((queryParams) => {
      console.log(queryParams['id']);
    });

// 第二種方式console.log(this.route.snapshot.queryParams['id']);
this.router.navigate(['nest'], {queryParams:{
  id: 101
}})
// this.router.navigate(['nest',{id:"454"}], { relativeTo: this.route });
  }
}
