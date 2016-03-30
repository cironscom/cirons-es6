# Cirons ES6

This is a repo where Cirons is rebuilt using `angular`, `babel`, `webpack` and `ES6`.

#### Contributors
* Philip Andersson (Administrator)

---
Some articles and information is available in the **[Links](#links)** seciton.

## Coding Standards

######TOC
1. [App.js](#appjs)
2. [Components](#components)
3. [Service](#service)
4. [Controller](#controller)

---

### App.js
```javascript
import angular from 'angular';
import uirouter from 'angular-ui-router';

// configs
import routing from './app.config';
import services from './services';

import '../style/app.css';

let app = () => {
    return {
        template: require('./app.html'),
        controller: 'AppCtrl',
        controllerAs: 'app'
    }
};

const MODULE_NAME = 'app';

export default angular.module(MODULE_NAME, [uirouter, services])
    .config(routing)
    .directive('app', app)
    .name;
```


### Components
**Folder structuring:**
* components
    * **component-name**
        * index.js `module registration`
        * \*.controller.js
        * \*.service.js

###### index.js
```javascript
import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './home.routes';
import HomeController from './home.controller';

export default angular.module('app.home', [uirouter])
	.config(routing)
	.controller('HomeController', HomeController)
	.name;
```

### Service
**Folder structuring:**
* services
    * index.js `service registration`
    * **[service-name].service.js**

###### Service module
```javascript
export default class Users {
	constructor($http){
        this.users = null;
	}

	getUsers() {
        if(this.users){
            return this.users;
        }
		return $http.get('http://...').then((list) => {
            this.users = list.data;
            return list.data;
        });
	}

    updateUser(id, data){
        return $http.put('http://...', data).then((updated) => {
            this.users = null;
            return list.data;
        });
    }
}

Users.$inject = ["$http"];
```

###### index.js `service registration`
```javascript
import angular from 'angular';
import Users from './users.service.js';

export default angular.module('app.services', [])
  .service('users', Users)
  .name;
```

### Controller

```javascript
import PageController from './page.controller.js';

export default class HomeController extends PageController {
  constructor(users) {
      super("<Page Title>");
      this.users = [];
      this.userService = users;

      this.getUsers();
  }

  getUsers(){
      this.userService.getUsers().then((users) => {
          this.users = users;
      });
  }
}

HomeController.$inject = ['users'];
```

## Links

* http://blog.thoughtram.io/angularjs/es6/2015/01/23/exploring-angular-1.3-using-es6.html
* http://angular-tips.com/blog/2015/06/using-angular-1-dot-x-with-es6-and-webpack/
* https://github.com/preboot/angular-webpack
