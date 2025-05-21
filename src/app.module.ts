import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    // TypeORM
    // TypeOrmModule.forRoot({
    //   type: 'sqlite',
    //   database: './database.sqlite',
    //   entities: [__dirname + '/**/*.entity{.ts,.js}'],
    //   synchronize: true,
    // }),
    TodoModule,
  ],
})
export class AppModule {}
