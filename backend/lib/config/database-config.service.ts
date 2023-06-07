import { MongooseModuleOptions } from '@nestjs/mongoose';

require('dotenv').config();

class DatabaseConfigService {
  constructor(private env: { [k: string]: string | undefined }) {}

  private getValue(key: string, throwOnMissing = true): string {
    const value = this.env[key];
    if (!value && throwOnMissing && key !== 'POSTGRES_PASSWORD') {
      throw new Error(`config error - missing env.${key}`);
    }

    return value || '';
  }

  public ensureValues(keys: string[]) {
    keys.forEach((k) => this.getValue(k, true));
    return this;
  }

  public getPort(): number {
    return parseInt(this.getValue('PORT', true));
  }

  public isProduction(): boolean {
    const mode = this.getValue('MODE', false);
    return mode !== 'DEV';
  }

  public getTypeOrmConfigForMongoose(): MongooseModuleOptions {
    return {
      uri: this.getMongoUri(),
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoLoadEntities: true,
    };
  }

  public getMongoUri(): string {
  const host = this.getValue('MONGO_HOST');
  const port = parseInt(this.getValue('MONGO_PORT'));
  const database = this.getValue('MONGO_DATABASE');

  return `mongodb://${host}:${port}/${database}`;
}

}

export const databaseConfigService = new DatabaseConfigService(
  process.env,
).ensureValues([
  'MONGO_HOST',
  'MONGO_PORT',
  'MONGO_DATABASE',
]);
