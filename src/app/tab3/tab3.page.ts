import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ChatService } from '../chat.service';
import { User } from '../user';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  userId: string = '';
  userList: any = [];
  constructor(private chatService: ChatService, private route: ActivatedRoute) { }
  ngOnInit() {
    this.userId = this.route.snapshot.params.id;
    this.chatService.connectToChatkit(this.userId);
    this.chatService.getUsers().subscribe((users) => {
      this.userList = users;
    });
  }
  isOnline(user) {
    return this.chatService.isUserOnline(user);
  }
}
