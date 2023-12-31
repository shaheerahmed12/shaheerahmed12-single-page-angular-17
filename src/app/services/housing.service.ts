import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { IProperty } from '../property-list/IProperty';
@Injectable({
  providedIn: 'root'
})
export class HousingService {

constructor(private http:HttpClient) { }

getAllProperties(Sell:number):Observable<IProperty[]> 
{
  return this.http.get('data/properties.json').pipe(
    map((data: { [key: string]: any }) => {
      const propertiesArray: Array<IProperty> = [];

      for (const id in data) {
        if (data.hasOwnProperty(id) && data[id].Sell===Sell) {
          propertiesArray.push(data[id]);
        }
      }

      return propertiesArray;
    })
  );
}
 
  
}

