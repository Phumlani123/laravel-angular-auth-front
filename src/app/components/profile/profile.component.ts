import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/Services/jarwis.service';
import {Client} from 'src/app/client.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  data: any;



  constructor(private Jarwis: JarwisService) { }

  ngOnInit() {

   this.Jarwis.getClients()
      .subscribe(
        
        (data)=>{
            console.log(data);
            this.data = data;
        }
      );
  }



       
       

}
