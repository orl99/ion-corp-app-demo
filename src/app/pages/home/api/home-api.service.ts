import { LoaderService } from 'src/app/services/loader.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Models and interfaces
import { CrucesApiResponseI } from './../models/cruces-api.model';

const API_ENDPOINT = 'http://201.144.125.147:3000';

@Injectable()
export class HomeApiService{

    constructor(private http$: HttpClient, private loaderService: LoaderService) {}

    public async getCruces(): Promise<CrucesApiResponseI> {
        await this.loaderService.present();
        const response = await this.http$.get<CrucesApiResponseI>(`${API_ENDPOINT}/pedimentos/cruces`).toPromise();
        await this.loaderService.dismiss();
        return response;
    }

    public async getCrucesByDate(year: string, month: string): Promise<CrucesApiResponseI> {
        await this.loaderService.present();
        const response = await this.http$.get<CrucesApiResponseI>(`${API_ENDPOINT}/pedimentos/cruces/byYear/${year}/${month}`).toPromise();
        await this.loaderService.dismiss();
        return response;
    }

    public async getPedimentosPagos(): Promise<CrucesApiResponseI> {
        await this.loaderService.present();
        const response = await this.http$.get<CrucesApiResponseI>(`${API_ENDPOINT}/pedimentos-pagados`).toPromise();
        await this.loaderService.dismiss();
        return response;
    }

    public async getPPByDate(year: string, month: string): Promise<CrucesApiResponseI> {
        await this.loaderService.present();
        // tslint:disable-next-line: max-line-length
        const response = await this.http$.get<CrucesApiResponseI>(`${API_ENDPOINT}/pedimentos-pagados/byYear/${year}/${month}`).toPromise();
        await this.loaderService.dismiss();
        return response;
    }
}
