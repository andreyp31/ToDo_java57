import { Injectable, OnModuleInit } from '@nestjs/common';
import { Database } from 'sqlite3';

@Injectable()
export class SqliteService implements OnModuleInit {
  public db: Database;

  onModuleInit(): any {
    this.db = new Database('todo.db');
    this.db.run(`
        CREATE TABLE IF NOT EXISTS todos (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          title TEXT NOT NULL
          )
    `);
  }
}
