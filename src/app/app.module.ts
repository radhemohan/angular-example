import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommunicationComponent } from './communication/communication.component';
import { ParentToChildComponent } from './communication/parent-to-child/parent-to-child.component';
import { ChildToParentComponent } from './communication/child-to-parent/child-to-parent.component';
import { MessagingComponent } from './communication/messaging/messaging.component';

@NgModule({
  declarations: [
    AppComponent,
    CommunicationComponent,
    ParentToChildComponent,
    ChildToParentComponent,
    MessagingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
