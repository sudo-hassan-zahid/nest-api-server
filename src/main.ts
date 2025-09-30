import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));

  app.enableCors();

  // OpenAPI/Swagger Configuration (needed for Scalar)
  const config = new DocumentBuilder()
    .setTitle('User Management API')
    .setDescription('A complete REST API for user CRUD operations with MySQL')
    .setVersion('1.0')
    .addTag('users')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);

  // Setup Scalar API Reference
  const { apiReference } = await import('@scalar/nestjs-api-reference');
  
  app.use(
    '/docs',
    apiReference({
      spec: {
        content: document,
      },
      theme: 'purple', // Options: 'default', 'alternate', 'moon', 'purple', 'solarized', 'bluePlanet', 'saturn', 'kepler', 'mars', 'deepSpace'
      layout: 'modern', // Options: 'modern' or 'classic'
      showSidebar: true,
      darkMode: true,
    }),
  );

  const port = process.env.PORT || 3000;
  await app.listen(port);
  
  console.log(`Application is running on: http://localhost:${port}`);
  console.log(`Scalar API Docs available at: http://localhost:${port}/docs`);
}
bootstrap();