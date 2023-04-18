export interface Persona {
    id?:               number;
    nombre?:           string;
    apellido?:         string;
    fecha_nacimiento?: Date;
    direccion?:        string;
    telefono?:         string;
    pais?:             Paises;
}

export enum Paises {
    Argentina = 'Argentina',
    Bolivia = 'Bolivia',
    Brasil = 'Brasil',
    Chile = 'Chile',
    Colombia = 'Colombia',
    CostaRica = 'Costa Rica',
    Cuba = 'Cuba',
    Ecuador = 'Ecuador',
    ElSalvador = 'El Salvador',
    Guatemala = 'Guatemala',
    Haiti = 'Haiti',
    Honduras = 'Honduras',
    Jamaica = 'Jamaica',
    Mexico = 'México',
    Nicaragua = 'Nicaragua',
    Panama = 'Panamá',
    Paraguay = 'Paraguay',
    Peru = 'Perú',
    PuertoRico = 'Puerto Rico',
    RepublicaDominicana = 'República Dominicana',
    Uruguay = 'Uruguay',
    Venezuela = 'Venezuela'
  }
  
