import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookController } from './controller/book.controller';
import { Book, BookSchema } from './schemas/book.schemas';
import { BookService } from './service/book.service';


@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nestJs'),
            MongooseModule.forFeature([{name: Book.name, schema: BookSchema}])],
  controllers: [AppController, BookController],
  providers: [AppService, BookService],
})
export class AppModule {}