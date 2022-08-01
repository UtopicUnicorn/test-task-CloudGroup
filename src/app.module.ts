import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoModule } from './todo/todo.module';
import { TodoEntity } from './todo/entities/todo.entity';
import { CategoryEntity } from './category/entities/category.entity';

@Module({
  imports: [
    CategoryModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: true,
      playground: true,
      driver: ApolloDriver,
      introspection: true,
    }),
    TodoModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ec2-54-170-90-26.eu-west-1.compute.amazonaws.com',
      username: 'guvrkkyhtbhaey',
      password:
        'e04ce1d8b998c66c0d70428141350b8711efcd208ec572f587a17e7300798ff3',
      database: 'd2v46qs9th4b2a',
      entities: [__dirname + `dist/**/*.entity{.ts,.js}`],
      autoLoadEntities: true,
      synchronize: true,
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
      // logging: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
