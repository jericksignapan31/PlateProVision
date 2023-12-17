import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
export interface PeriodicElement {
 
  img:string;
  email:string;
  name: string;
  title: string;
  status: string;
  position: string;
  action: string;


}

const ELEMENT_DATA: PeriodicElement[] = [
  {img: '/assets/sidebar/profile.png', email: 'admin1@example.com', name: 'John Doe', title: 'HR', status: 'Active', position: 'Senior Developer', action: 'Edit'},
  {img: '/assets/sidebar/profile.png', email: 'admin2@example.com', name: 'Jane Smith', title: 'UI/UX Designer', status: 'Active', position: 'Lead Designer', action: 'Edit'},
  {img: '/assets/sidebar/profile.png', email: 'admin3@example.com', name: 'Michael Johnson', title: 'Database Administrator', status: 'Active', position: 'Database Manager', action: 'Edit'},
  {img: '/assets/sidebar/profile.png', email: 'admin4@example.com', name: 'Olivia Davis', title: 'System Analyst', status: 'Active', position: 'Systems Analyst', action: 'Edit'},
  {img: '/assets/sidebar/profile.png', email: 'admin5@example.com', name: 'Daniel Turner', title: 'Network Administrator', status: 'Active', position: 'Network Admin Specialist', action: 'Edit'},
];


@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.scss']
})
export class AdminsComponent implements AfterViewInit {

    @Input() active: boolean = true;


 displayedColumns: string[] = ['name', 'title', 'status', 'position','action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

   @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



  
}
