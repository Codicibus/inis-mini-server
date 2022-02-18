import { Controller, Get, Post, Body, Delete, Put, Query, UseFilters } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ArticleService } from './article.service';
import { CreateArticleDto, FindArticleDto, RemoveArticleDto, UpdateArticleDto } from './dto';

@Controller('article')
@ApiTags('文章模块')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get('find')
  find(@Query() query: FindArticleDto) {
    return this.articleService.find(query);
  }

  @Post('create')
  create(@Body() body: CreateArticleDto) {
    return this.articleService.create(body);
  }

  @Put('update')
  update(@Query('id') id: number, @Body() body: UpdateArticleDto) {
    return this.articleService.update(id, body);
  }

  @Delete('remove')
  remove(@Query('id') id: RemoveArticleDto) {
    return this.articleService.remove(id);
  }
}
