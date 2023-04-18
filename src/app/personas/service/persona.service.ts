import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../interfaces/pesona.interface';

@Injectable({providedIn: 'root'})

export class PersonaService {

    private baseUrl = 'http://localhost:8080/api/personas'
    
    constructor(private httpClient: HttpClient) { }

    getPersonas():Observable<Persona[]>{
        return this.httpClient.get<Persona[]>(`${ this.baseUrl }/listar`)
    }

    getPersonaPorId(id:number):Observable<Persona>{
        return this.httpClient.get<Persona>(`${ this.baseUrl }/listar/${id}`)
    }

    eliminarPorId(id:number):Observable<Object>{
        return this.httpClient.delete(`${ this.baseUrl }/eliminar/${id}`)
    }

    agregarPersona(persona:Persona):Observable<Persona>{
        return this.httpClient.post(`${this.baseUrl}/agregar`,persona)
    }
    
    editarPersona(persona:Persona):Observable<Persona>{
        return this.httpClient.put(`${this.baseUrl}/editar`,persona)
    }
    
}