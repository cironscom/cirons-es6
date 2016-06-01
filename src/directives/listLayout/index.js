export default function listLayout() {
    return {
        scope: {
            'title': '@',
            'singular': '@',
            'plural': '@',
            'steps': '=',
            'itemTemplate': '@',
            'serviceName': '@'
        },
        template: require('./template.html'),
        replace: true,
        controller: function($scope, $injector, Invoice) {

            $scope.selectedStep = null;
            $scope.setSelectedStep = (id) => { $scope.selectedStep = id; };
            $scope.items = [];

            $scope.service = null;
            if($scope.serviceName){
                $scope.service = $injector.get($scope.serviceName);
            }

            if($scope.service.list){
                $scope.service.list().then((items) => {
                    $scope.items = items;
                });
            }
        }
    };
}
