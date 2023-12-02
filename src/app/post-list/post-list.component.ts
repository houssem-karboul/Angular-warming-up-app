import { Component, Input } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';
// Child component.
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  @Input() childData: string="Hello from child";
  @Output() messageEmetter = new EventEmitter<string>();
  childMessage : string = "That's child who's sharing data to parent throw @ViewChild"
  childMessageUsingEventEmetter : string = "That's child who's sharing data to parent throw EventEmetter "
  i3Value : string="";
  sendMessage (){
    console.log("clicked");
    this.messageEmetter.emit(this.childMessageUsingEventEmetter);
  }
  onKeyDown($event: any){
    console.log($event);
    }
    
  onKeyUp($value: any){
    console.log($value);
  }
  onKeyUpI3($event: any){
    console.log(this.i3Value);
  }
}
