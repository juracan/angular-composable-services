import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'any'
})
export class OutputName {
  outputName(name: string, color: string): void{
    console.log('Output:' + name + color);
  }
}
