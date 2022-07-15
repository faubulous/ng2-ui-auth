import { StorageType } from './storage-type.enum';
import { Observable } from 'rxjs';
import { StorageService } from './storage-service';
import { ConfigService } from './config.service';
import * as i0 from "@angular/core";
export declare class SharedService {
    private storage;
    private config;
    tokenName: string;
    constructor(storage: StorageService, config: ConfigService);
    getToken(): string;
    getPayload(token?: string): any;
    setToken(response: string | object): void;
    removeToken(): void;
    isAuthenticated(token?: string): boolean;
    getExpirationDate(token?: string): Date;
    logout(): Observable<any>;
    setStorageType(type: StorageType): boolean;
    private b64DecodeUnicode;
    static ɵfac: i0.ɵɵFactoryDeclaration<SharedService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SharedService>;
}
