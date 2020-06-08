import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation : ViewEncapsulation.Emulated
})
export class AppComponent {
  serverElements = [{type:'server',name:'Testserver',content:'Just a test'}];
  onServerAdded(serverData: {serverName:string,serverContent: string}){
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }
  onBlueprintAdded(bluePrintData: {serverName:string,serverContent: string}){
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintData.serverName,
      content: bluePrintData.serverContent
    });
  }
}
