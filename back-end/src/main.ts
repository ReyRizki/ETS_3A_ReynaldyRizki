import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  const document = SwaggerModule.createDocument(app, new DocumentBuilder()
    .setTitle('Actor API')
    .setDescription('Actor CRUD API')
    .build());

  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}
bootstrap();
