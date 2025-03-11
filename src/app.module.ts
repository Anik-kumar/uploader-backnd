import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegistrationModule } from './modules/registration/registration.module';
import { LoginModule } from './modules/login/login.module';
import { UploadModule } from './modules/upload/upload.module';
import { DownloadModule } from './modules/download/download.module';

@Module({
    imports: [RegistrationModule, LoginModule, UploadModule, DownloadModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
