export default class AuthController {

    constructor($auth, $http, $cookies, $state) {

        this.email = '';
        this.password = '';

        this.$state = $state;
        this.$auth = $auth;
        this.$http = $http;
        this.$cookies = $cookies;

    }

    login() {

        var credentials = {
            username: this.email,
            password: this.password
        };

        this.$http.post('https://system.cirons.com/sample/api/v1/auth', credentials).success((data) => {
            if (data.token) {
                this.$cookies.put('token', data.token);
                this.$auth.setToken(data.token);

                window.location = './';
            }
        });

    }

}
AuthController.$inject = ['$auth', '$http', '$cookies', '$state'];
