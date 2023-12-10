import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
export interface PeriodicElement {
  position:number;
  firstName: string;
  lastName: string;
  licenseNo: string;
  plateNo: string;
  carType: string;
  carColor: string;
  dateRegistered: string;


}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, firstName: 'frime', lastName: 'Lustre', licenseNo: 'abc1234xyz3', plateNo: 'MH120E433', carType: 'SUV', carColor: 'red', dateRegistered: 'June 19, 2023'},
  {position: 2, firstName: 'John', lastName: 'Doe', licenseNo: 'def5678uvw9', plateNo: 'XYZ789', carType: 'Sedan', carColor: 'blue', dateRegistered: 'July 5, 2023'},
  {position: 3, firstName: 'Jane', lastName: 'Smith', licenseNo: 'ghi9012rst4', plateNo: 'ABC123', carType: 'Hatchback', carColor: 'green', dateRegistered: 'August 15, 2023'},
  {position: 4, firstName: 'Bob', lastName: 'Johnson', licenseNo: 'jkl3456mno7', plateNo: 'PQR654', carType: 'Convertible', carColor: 'yellow', dateRegistered: 'September 28, 2023'},
  {position: 5, firstName: 'Alice', lastName: 'Brown', licenseNo: 'mno8901pqr2', plateNo: 'GHI789', carType: 'Truck', carColor: 'orange', dateRegistered: 'October 12, 2023'},
  {position: 6, firstName: 'Charlie', lastName: 'White', licenseNo: 'stu3456vwx7', plateNo: 'JKL321', carType: 'Van', carColor: 'purple', dateRegistered: 'November 8, 2023'},
  {position: 7, firstName: 'Eve', lastName: 'Green', licenseNo: 'xyz7890abc1', plateNo: 'MNO987', carType: 'Coupe', carColor: 'pink', dateRegistered: 'December 3, 2023'},
  {position: 8, firstName: 'David', lastName: 'Black', licenseNo: 'pqr2345stu6', plateNo: 'STU321', carType: 'Motorcycle', carColor: 'brown', dateRegistered: 'January 22, 2023'},
  {position: 9, firstName: 'Grace', lastName: 'Taylor', licenseNo: 'vwx6789yza0', plateNo: 'VWX876', carType: 'Electric', carColor: 'silver', dateRegistered: 'February 17, 2023'},
  {position: 10, firstName: 'Frank', lastName: 'Miller', licenseNo: 'bcd1234efg5', plateNo: 'YZA234', carType: 'Hybrid', carColor: 'gray', dateRegistered: 'March 5, 2023'},
  {position: 11, firstName: 'Helen', lastName: 'Turner', licenseNo: 'ghi5678jkl9', plateNo: 'BCD567', carType: 'Crossover', carColor: 'black', dateRegistered: 'April 9, 2023'},
  {position: 12, firstName: 'Olivia', lastName: 'Davis', licenseNo: 'mno9012pqr3', plateNo: 'EFG890', carType: 'Luxury', carColor: 'white', dateRegistered: 'May 14, 2023'},
  {position: 13, firstName: 'Ryan', lastName: 'Lee', licenseNo: 'stu4567vwx8', plateNo: 'HIJ123', carType: 'Sports', carColor: 'cyan', dateRegistered: 'July 1, 2023'},
  {position: 14, firstName: 'Sophie', lastName: 'Harris', licenseNo: 'xyz0123abc4', plateNo: 'KLM456', carType: 'Wagon', carColor: 'magenta', dateRegistered: 'August 28, 2023'},
  {position: 15, firstName: 'Michael', lastName: 'Wilson', licenseNo: 'pqr5678stu9', plateNo: 'NOP789', carType: 'Limousine', carColor: 'teal', dateRegistered: 'October 6, 2023'},
  {position: 16, firstName: 'Laura', lastName: 'Allen', licenseNo: 'uvw9012xyz3', plateNo: 'QRS012', carType: 'Minivan', carColor: 'indigo', dateRegistered: 'November 19, 2023'},
  {position: 17, firstName: 'Daniel', lastName: 'Turner', licenseNo: 'abc3456def7', plateNo: 'TUV345', carType: 'Pickup', carColor: 'violet', dateRegistered: 'December 22, 2023'},
  {position: 18, firstName: 'Emma', lastName: 'Moore', licenseNo: 'ghi6789jkl0', plateNo: 'WXY678', carType: 'Compact', carColor: 'olive', dateRegistered: 'January 9, 2023'},
  {position: 19, firstName: 'William', lastName: 'Hall', licenseNo: 'mno1234pqr5', plateNo: 'ZAB901', carType: 'Off-road', carColor: 'maroon', dateRegistered: 'February 14, 2023'},
  {position: 20, firstName: 'Sarah', lastName: 'Jones', licenseNo: 'stu5678vwx9', plateNo: 'DEF456', carType: 'SUV', carColor: 'red', dateRegistered: 'March 22, 2023'},
];

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.scss']
})
export class OwnersComponent implements AfterViewInit{

 displayedColumns: string[] = ['position', 'firstName', 'lastName', 'licenseNo', 'carType', 'carColor','dateRegistered'];
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
