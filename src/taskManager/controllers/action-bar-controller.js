(function() {

    function ActionBarController($scope) {

        this.clearLog = function () {
            $scope.$emit('taskAppEvent', 'clearLogEvent');
        };

        this.showHideClicked = function() {
            $scope.baseController.sharedData.showDoneTasks = !$scope.baseController.sharedData.showDoneTasks;
        }
    }

    angular.module('taskMngApp').controller('ActionBarController', ['$scope', ActionBarController])
}());