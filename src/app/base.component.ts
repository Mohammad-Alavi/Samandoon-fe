import {ApiConfig} from './services/api/api.config';

export abstract class BaseComponent {

    public getApiUrl(): string {
        return ApiConfig.API_URL;
}

}
