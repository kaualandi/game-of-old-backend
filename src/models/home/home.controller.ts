import { Controller, Get } from '@nestjs/common';
import { HomeService } from './home.service';

@Controller('home')
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @Get('config')
  async config() {
    return await this.homeService.config();
  }

  @Get('teams-sellers')
  async teamsSellers() {
    return await this.homeService.teamsSellers();
  }

  @Get('releases')
  async releases() {
    return await this.homeService.releases();
  }
}
