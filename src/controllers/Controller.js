export default class Controller {

    constructor(args){
        console.info(args);
        // if(!$rootScope.loggedIn){
        //     console.error("not logged in");
        // }
    }

}
Controller.$inject = ['$rootScope'];
