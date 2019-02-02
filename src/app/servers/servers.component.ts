import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  private allowNewServer: boolean = false;
  private serverCreationStatus: string = 'No server was created!';
  private serverName: string = 'Type a server name...';

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = "Server was created!!!";
  }

  onUpdateServerName(e: Event) {
    this.serverName = (<HTMLInputElement>e.target).value;
  }
}
