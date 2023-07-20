import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';

// Loader service
import { LoaderService } from 'src/app/services/loader.service';

// TODO: IMPLEMENTARLO BIEN CON EL ION-LOADING, DURE 3 HORAS SIN EXITO :( (PROBLEMA CON EL ASINCRONISMO)

@Injectable()
export class HttpLoaderInterceptor implements HttpInterceptor {
  // Properties
  private requestProp: HttpRequest<any>[] = [];
  constructor(private loaderService: LoaderService) {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.requestProp.push(request);
    console.log('Number of requests--->' + this.requestProp.length);
    this.loaderService.present();
    return new Observable(observer => {
      const subcrition = next.handle(request)
        .subscribe(
            (event) => {
            if (event instanceof HttpResponse) {
                this.removeRequest(request);
                observer.next(event);
            }
          },
          (error: HttpErrorResponse) => {
            console.log('HTTP error:', error);
            this.loaderService.dismiss();
            switch (error.status) {
                case 400 :
                    alert('Solicitud incorrecta');
                    break;
                case 401 :
                    alert('Solicitud no autorizado');
                    break;
                case 403 :
                    alert('Solicitud prohibida');
                    break;
                case 404 :
                    alert('Solicitud no encontrada');
                    break;
                case 405 :
                    alert('Metodo de solicitud no permitida');
                    break;
                case 406 :
                    alert('Solicitud inaceptable');
                    break;
                case 415 :
                    alert('Tipo de formato no compatible');
                    break;
                case 500 :
                    alert('Ocurrió un error vuelva a intentarlo');
                    break;
                default:
                  alert('Error en la solicitud');
                  break;
            }
            this.removeRequest(request);
          },
            () => {
            this.removeRequest(request);
            observer.complete();
          });
      return () => {
        this.removeRequest(request);
        subcrition.unsubscribe();
      };
    });
  }

  private  removeRequest(req: HttpRequest<any>) {
    console.log('req', req);
    // const index = this.requestProp.indexOf(req);
    // if (index >= 0) {
    //   this.requestProp.splice(index, 1);
    // }
    // console.log('resultado', this.requestProp.length > 0);
    // if (this.requestProp.length > 0) {
    //     // console.log('present')

    // } else {
    //     console.log('dix')
    //     this.loaderService.dismiss();
    // }
  }
}
