import { Injectable } from '@nestjs/common';
import { NewTodoDtoDto } from '../dto/NewTodoDto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from '../model/todo.entity';
import { Repository } from 'typeorm';
import { UpdateTodoDto } from '../dto/UpdateTodoDto.dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {
  }

  create(todoDto: NewTodoDtoDto) {
    const todo = this.todoRepository.create(todoDto);
    return this.todoRepository.save(todo);
  }

  findAllTodo() {
    return this.todoRepository.find();
  }

  findById(id: number) {
    return this.todoRepository.findOneBy({ id });
  }

  removeById(id: number) {
    return this.todoRepository.delete(id);
  }

  async updateById(id: number, dto: UpdateTodoDto) {
    await this.todoRepository.update(id, dto);
    return this.todoRepository.findOneBy({ id });
  }
}