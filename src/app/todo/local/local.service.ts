// import { Injectable, Inject } from '@angular/core';
// import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';


// @Injectable({
//   providedIn: 'root'
// })
// export class LocalService {

//   public data: Array<any>;

//   constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) {}


//   saveInLocal(key, val): void {
//     console.log('recieved= key:' + key + 'value:' + val);
//     localStorage.setItem(key, val);
//     // this.storage.set(key, val);
//   }

//   getFromLocal(key): void {
//     console.log('recieved= key:' + key);
//     this.data[key] = this.storage.get(key);
//     // console.log(this.data);
//   }
// }
