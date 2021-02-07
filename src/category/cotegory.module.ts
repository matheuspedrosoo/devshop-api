import { Module } from '@nestjs/common'
import { CategoryResolver } from './category.resolver'
import { CategoryService } from './category.service'
import { Category } from './category.entity'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  providers: [CategoryService, CategoryResolver]
})
export class CategoryModule {}
