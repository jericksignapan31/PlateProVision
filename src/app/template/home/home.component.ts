import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import {  BreakpointObserver, Breakpoints } from "@angular/cdk/layout";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
shouldHideToolbar: boolean = true;
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  toolbar!: MatToolbar
  public isMobileLayout = false;

constructor( 
    private breakpointObserver: BreakpointObserver,
    private cdr: ChangeDetectorRef,){}


  ngOnInit(): void {
   
  }

   ngAfterViewInit() {
    this.breakpointObserver.observe(["(max-width: 912px)"]).subscribe((res) => {
      if (res.matches) {
        this.isMobileLayout = true;
        this.sidenav.mode = "over";
        this.sidenav.close();

      } else {
        this.isMobileLayout = false;
        this.sidenav.mode = "side";
        this.sidenav.open();
      }
    });
    this.cdr.detectChanges();
    }


}
