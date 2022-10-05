export interface ITreeInfo {
    id: string;
    title: string;
    selectable?: boolean;
    items?: ITreeInfo[];
    index?: number;
    active?: boolean;
    longitude?: string;
    latitude?: string;
    order?: number;
}
