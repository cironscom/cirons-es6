export default class UserListController {
    constructor(users){
        this.users = [];

        users.getUsers().then((users) => {
            console.log(users);
        });
    }
}
UserListController.$inject = ['users'];
