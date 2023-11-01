export interface IAppItem {
    "appId": string,
    "appName": string,
    "appSources": string[],
    "category": string
}


export interface IAppListResponse {
    appRows: IAppItem[];
    totalCount: number;
}