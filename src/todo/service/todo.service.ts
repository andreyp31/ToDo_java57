import { Injectable } from '@nestjs/common';
import { NewTodoDtoDto } from '../dto/NewTodoDto.dto';
import { UpdateTodoDto } from '../dto/UpdateTodoDto.dto';
import { SqliteService } from '../../db_init/sqlite.service';


@Injectable()
export class TodoService {
  constructor(private readonly sqliteService: SqliteService) {}

  create(todoDto: NewTodoDtoDto) {
    return new Promise((resolve, reject) => {
      this.sqliteService.db.run(
        'INSERT INTO todos (title) VALUES (?)',
        [todoDto.title],
        function (err) {
          if (err) reject(err);
          else resolve({ id: this.lastID, ...todoDto});
        },
      );
    });
  }

  findAllTodo() {
    return new Promise((resolve, reject) => {
      this.sqliteService.db.all('SELECT * FROM todos', function (err, rows) {
        if (err) reject(err);
        else resolve(rows);
      });
    });
  }

  findById(id: number) {
    // return this.todoRepository.findOneBy({ id });
  }

  removeById(id: number) {
    // return this.todoRepository.delete(id);
  }

  async updateById(id: number, dto: UpdateTodoDto) {
    // await this.todoRepository.update(id, dto);
    // return this.todoRepository.findOneBy({ id });
  }
}
