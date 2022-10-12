import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  constructor(private api:ApiService) {

    this.fetch()
   }
  fetch=()=>{
    this.api.user().subscribe(
      (data)=>{
        this.userData=data
      }
    )
  }


  userData:any={}
  ngOnInit(): void {
  }

}
