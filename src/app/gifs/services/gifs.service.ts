import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class GifsService {

  private _historial: string[] = [];
  private apikey : string = 'Sg35dPJgZKmMisg19TZB4O1rEgWY6MMP';
  
  //TODO: Cambiar any por su tipo correspondiente
  public resultados : any[] = [];

  constructor( private http : HttpClient){

  }

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

    this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=Sg35dPJgZKmMisg19TZB4O1rEgWY6MMP&q=${query}`)
      .subscribe( (resp: any) => {
        console.log(resp.data);
        this.resultados = resp.data;
      });

    console.log(this._historial);

  }

}
