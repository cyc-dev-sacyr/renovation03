import { IPermission } from "./IPermission";

export interface IUserRole {
    Id: string;
    Description: string;
    Permissions: IPermission[];
}