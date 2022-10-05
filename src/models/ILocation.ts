export interface ILocation {
    Id: string;
    Title: string;
    Items?: ILocation[];
    Level?: number;
}