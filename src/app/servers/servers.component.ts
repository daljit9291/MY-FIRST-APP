import { Component, OnInit, ɵConsole } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector:'.app-servers',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer= false;
  serverCreationStatus = 'No Server Was Created!';
  serverName = "test";
  username = "";
  serverCreated = false;
  constructor() { 
    setTimeout(() => {
      this.allowNewServer=true 
    },2000);
  }

  ngOnInit(): void {
  } 
  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus ='Server Was Created !'+this.serverName;
  }
  onUpdateServerName(event: Event){
    // console.log(event);
  this.serverName = (<HTMLInputElement>event.target).value;
  
  }
  // This function for Input reset 
  // onReset(){
  //  this.username ="";
  // }
 
}
