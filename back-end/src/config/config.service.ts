// src/config/config.service.ts
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

require('dotenv').config();

class ConfigService {

    constructor(private env: { [k: string]: string | undefined }) { }

    private getValue(key: string, throwOnMissing = true): string {
        const value = this.env[key];
        if (!value && throwOnMissing) {
            throw new Error(`config error - missing env.${key}`);
        }

        return value;
    }

    public ensureValues(keys: string[]) {
        keys.forEach(k => this.getValue(k, true));
        return this;
    }

    public getPort() {
        return this.getValue('PORT', true);
    }

    public getTypeOrmConfig(): TypeOrmModuleOptions {
        return {
            type: 'postgres',

            host: '127.0.0.1',
            port: 5432,
            username: 'postgres',
            password: this.getValue('POSTGRES_PASSWORD'),
            database: 'dvdrental',

            entities: ['**/*.entity{.ts,.js}'],

            migrationsTableName: 'migration',

            migrations: ['src/migration/*.ts'],

            cli: {
                migrationsDir: 'src/migration',
            },

            ssl: false,
        };
    }

}

const configService = new ConfigService(process.env)
    .ensureValues([
        'POSTGRES_PASSWORD',
    ]);

export { configService };