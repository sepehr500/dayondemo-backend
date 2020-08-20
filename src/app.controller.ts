import { Controller, Get, UseInterceptors, CacheInterceptor, Post, Body } from '@nestjs/common';
import { AirtableService, BingoSubmissonDto } from './services/AirtableService';

@Controller()
@UseInterceptors(CacheInterceptor)
export class AppController {
  constructor(private readonly airtableService: AirtableService) { }

  @Post()
  async bingoFormSubmission(@Body() submitBingoDto: BingoSubmissonDto): Promise<any> {
    return await this.airtableService.submitBingoForm(submitBingoDto);
  }

  @Get()
  async getStandings(): Promise<any> {
    return await this.airtableService.getStandings()
  }
}
