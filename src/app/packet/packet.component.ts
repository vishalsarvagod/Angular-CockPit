import { Component, OnInit, EventEmitter, Output } from '@angular/core';
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-packet',
  templateUrl: './packet.component.html',
  styleUrls: ['./packet.component.css']
})
export class PacketComponent implements OnInit {
  //serverElements =[];
  @Output() serverCreated = new EventEmitter<{serverName:string,serverContent:string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName:string,serverContent:string}>();
  newServerName = '';
  newServerContent = '';
  constructor() { }

  ngOnInit(): void {
  }
  onAddServer(){
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
    // this.serverElements.push({
    //   type: 'server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }
  onAddBlueprint(){
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }

}
