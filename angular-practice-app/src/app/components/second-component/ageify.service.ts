import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class Ageify {
    constructor(private http: HttpClient) {}
    getAgeForName(name: string) { 
        console.log('about to get')
      return this.http.get(`https://api.agify.io?name=${name}`);
    }
}