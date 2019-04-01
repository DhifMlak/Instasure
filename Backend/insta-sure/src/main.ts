import { NestFactory } from '@nestjs/core';
import { json } from 'body-parser';
// import * as dotenv from 'dotenv';
import * as bodyparser from 'body-parser';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bodyparser: false });
  app.use(json({ limit: '50mb' }));
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
