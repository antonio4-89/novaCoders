import { Injectable } from '@angular/core';
import { 
  AngularFirestore,
  AngularFirestoreCollection 
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Producto } from '../interfaces/producto.interface';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ApiGeneral {

constructor( private fireStore: Firestore ){}

getCollectionChanges  ( path: string ){
  const referenciaCollections = collection( this.fireStore, path )

  return collectionData(referenciaCollections) as Observable<any[]>
}

}