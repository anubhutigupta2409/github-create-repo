import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();// allows resources to be requested from another domain
  await app.listen(3000);
}
bootstrap();
