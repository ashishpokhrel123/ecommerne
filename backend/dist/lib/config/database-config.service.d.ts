import { MongooseModuleOptions } from '@nestjs/mongoose';
declare class DatabaseConfigService {
    private env;
    constructor(env: {
        [k: string]: string | undefined;
    });
    private getValue;
    ensureValues(keys: string[]): this;
    getPort(): number;
    isProduction(): boolean;
    getTypeOrmConfigForMongoose(): MongooseModuleOptions;
    getMongoUri(): string;
}
export declare const databaseConfigService: DatabaseConfigService;
export {};
