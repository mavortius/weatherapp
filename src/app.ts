import { RouterConfiguration, Router } from 'aurelia-router';
import { PLATFORM } from 'aurelia-framework';

export class App {
  appTitle = 'Weather Forecast'
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router): void {
    config.title = this.appTitle;
    config.options.pushState = true;
    config.map([
      {
        route: [ '', 'home' ],
        name: 'home',
        settings: { icon: 'home' },
        moduleId: PLATFORM.moduleName('./pages/home/home'),
        nav: true,
        title: 'Home'
      },
      {
        route: 'counter',
        name: 'counter',
        settings: { icon: 'education' },
        moduleId: PLATFORM.moduleName('./pages/counter/counter'),
        nav: true,
        title: 'Counter'
      },
      {
        route: 'fetch-data',
        name: 'fetch-data',
        settings: { icon: 'th-list' },
        moduleId: PLATFORM.moduleName('./pages/fetchdata/fetchdata'),
        nav: true,
        title: 'Fetch data'
      }
    ]);

    this.router = router;
  }
}
