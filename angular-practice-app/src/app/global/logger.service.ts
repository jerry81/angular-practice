import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Logger {
    log(msg: any) { console.log('message is ', msg)}
}