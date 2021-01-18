import { FormService } from 'projects/admin-component/src/lib/form/form.service';
import { Component, Output, EventEmitter, Input } from "@angular/core";

@Component({
  selector: "app-button",
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {

  @Input()
  processingLabel = "Processing...";

  @Input()
  disabled: boolean = false;

  @Input()
  immedated: boolean | null;

  @Input()
  style: string | null;

  @Output()
  onClick = new EventEmitter();

  timeClick: boolean = false;

  constructor(
    protected formService: FormService
  ) { }

  click(event) {
    this.timeClick = true
    this.onClick.emit({ "event": "click" });
    setTimeout(() => {
      this.timeClick = false
    }, 1000);
  }

  get submitted() {
    return (this.formService.form.submitted && this.timeClick);
  }
}