import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const corsOptions = {optionsSuccessStatus: 200, Credential:true, origin:'http://localhost:3000',};
  app.enableCors(corsOptions);
  await app.listen(3333);
}
bootstrap();
