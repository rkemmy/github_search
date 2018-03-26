import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService {

  private username:string;
  private clientid = 'a1ecf337a97a7475220d',
  private clientsecret = 'd3969c17d7d580261fe490c7b574756758128270',

  constructor(private http:Http) { }

}
