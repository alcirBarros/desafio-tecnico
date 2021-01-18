import { FormService } from 'projects/admin-component/src/lib/form/form.service';
import { Component, Output, EventEmitter, Input, AfterViewInit, OnInit } from "@angular/core";

@Component({
  selector: "app-pagination",
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit, AfterViewInit  {
  
  size: number = 10;

  page; 

  @Input("page") public set value(page : any){
      if(!page) return;
      this.page = page;
      this.setPagetion();
  }
  
  @Output() public  paginationEvent : EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  ngAfterViewInit(): void {
  }

  pageNumber(pageNumber){
    debugger
    setTimeout(()=>{
        this.paginationEvent.emit({page: pageNumber, size: this.page.size} );
    });
  }

  changePage(size){
    setTimeout(()=>{
        this.paginationEvent.emit({page: this.page.number, size: size} );
    });
  }

  setPagetion(){
    setTimeout(()=>{
        let pages = new Array<number>();
        let inc =  (this.page.number - 2) <= 0 ? (4 - this.page.number) : 2;
        let dec =  (this.page.number + 2) >= this.page.totalPages ? (5 - (this.page.totalPages - this.page.number)) : 2;
        let inicio = (this.page.number - dec) <= 0 ? 0 : (this.page.number - dec);
        let fim = (this.page.number + inc) < this.page.totalPages ? (this.page.number + inc) : (this.page.totalPages - 1);
        for(let i = inicio; i<= fim; i++){
            pages.push(i);
        }
        this.page.pages = pages;
      });
  }
}