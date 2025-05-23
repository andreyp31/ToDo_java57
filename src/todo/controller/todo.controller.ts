import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TodoService } from '../service/todo.service';
import { NewTodoDtoDto } from '../dto/NewTodoDto.dto';
import { UpdateTodoDto } from '../dto/UpdateTodoDto.dto';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {
  }

  @Post()
  createTodo(@Body() todoDto: NewTodoDtoDto) {
    return this.todoService.create(todoDto);
  }

  @Get()
  findAllTodo() {
    return this.todoService.findAllTodo();
  }

  @Get(':id')
  findById(@Param('id') id: number) {
    return this.todoService.findById(id);
  }

  @Delete(':id')
  removeById(@Param('id') id: number) {
    return this.todoService.removeById(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: UpdateTodoDto) {
    return this.todoService.updateById(id, dto);
  }
}