import { httpResource } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AgentDataService {
  private apiAgents = environment.apiAgents;
  private urlAgents = "/v1/playground/agents";
  getAgents() {
    return httpResource(() => this.apiAgents + this.urlAgents, {
      parse: (response: any) => response.data
    });
  }
}



