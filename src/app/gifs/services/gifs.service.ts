import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class GifsService {

  private _historial: string[] = [];
  
  
  get historial(){
    return [...this._historial];
  }

  //Almacenamiento
  buscarGifs(query: string = ''){
    
    //Modificar solo en minuscula
    query = query.trim().toLowerCase();

    //Revisa si la entrada ya se incluye dentro de Historial
    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10);
    }


    //this._historial.unshift(query);


    console.log(this._historial);

  }

}
