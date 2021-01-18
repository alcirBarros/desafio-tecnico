import { Component, Input, Output } from "@angular/core";
import { uuid } from '../util/uuid.generator';

@Component({
  selector: "app-textarea",
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent {

  @Input()
  id: string = uuid();

  @Input()
  @Output()
  value:any;

  onCommentChange() {
    console.log("onCommentChange");
  } 


  get inputTextAreaValue() {
    return JSON.stringify(this.value, null, 2);
  }

  set inputTextAreaValue(v) {
    try {
      this.value = JSON.parse(v);
    } catch (e) {
      console.log(e);
    }
  }

}