(function(){

    function DataFormatService() {
        var addLeadingZero = function(num){
            if(num<10){
                num = '0' + num;
            }
            return num;
        }

        this.getCurrentDate = function(){
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
    }

    angular.module('taskMngApp').service('DataFormatService', DataFormatService);

})();