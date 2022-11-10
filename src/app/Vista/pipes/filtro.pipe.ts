import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any, arg: any): any {

    const resultado = [];
    for (const datos of value) {
      if (datos.Ubicacion.indexOf(arg) > -1){
        resultado.push(datos);
      };
    };
    return resultado;
  }

}
