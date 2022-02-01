import { Component } from "@angular/core";


@Component({
    selector : 'app-heroe',
    templateUrl : 'heroe.component.html'
})


export class HeroeComponent{

    nombre : string = 'Iroman';
    edad : number = 45;

    mostrarNombre (): string {
        return `${this.nombre}  -  ${this.edad}` 
    }

    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }

    cambiarNombre():void {
        this.nombre = 'Superman';
    }

    cambiarEdad(): void {
        this.edad = 30;
    }



}