const getMonthName = function() {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    let d = new Date();

    return monthNames[d.getMonth()].toLowerCase();
}

export default function run($rootScope, $auth, $state, $cookies) {

    // is user authenticated?
    $rootScope.loggedIn = $auth.isAuthenticated();

    if (!$rootScope.loggedIn) {
        $state.go('login');
    }

    $rootScope.$on('$stateChangeSuccess', function(event, toState) {
        $rootScope.bodyClass = toState.name;
        $rootScope.addButton = null;
    });

    $rootScope.steps = {
        invoice: [{
            "id": "draft",
            "title": "Draft",
            "icon": "write",
            "description": "Add information",
            "active": false,
            "completed": true,
            "disabled": false,
            "color": "yellow"
        }, {
            "id": "booked",
            "title": "Booked",
            "icon": "book",
            "description": "Invoice is booked",
            "active": false,
            "completed": true,
            "disabled": false,
            "color": "orange"
        }, {
            "id": "sent",
            "title": "Sent",
            "icon": "comment outline",
            "description": "Awaiting payment",
            "active": false,
            "completed": true,
            "disabled": false,
            "color": "blue"
        }, {
            "id": "paid",
            "title": "Paid",
            "icon": "check outline",
            "description": "Invoice is paid",
            "active": true,
            "completed": false,
            "disabled": false,
            "color": "green"
        }]
    };

    $rootScope.stepTitle = {
        invoice: {}
    };
    
    for(let i = 0; i < $rootScope.steps.invoice.length; i++){
        let step = $rootScope.steps.invoice[i];
        $rootScope.stepTitle.invoice[step.id] = step.title;
    }

    $rootScope.$on('$stateChangeStart', function(event, toState) {
        if (!$rootScope.loggedIn) {
            if (toState.name != 'login') {
                event.preventDefault();
            }
        }
    });

    $rootScope.logout = function() {
        $auth.logout();
        $cookies.remove('token');
        window.location.reload();
    };

    $rootScope.monthName = getMonthName();

}
run.$inject = ['$rootScope', '$auth', '$state', '$cookies'];
