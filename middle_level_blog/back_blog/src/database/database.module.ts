import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import dataSource from './config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => dataSource.options,
    }),
  ],
})
export class DatabaseModule {}
