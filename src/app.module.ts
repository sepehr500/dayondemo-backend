import { Module, CacheModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppGateway } from './app.gateway';
import { ConfigModule } from '@nestjs/config';
import { AirtableService } from './services/AirtableService';

@Module({
  imports: [ConfigModule.forRoot(), CacheModule.register({ ttl: 5 })],
  controllers: [AppController],
  providers: [AirtableService, AppService, AppGateway],
})
export class AppModule { }
