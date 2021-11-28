// src/config/config.service.ts
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

class ConfigService {
    public getTypeOrmConfig(): TypeOrmModuleOptions {
        return {
            type: 'postgres',

            host: 'db',
            port: 5432,
            username: 'postgres',
            password: 'postgres',
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

const configService = new ConfigService()

export { configService };
