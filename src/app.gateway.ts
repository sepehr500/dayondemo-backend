import { WebSocketGateway, OnGatewayInit, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'http';
import { AirtableService } from './services/AirtableService';

@WebSocketGateway()
export class AppGateway implements OnGatewayInit {
  constructor(private readonly airtableService: AirtableService) { }
  @WebSocketServer() wss: Server;
  afterInit(): void {
    setInterval(async () => {
      try {
      const results = await this.airtableService.getStandings()
      this.wss.emit("updateStandings", results)
      } catch (error) {
        console.log(error);
      }
    }, 5000)
  }
}
