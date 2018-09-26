import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Player } from './player';




 const params = new HttpParams()
   .append('userid', 'dhelaman@hotmail.com')
   .append('window', 'alltime')
   .append('platform', 'xb1')



@Injectable({
  providedIn: 'root'
})

export class PlayerService {
  private playersUrl = 'https://fortnite-public-api.theapinetwork.com/prod09/users/public/br_stats';
  
  headers = new HttpHeaders().set('Authorization', 'ff05e69e525b6bfbbf414dba3d4f57f9');
  
  form = new FormData().append('userid', 'dhelaman@hotmail.com')//.append('platform', 'xb1').append('window', 'alltime');

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'ff05e69e525b6bfbbf414dba3d4f57f9',
      'async':'true',
      'crossDomain':'true',
      'method':'POST',
      'processData': 'false',
      'contentType': 'false',
      'mimeType': 'multipart/form-data'
    })
  };

  settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://fortnite-public-api.theapinetwork.com/prod09/users/public/br_stats",
    "method": "POST",
    "headers": {
      "Authorization": "ff05e69e525b6bfbbf414dba3d4f57f9"
    },
    "processData": false,
    "contentType": false,
    "mimeType": "multipart/form-data",
    "data": this.form
  }

  constructor(private http: HttpClient) { }

  getPlayer(acct: string): Observable<Player> {
    // if (acct) {
    //   return of(this.initializeProduct());
    // }
    //const url = `${this.playersUrl}/${acct}`;
    return this.http.get<Player>(this.playersUrl, this.settings)
      .pipe(
        tap(data => console.log('getPlayer: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }
  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

  private initializeProduct(): Player {
    // Return an initialized object
    return {
      "cached": false,
      "uid": null,
      "username": null,
      "platform": null,
      "timestamp": 0,
      "window": null,
      "stats": {
          "kills_solo": 0,
          "placetop1_solo": 0,
          "placetop10_solo": 0,
          "placetop25_solo": 0,
          "matchesplayed_solo": 0,
          "kd_solo": 0,
          "winrate_solo": 0,
          "score_solo": 0,
          "minutesplayed_solo": 0,
          "lastmodified_solo": 0,
          "kills_duo": 0,
          "placetop1_duo": 0,
          "placetop5_duo": 0,
          "placetop12_duo": 0,
          "matchesplayed_duo": 0,
          "kd_duo": 0,
          "winrate_duo": 0,
          "score_duo": 0,
          "minutesplayed_duo": 0,
          "lastmodified_duo": 0,
          "kills_squad": 0,
          "placetop1_squad": 0,
          "placetop3_squad": 0,
          "placetop6_squad": 0,
          "matchesplayed_squad": 0,
          "kd_squad": 0,
          "winrate_squad": 0,
          "score_squad": 0,
          "minutesplayed_squad": 0,
          "lastmodified_squad": 0
      },
      "totals": {
          "kills": 0,
          "wins": 0,
          "matchesplayed": 0,
          "minutesplayed": 0,
          "hoursplayed": 0,
          "score": 0,
          "winrate": 0,
          "kd": 0,
          "lastupdate": 0
      }
    };
  }
}
