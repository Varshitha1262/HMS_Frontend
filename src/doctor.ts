import { patient } from "./patient";

export class doctor{
    doctorId:number;

    doctorName:String;

    gender:String;

    phoneNo:String;

    patient:patient[]=[];
}