import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { SharedModule } from '../../shared/shared.module';
import { ChatComponent } from './chat.component';

export const routes: Routes = [
  { path: '', component: ChatComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    NgScrollbarModule,
    SharedModule
  ],
  declarations: [
    ChatComponent
  ]
})
export class ChatModule { }