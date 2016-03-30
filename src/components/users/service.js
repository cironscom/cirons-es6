export default class Users {
    constructor($http) {
        this.http = $http;
        this.users = null;
    }

    getUsers() {
        if (this.users) {
            return this.users;
        }
        return this.http.get('http://...').then((list) => {
            this.users = list.data;
            return list.data;
        });
    }

    updateUser(id, data) {
        return this.http.put('http://...', data).then((updated) => {
            this.users = null;
            return updated.data;
        });
    }
}

Users.$inject = ['$http'];
