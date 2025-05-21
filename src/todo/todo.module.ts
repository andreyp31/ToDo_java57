import { Module } from '@nestjs/common';
import { TodoController } from './controller/todo.controller';
import { TodoService } from './service/todo.service';
import { SqliteService } from '../db_init/sqlite.service';

@Module({
  imports: [
    // TypeOrmModule.forFeature([Todo])
  ],
  controllers: [TodoController],
  providers: [TodoService, SqliteService],
})
export class TodoModule {}
