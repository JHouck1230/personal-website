import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  model = {
    angular: 0,
    bootstrap: 0,
    bower: 0,
    chai: 0,
    cordova: 0,
    css: 0,
    d3: 0,
    express: 0,
    firebase: 0,
    git: 0,
    gulp: 0,
    html: 0,
    ionic: 0,
    jquery: 0,
    js: 0,
    karma: 0,
    less: 0,
    materialize: 0,
    mocha: 0,
    mongo: 0,
    mysql: 0,
    ngcli: 0,
    node: 0,
    npm: 0,
    pug: 0,
    pure: 0,
    react: 0,
    sass: 0,
    scss: 0,
    stormpath: 0,
    testing: 0,
    typescript: 0,
    workflow: 0,
  };
  timer = {
    angular: null,
    bootstrap: null,
    bower: null,
    chai: null,
    cordova: null,
    css: null,
    d3: null,
    express: null,
    firebase: null,
    git: null,
    gulp: null,
    html: null,
    ionic: null,
    jquery: null,
    js: null,
    karma: null,
    less: null,
    materialize: null,
    mocha: null,
    mongo: null,
    mysql: null,
    ngcli: null,
    node: null,
    npm: null,
    pug: null,
    pure: null,
    react: null,
    sass: null,
    scss: null,
    stormpath: null,
    testing: null,
    typescript: null,
    workflow: null,
  };

  startProgress(item, level, time) {
    this.model[item] = 0;
    this.timer[item] = setTimeout(() => {
      for (let i = 0; i < level; ++i) {
        this.model[item]++;
      }
    }, time);
  }

  toggleCollapse(event, item) {
    switch (item) {
      case 'js':
        if (event) {
          this.startProgress('angular', 100, 500);
          this.startProgress('typescript', 90, 750);
          this.startProgress('express', 90, 1000);
          this.startProgress('node', 95, 1250);
          this.startProgress('d3', 75, 1500);
          this.startProgress('mongo', 75, 1750);
          this.startProgress('mysql', 75, 2000);
          this.startProgress('jquery', 95, 2250);
          this.startProgress('react', 50, 2500);
          this.startProgress('firebase', 55, 2750);
          this.startProgress('stormpath', 50, 3000);
          this.startProgress('cordova', 40, 3250);
        } else {
          this.model.angular = 0;
          clearTimeout(this.timer.angular);
          this.model.typescript = 0;
          clearTimeout(this.timer.typescript);
          this.model.express = 0;
          clearTimeout(this.timer.express);
          this.model.node = 0;
          clearTimeout(this.timer.node);
          this.model.d3 = 0;
          clearTimeout(this.timer.d3);
          this.model.mongo = 0;
          clearTimeout(this.timer.mongo);
          this.model.mysql = 0;
          clearTimeout(this.timer.mysql);
          this.model.jquery = 0;
          clearTimeout(this.timer.jquery);
          this.model.react = 0;
          clearTimeout(this.timer.react);
          this.model.firebase = 0;
          clearTimeout(this.timer.firebase);
          this.model.stormpath = 0;
          clearTimeout(this.timer.stormpath);
          this.model.cordova = 0;
          clearTimeout(this.timer.cordova);
        }
        break;
      case 'css':
        if (event) {
          this.startProgress('bootstrap', 100, 500);
          this.startProgress('materialize', 100, 750);
          this.startProgress('scss', 100, 1000);
          this.startProgress('html', 100, 1250);
          this.startProgress('pug', 90, 1500);
          this.startProgress('ionic', 90, 1750);
          this.startProgress('pure', 90, 2000);
          this.startProgress('sass', 100, 2250);
          this.startProgress('less', 100, 2500);
        } else {
          this.model.bootstrap = 0;
          clearTimeout(this.timer.bootstrap);
          this.model.materialize = 0;
          clearTimeout(this.timer.materialize);
          this.model.scss = 0;
          clearTimeout(this.timer.scss);
          this.model.html = 0;
          clearTimeout(this.timer.html);
          this.model.pug = 0;
          clearTimeout(this.timer.pug);
          this.model.ionic = 0;
          clearTimeout(this.timer.ionic);
          this.model.pure = 0;
          clearTimeout(this.timer.pure);
          this.model.sass = 0;
          clearTimeout(this.timer.sass);
          this.model.less = 0;
          clearTimeout(this.timer.less);
        }
        break;
      case 'workflow':
        if (event) {
          this.startProgress('npm', 100, 500);
          this.startProgress('ngcli', 100, 750);
          this.startProgress('git', 95, 1000);
          this.startProgress('bower', 100, 1250);
          this.startProgress('gulp', 90, 1500);
        } else {
          this.model.npm = 0;
          clearTimeout(this.timer.npm);
          this.model.ngcli = 0;
          clearTimeout(this.timer.ngcli);
          this.model.git = 0;
          clearTimeout(this.timer.git);
          this.model.bower = 0;
          clearTimeout(this.timer.bower);
          this.model.gulp = 0;
          clearTimeout(this.timer.gulp);
        }
        break;
      case 'testing':
        if (event) {
          this.startProgress('mocha', 80, 500);
          this.startProgress('chai', 80, 750);
          this.startProgress('karma', 65, 1000);
        } else {
          this.model.mocha = 0;
          clearTimeout(this.timer.mocha);
          this.model.chai = 0;
          clearTimeout(this.timer.chai);
          this.model.karma = 0;
          clearTimeout(this.timer.karma);
        }
        break;
    }
  }

  ngOnInit() {
    this.startProgress('js', 100, 500);
    this.startProgress('css', 100, 1000);
    this.startProgress('workflow', 100, 1500);
    this.startProgress('testing', 80, 2000);
  }

}
