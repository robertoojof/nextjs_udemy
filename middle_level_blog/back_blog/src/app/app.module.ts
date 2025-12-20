import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from 'src/post/post.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [PostModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
