(function() {

    function LogManagerService() {
        var logNameInStorage = 'logs';
        var debugMode = true;

        this.enableDebugLog = function(flag){
            debugMode = flag;
        }

        this.$get = function(localStorageService, DataFormatService) {
            return {
                getLogList : function() {
                    return localStorageService.get(logNameInStorage);
                },

                addLog : function(evDesc) {
                    var date = DataFormatService.getCurrentDate();
                    var log = date + evDesc;

                    var logList = localStorageService.get(logNameInStorage) || []; // if loading from local storage fail init as []
                    if(logList==null || logList==undefined) {
                        logList=[];
                    }
                    logList.push(log);
                    localStorageService.set(logNameInStorage, logList);

                    if (debugMode) {
                        console.log(log);
                    }
                },

                clearLog : function() {
                    localStorageService.remove(logNameInStorage);
                }
            }
        }
    }

    angular.module('taskMngApp').provider('LogManagerService', LogManagerService)
        .config(function(LogManagerServiceProvider) {
            LogManagerServiceProvider.enableDebugLog(false);
        });
})();