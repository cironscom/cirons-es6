export default function barChart() {
    return {
        scope: {
            item: '='
        },
        template: require('./template.html'),
        replace: true,
        controller: function($scope) {
            $scope.item.active = false;

            $scope.toggle = function() {
                if (!$scope.item.active) {
                    $scope.toggleHeight = $scope.item.children.length * 41;
                } else {
                    $scope.toggleHeight = 0;
                }
                $scope.item.active = !$scope.item.active;
            };
            $scope.toggleHeight = 0;
        }
    };
}
