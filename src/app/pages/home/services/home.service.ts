import { DataForChartsI } from './../models/data-for-charts.interface';
import { AllCrucesI } from './../../../models/all-cruces.interface';
import { Injectable } from '@angular/core';
// API Services
import { HomeApiService } from './../api/home-api.service';
// Models or interfaces
import { CrucesApiResponseI } from './../models/cruces-api.model';

@Injectable()
export class HomeService {
    constructor(private homeApiService: HomeApiService) {}


    public async getCruces(): Promise<DataForChartsI[]>{
        const apiResponse = await this.homeApiService.getCruces();
        console.log('API getCruces', apiResponse);
        if (!apiResponse) {
            return null;
        }
        const request = this.makeCrucesChatData(apiResponse.data);
        return request;
    }

    public async getCrucesByDate(year: string, month: string): Promise<DataForChartsI[]> {
        const apiResponse = await this.homeApiService.getCrucesByDate(year, month);
        console.log('API getCrucesByDate', apiResponse);
        if (!apiResponse) {
            return null;
        }
        const request = this.makeCrucesChatData(apiResponse.data);
        return request;
    }


    /**
     * getPedimentosPagados
     */
    public async getPedimentosPagados() {
        const apiResponse = await this.homeApiService.getPedimentosPagos();
        console.log('API getPedimentosPagados', apiResponse);
        if (!apiResponse) {
            return null;
        }
        const request = this.makeCrucesChatData(apiResponse.data);
        return request;
    }

    /**
     * async getPPByDate()
     * @param year : string
     * @param month: string
     * @returns Promise<DataForChartsI[]>
     */
    public async getPPByDate(year: string, month: string): Promise<DataForChartsI[]> {
        const apiResponse = await this.homeApiService.getPPByDate(year, month);
        console.log('API getPPByDate', apiResponse);
        if (!apiResponse) {
            return null;
        }
        const request = this.makeCrucesChatData(apiResponse.data);
        return request;
    }

    /**
     * filtrar y hacer arreglo de aduanas
     * con el arreglo de aduanas filtrar datos de cruces
     *
     */


    // Private Methods
    /**
     * Logic method
     * This method will help us to filter and set the data as the ChartJS needs them in ordrr to display it correctly
     * @param allCruces :  AllCrucesI[]
     * @returns DataForChartsI[]
     */
    private makeCrucesChatData(allCruces: AllCrucesI[]): DataForChartsI[] {
        const memosAduanas = [];
        allCruces.forEach((cruce) => {
            if ( memosAduanas.length > 0) {
                const canBeAdded = this.memoValidation(memosAduanas, cruce.desc_aduana);
                if (!canBeAdded) {
                    return;
                }
                memosAduanas.push(cruce.desc_aduana);
                // return cruce.desc_aduana;
            } else {
                memosAduanas.push(cruce.desc_aduana);
            }
        });
        console.log('allAduanas', memosAduanas);

        const filterValuesPerAduana = memosAduanas.map((aduana) => {
            const valuesPerAduna = [];
            allCruces.forEach(e => {
                if (e.desc_aduana === aduana) {
                    valuesPerAduna.push(Number(e.cantidad));
                }
            });
            console.log('valuesPerAd', valuesPerAduna);
            return {label: aduana, data: valuesPerAduna};
        });
        console.log('filterValue', filterValuesPerAduana);
        return filterValuesPerAduana;
    }
    /**
     * Logic method
     * This is a helper method in order to compere if aduana value is allready inside of memeAduanaArray array in order to
     * avoid duplications
     * @param memeAduanaArray : string[]
     * @param aduana : string[]
     * @returns boolean
     */
    private memoValidation(memeAduanaArray: string[], aduana: string): boolean {
        let canBeAdded = true;
        memeAduanaArray.forEach(meAduana => {
            if (meAduana === aduana) {
                canBeAdded = false;
            }
        });
        return canBeAdded;
    }
}
