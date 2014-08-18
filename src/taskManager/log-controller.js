( function() {

    function LogActionController($scope) {

        var addLeadingZero = function(num){
            if(num<10){
                num = '0' + num;
            }
            return num;
        }

        var getCurrentDate = function(){
            var curr = new Date();
            var day = addLeadingZero(curr.getDate());
            var month = addLeadingZero(curr.getMonth()+1); //January is 0!
            var year = curr.getFullYear().toString().substring(2,4);
            var hour = addLeadingZero(curr.getHours());
            var min = addLeadingZero(curr.getMinutes());
            var sec = addLeadingZero(curr.getSeconds());

            curr = day + '/' + month + '/' + year + ' ' + hour + ':' + min + ':' + sec;
            return curr;
        }

        $scope.logsList = [];

        var logAction = function(actionDesc) {
            var date = getCurrentDate();
            var log = date + actionDesc;
            $scope.logsList.push(log);
        }

        $scope.$on('logAddTaskEvent', function(ev, task){
            logAction(' - new task added');
        });

        $scope.$on('logUpdateTaskEvent', function(ev, task){
            logAction(' - updated task');
        });

        $scope.$on('logRemoveTaskEvent', function(ev, task){
            logAction(' - task removed');
        });

        $scope.$on('logDoneTaskEvent', function(ev, done){
            if (done) {
                logAction(' - task done');
            } else {
                logAction(' - task un-done');
            }
        });

        $scope.$on('broadcastClearLogEvent', function() {
            $scope.logsList = [];
        });
    }

    angular.module('taskMngApp').controller('LogActionController', ['$scope', LogActionController])

})();