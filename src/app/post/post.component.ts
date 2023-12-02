import { Component, OnInit,AfterViewInit,ViewChild } from '@angular/core';
import { PostListComponent } from '../post-list/post-list.component';
// Parent component
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit ,AfterViewInit{
  parentData!: string;
  @ViewChild(PostListComponent) childComponent !: PostListComponent;
  childMessagefromViewChild !:string;
  childMessagefromEventEmitter :string="";
  imgUrlForPropretyBidingTest :string="https://pa1.aminoapps.com/6463/b9b9e81cf6f64457a1655d164071a58211c9d7dd_128.gif";
  testingClassBidingAttribute : boolean =true;

  ngAfterViewInit(): void {
    this.childMessagefromViewChild=this.childComponent.childMessage;
  }
  // This method will be called after the component's data-bound properties
  // have been initialized.
  ngOnInit(): void {
    this.parentData = 'That is the parent component who is passing data throw @Input decorator!';
    
  }
  receiveMessage($event: any){
   console.log($event);
   this.childMessagefromEventEmitter=$event;
   this.testingClassBidingAttribute= !this.testingClassBidingAttribute;
  }
}