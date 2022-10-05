import { IUser } from ".";

export interface IInfoConstructionWebService {
    Id: string;
    Code: string;
    Name: string;
    Description: string;
    SocietyId: number;
    SocietyName: string;
    CountryId: number;
    CountryName: string;
    BusinessId: number;
    BusinessName: string;
    StateId: number;
    StateValue: string;
    DivisionId: number;
    DivisionName: string;
    ConstructionTypeId: number;
    ConstructionTypeValue: string;
    ConstructionChiefs: IUser[];
    GroupChief?: IUser;
    Manager?: IUser;
}
