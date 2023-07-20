import { AllCrucesI } from './../../../models/all-cruces.interface';
export interface CrucesApiResponseI {
    status: boolean;
    message: string;
    data: AllCrucesI[];
}