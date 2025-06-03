import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { siteConfigRoutes } from '../../config/site-config.routes';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html'
})
export class Home {
  protected siteRoutes = siteConfigRoutes;
}
