import { ISociety, IUser } from ".";
import { IItemSP } from "../services/models";

export interface IInfoConstruction {
    Id: string;
    Code: string;
    Name: string;
    Description: string;
    Society: IItemSP;
    Country: IItemSP;
    Business: IItemSP;
    State: IItemSP;
    Division: IItemSP;
    Type: IItemSP;
    ConstructionChiefs: IUser[];
    GroupChief?: IUser;
    Manager?: IUser;
}
