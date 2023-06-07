"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseConfigService = void 0;
require('dotenv').config();
class DatabaseConfigService {
    constructor(env) {
        this.env = env;
    }
    getValue(key, throwOnMissing = true) {
        const value = this.env[key];
        if (!value && throwOnMissing && key !== 'POSTGRES_PASSWORD') {
            throw new Error(`config error - missing env.${key}`);
        }
        return value || '';
    }
    ensureValues(keys) {
        keys.forEach((k) => this.getValue(k, true));
        return this;
    }
    getPort() {
        return parseInt(this.getValue('PORT', true));
    }
    isProduction() {
        const mode = this.getValue('MODE', false);
        return mode !== 'DEV';
    }
    getTypeOrmConfigForMongoose() {
        return {
            uri: this.getMongoUri(),
            useNewUrlParser: true,
            useUnifiedTopology: true,
            autoLoadEntities: true,
        };
    }
    getMongoUri() {
        const host = this.getValue('MONGO_HOST');
        const port = parseInt(this.getValue('MONGO_PORT'));
        const database = this.getValue('MONGO_DATABASE');
        return `mongodb://${host}:${port}/${database}`;
    }
}
exports.databaseConfigService = new DatabaseConfigService(process.env).ensureValues([
    'MONGO_HOST',
    'MONGO_PORT',
    'MONGO_DATABASE',
]);
//# sourceMappingURL=database-config.service.js.map