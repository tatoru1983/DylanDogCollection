import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-mainsearch',
  templateUrl: './mainsearch.component.html',
  styleUrls: ['./mainsearch.component.scss']
})
export class MainsearchComponent implements OnInit {

  @Input() dataSource = '';
  
  copertinaRow : string[];
	titoloRow : string;
	annoRow : string;
	numeroRow : string;
	edizioneRow : string;
	sceneggiaturaRow : string[];
	checkRow : string;
	disegniRow : string[];
	soggettoRow : string[];
  imageRow: string;

  ngOnInit(): void {
  }
  constructor() { }


  onClickRow(data) {
    console.log(data);
    this.copertinaRow = data.copertina;
    this.titoloRow = data.titolo;
    this.annoRow = data.anno;
    this.numeroRow = data.numero;
    this.edizioneRow = data.edizione;
    this.sceneggiaturaRow = data.sceneggiatura;
    this.checkRow = data.check;
    this.disegniRow = data.disegni;
    this.soggettoRow = data.soggetto;
    this.imageRow = data.immagine;
  }
}
