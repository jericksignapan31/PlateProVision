import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
export interface PeriodicElement {
  position:number;
  plateno: string;
  owner: string;
  date: string;
  timein: string;
  timeout: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, plateno: 'MH120E433', owner: 'Frime Lustre', date: 'Jun 7, 2023', timein: '12:02 AM', timeout: '05:00 PM'},
  {position: 2, plateno: 'ABC123', owner: 'John Doe', date: 'May 15, 2023', timein: '10:30 AM', timeout: '03:45 PM'},
  {position: 3, plateno: 'XYZ789', owner: 'Jane Smith', date: 'Apr 3, 2023', timein: '02:45 PM', timeout: '07:15 PM'},
  {position: 4, plateno: 'DEF456', owner: 'Bob Johnson', date: 'Jul 22, 2023', timein: '09:00 AM', timeout: '02:30 PM'},
  {position: 5, plateno: 'GHI789', owner: 'Alice Brown', date: 'Aug 5, 2023', timein: '01:15 PM', timeout: '06:45 PM'},
  {position: 6, plateno: 'JKL321', owner: 'Charlie White', date: 'Sep 14, 2023', timein: '11:20 AM', timeout: '04:40 PM'},
  {position: 7, plateno: 'MNO987', owner: 'Eve Green', date: 'Nov 9, 2023', timein: '03:00 PM', timeout: '08:30 PM'},
  {position: 8, plateno: 'PQR654', owner: 'David Black', date: 'Dec 18, 2023', timein: '08:45 AM', timeout: '01:50 PM'},
  {position: 9, plateno: 'STU321', owner: 'Grace Taylor', date: 'Jan 25, 2023', timein: '05:10 PM', timeout: '10:20 PM'},
  {position: 10, plateno: 'VWX876', owner: 'Frank Miller', date: 'Mar 8, 2023', timein: '12:30 PM', timeout: '05:45 PM'},
  {position: 11, plateno: 'YZA234', owner: 'Helen Turner', date: 'Feb 11, 2023', timein: '10:00 AM', timeout: '03:15 PM'},
  {position: 12, plateno: 'BCD567', owner: 'Samuel Clark', date: 'Oct 7, 2023', timein: '02:20 PM', timeout: '07:30 PM'},
  {position: 13, plateno: 'EFG890', owner: 'Olivia Davis', date: 'Jun 1, 2023', timein: '09:40 AM', timeout: '02:55 PM'},
  {position: 14, plateno: 'HIJ123', owner: 'Ryan Lee', date: 'Apr 19, 2023', timein: '01:50 PM', timeout: '06:00 PM'},
  {position: 15, plateno: 'KLM456', owner: 'Sophie Harris', date: 'Nov 28, 2023', timein: '04:15 PM', timeout: '09:25 PM'},
  {position: 16, plateno: 'NOP789', owner: 'Michael Wilson', date: 'Dec 30, 2023', timein: '11:55 AM', timeout: '05:10 PM'},
  {position: 17, plateno: 'QRS012', owner: 'Laura Allen', date: 'Aug 17, 2023', timein: '07:30 AM', timeout: '12:40 PM'},
  {position: 18, plateno: 'TUV345', owner: 'Daniel Turner', date: 'Sep 5, 2023', timein: '03:25 PM', timeout: '08:35 PM'},
  {position: 19, plateno: 'WXY678', owner: 'Emma Moore', date: 'Jan 8, 2023', timein: '06:10 PM', timeout: '11:20 PM'},
  {position: 20, plateno: 'ZAB901', owner: 'William Hall', date: 'Feb 14, 2023', timein: '08:00 AM', timeout: '01:15 PM'},
];



@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'plateno', 'owner', 'date', 'timein', 'timeout'];
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
