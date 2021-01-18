import { Component, OnInit } from '@angular/core';
import { LayoutState } from 'projects/admin-template/src/lib/layout/layout.state';
import { LayoutStore } from 'projects/admin-template/src/lib/layout/layout.store';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  layoutState: LayoutState;

  constructor(private layoutStore: LayoutStore) { }


  ngOnInit(): void {
    this.layoutStore.layoutState.subscribe(layoutState => {
      this.layoutState = layoutState;
    });
  }

}
