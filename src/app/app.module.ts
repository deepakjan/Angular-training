import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CourseService } from './course.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirstComponentComponent } from './first-component/first-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LikeComponent } from './like/like.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    LikeComponent
  ],
  imports: [
 
  BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,FormsModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
