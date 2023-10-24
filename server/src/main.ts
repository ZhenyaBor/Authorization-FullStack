import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //http://localhost:7070/api
  app.setGlobalPrefix('api');
  app.enableCors();
  await app.listen(7070);
}
bootstrap();
