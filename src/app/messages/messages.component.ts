import { MessageService } from './../message.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  // 這個 messageService 屬性必須是公共屬性，因為你將會在範本中繫結到它。
  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }
  
}
