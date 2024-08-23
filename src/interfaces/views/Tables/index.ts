import { StaticImageData } from "next/image";


 export interface DataType {
    key: string;
    img: StaticImageData;
    name: string;
    designation: string;
    date:string;
  }
  [];
  
 export interface OrderData {
    key: string;
    order: string;
    orderCode: string;
    date: string;
    isRefund: boolean;
  }
  [];