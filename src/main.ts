import { NestFactory } from '@nestjs/core';
import {
    NestFastifyApplication,
    FastifyAdapter,
} from '@nestjs/platform-fastify';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
// import { join } from 'path';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(process.env.PORT ?? 3000);
// }
// bootstrap();

async function bootstrap() {
    const app = await NestFactory.create<NestFastifyApplication>(
        AppModule,
        new FastifyAdapter(),
    );
    // app.useGlobalInterceptors(new LoggingInterceptor());

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call
    const config = new DocumentBuilder()
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        .setTitle('API example')
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        .setDescription('Uploader API')
        .setVersion('1.0')
        .addTag('Uploader')
        .addBearerAuth()
        .build();

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call
    const document = SwaggerModule.createDocument(app, config);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    SwaggerModule.setup('docs/api', app, document);
    await app.listen(process.env.PORT ?? 3000);
    console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
