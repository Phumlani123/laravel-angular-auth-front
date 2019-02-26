import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/Services/jarwis.service';
import { SnotifyService } from 'ng-snotify';


@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent implements OnInit {

  public form = {
    name: null
  };

  public error : [];

  constructor( private Jarwis: JarwisService,
    private notify: SnotifyService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.Jarwis.addClient(this.form.name)
      .subscribe(
        
        data => this.handleResponse(data),
      error => this.notify.error(error.error.error)
      );
    
  }

  handleResponse(res){

    this.notify.success('Client created!!', res.data,{timeout:0})

    console.log(res)
    
  }

}


