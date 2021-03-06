import { ApiQuery } from "./ApiQuery";
import { ApiRequest } from "./ApiRequest";
import { Api } from "./Api";
export declare class ApiQueryBuilder {
    api: Api;
    constructor(api: Api);
    private buildProvideIdStep(query, currentSegment);
    private buildCheckStep(query, currentSegment);
    private buildReadStep(query, currentSegment);
    private buildReadQuery;
    build: (request: ApiRequest) => ApiQuery;
}
