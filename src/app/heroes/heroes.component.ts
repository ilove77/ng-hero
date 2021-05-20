import { MessageService } from './../message.service';
import { Hero } from './interface/heroes.interface';
import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
// import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {

  heroes: Hero[] = []
  
  // 讓建構函式保持簡單，只做最小化的初始化操作，比如把建構函式的引數賦值給屬性。 建構函式不應該做任何事。 它當然不應該呼叫某個函式來向遠端服務（比如真實的資料服務）發起 HTTP 請求。
  constructor(private heroService: HeroService,private messageService:MessageService) { }

  ngOnInit() {
    this.getHeroes();
  }
  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }

//   Observable.subscribe() 是關鍵的差異點。

// 上一個版本把英雄的陣列賦值給了該元件的 heroes 屬性。 這種賦值是同步的，這裡包含的假設是伺服器能立即返回英雄陣列或者瀏覽器能在等待伺服器響應時凍結介面。

// 當 HeroService 真的向遠端伺服器發起請求時，這種方式就行不通了。

// 新的版本等待 Observable 發出這個英雄陣列，這可能立即發生，也可能會在幾分鐘之後。 然後，subscribe() 方法把這個英雄陣列傳給這個回呼(Callback)函式，該函式把英雄陣列賦值給元件的 heroes 屬性。

// 使用這種非同步方式，當 HeroService 從遠端伺服器獲取英雄資料時，就可以工作了。
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}
