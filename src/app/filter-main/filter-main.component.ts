import { Component, OnInit } from '@angular/core';
import * as data from '../../../data/dylandog.json';
//import { ResultGridMainsearchModule } from '../mainsearch/mainsearch.component';

@Component({
  selector: 'app-filter-main',
  templateUrl: './filter-main.component.html',
  styleUrls: ['./filter-main.component.scss']
})
export class FilterMainComponent implements OnInit//, PipeTransform 
{

  dataSourceAnno: any = (data as any).default;
  dataSourceGrid: any = (data as any).default;
  dataSourceGridDefault: any = (data as any).default;

  constructor() { }

  ngOnInit(): void {
    this.dataSourceAnno = this.removeDuplicates(this.dataSourceAnno);
  }

  onClickSubmit(data) {
    console.log(data);
    //filtro i dati
    this.dataSourceGrid = this.filterData(this.dataSourceGridDefault, data);
  }

  removeDuplicates(arr: any[]): any[] {
    var newarr = [arr[0]];
    for (var i = 1; i < arr.length; i++) {
      if (arr[i].anno != arr[i - 1].anno)
        newarr.push(arr[i]);
    }
    return newarr;
  }

  filterData(arr: any[], data: any): any[] {
    var newarr = [];
    //se vuoto restituisco tutto
    if (data.albo.length == 0 && data.anno.length == 0 &&
      data.autore.length == 0 && data.disegnatore.length == 0)
      return arr;
    for (var i = 0; i < arr.length; i++) {
      var trovatoAlbo = false;
      var trovatoAnno = false;
      var trovatoAutore = false;
      var trovatoDisegnatore = false;
      //condizione albo
      if (data.albo.length > 0) {
        if (arr[i].titolo.toLowerCase().includes(data.albo.toLowerCase()))
          trovatoAlbo = true;
        //console.log("ok albo");
      } else {
        trovatoAlbo = true;
      }
      //condizione anno
      if (data.anno.length > 0) {
        if (data.anno == arr[i].anno)
          trovatoAnno = true;
        //console.log("ok anno");
      } else {
        trovatoAnno = true;
      }
      //condizione autore
      if (data.autore.length > 0) {
        var autori = arr[i].sceneggiatura.concat(arr[i].soggetto);
        for (var j = 0; j < autori.length; j++) {
          console.log(autori[j].toLowerCase());
          if (autori[j].toLowerCase().includes(data.autore.toLowerCase())) {
            trovatoAutore = true;
            console.log("ok sceneggiatura");
          }
        }
      } else {
        trovatoAutore = true;
      }
      //condizione disegnatore
      if (data.disegnatore.length > 0) {
        var disegnatori = arr[i].disegni.concat(arr[i].copertina);
        for (var j = 0; j < disegnatori.length; j++) {
          if (disegnatori[j].toLowerCase().includes(data.disegnatore.toLowerCase())) {
            trovatoDisegnatore = true;
            //console.log("ok disegni");
          }
        }
      } else {
        trovatoDisegnatore = true;
      }
      if (trovatoAlbo && trovatoAnno && trovatoAutore && trovatoDisegnatore)
        newarr.push(arr[i]);
    }
    return newarr;
  }
}