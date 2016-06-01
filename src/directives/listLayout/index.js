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
        controller: function($scope, $injector, $timeout, $filter) {

            $scope.selectedStep = null;
            $scope.setSelectedStep = (id) => { $scope.selectedStep = id; };
            $scope.items = [];
            $scope.searchText = "";

            $scope.service = null;
            if($scope.serviceName){
                $scope.service = $injector.get($scope.serviceName);
            }

            $scope.loadingText = "Loading " + $scope.plural.toLowerCase();
            $timeout(() => {
                $scope.loadingText = "Still loading...";
            }, 5000);

            if($scope.service.list){
                $scope.service.list().then((items) => {
                    $scope.items = items;
                });
            }

            $scope.listFilter = (item) => {
                if($scope.selectedStep && $scope.selectedStep != item.step){
                    return false;
                }

                if($scope.searchText.length >= 1){
                    let contactName = item.contact ? item.contact.name : "";
                    if(
                        contactName.toLowerCase().indexOf($scope.searchText.toLowerCase()) < 0 &&
                        item.invoice_no.toString().indexOf($scope.searchText) < 0
                    ){
                        return false;
                    }
                }

                return true;
            };

            $scope.filteredItems = () => {
                let items = $scope.items;

                return items;
            };
        }
    };
}
