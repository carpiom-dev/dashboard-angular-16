import { Component, OnInit, HostListener, ViewChild, ViewEncapsulation } from '@angular/core';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { Chat } from './chat.model';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  providers: [ ChatService ],
  encapsulation: ViewEncapsulation.None
})
export class ChatComponent implements OnInit {
  @ViewChild('sidenav') sidenav: any;
  public settings: Settings;
  public userImage = 'assets/img/users/user.jpg';
  public chats: Array<Chat>;
  public talks: Array<Chat>;
  public sidenavOpen: boolean = true;
  public currentChat: Chat;
  public newMessage: string = '';

  constructor(public appSettings:AppSettings, private chatService:ChatService) { 
    this.settings = this.appSettings.settings; 
  }

  ngOnInit() {
    this.chats = this.chatService.getChats(); 
    if(window.innerWidth <= 768){
      this.sidenavOpen = false;
    }    
  } 

  @HostListener('window:resize') onWindowResize(): void {
    (window.innerWidth <= 768) ? this.sidenavOpen = false : this.sidenavOpen = true;
  } 

  public getChat(obj: Chat): void {
    this.talks = this.chatService.getTalk();
    this.talks.length = 2;
    this.talks.push(obj);
    this.currentChat = obj;  
    this.talks.forEach(talk => {
      if (!talk.my) {
        talk.image = obj.image;
      }
    });
    if (window.innerWidth <= 768) {
      this.sidenav.close();
    }
  }

  public sendMessage(event: KeyboardEvent | MouseEvent): void {   
    const isEnterOrClick = event.which === 1 || event.which === 13;
    const isMessageEmpty = this.newMessage?.trim() === '';
  
    if (isEnterOrClick && !isMessageEmpty && this.talks) {
      const newChat = new Chat(
        'assets/img/users/user.jpg', 
        'Emilio Verdines', 
        'online', 
        this.newMessage,
        new Date(), 
        true
      );
  
      this.talks.push(newChat);
      this.newMessage = '';
  
      const chatContainer = document.querySelector('.chat-content');
      if (chatContainer) {
        setTimeout(() => {
          const nodes = chatContainer.querySelectorAll('.mat-mdc-list-item');
          const newChatTextHeight = nodes[nodes.length - 1].clientHeight;
          chatContainer.scrollTop = chatContainer.scrollHeight + newChatTextHeight;
        }); 
      }
    }
  } 

  public ngOnDestroy(){
    if(this.talks)
      this.talks.length = 2;
  }

}