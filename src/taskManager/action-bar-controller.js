(function() {

    function ActionBarController($scope) {

        this.clearLog = function () {
            $scope.$emit('emitClearLogEvent');
        };

        this.showHideClicked = function() {
            $scope.$emit('showHideClickedEvent');
        }
    }

    angular.module('taskMngApp').controller('ActionBarController', ['$scope', ActionBarController])
}());