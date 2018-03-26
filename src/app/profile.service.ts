import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService {

  private username:string;
  private clientid = 'a1ecf337a97a7475220d';
  private clientsecret = 'd3969c17d7d580261fe490c7b574756758128270';

  constructor(private http:Http) {
    console.log("service is now ready!");
    this.username = 'rkemmy';
   }

  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
    .map(res => res.json());
  }

}
