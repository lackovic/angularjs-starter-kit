// app.debug.js
(() => {

    angular.module('app')

        .run(debuggingBorder => {
            if (debuggingBorder) {
                if (angular.module('app')._invokeQueue) {
                    angular.module('app')._invokeQueue.forEach(item => {
                        if (item[1] == 'component') {
                            const componentName = item[2][0];
                            const componentProperties = item[2][1];
                            if (componentProperties.templateUrl) {
                                const templateUrl = componentProperties.templateUrl;
                                delete componentProperties.templateUrl;
                                componentProperties.template = '<div class="debugging-border">Component: <b>' + componentName + '</b><div ng-include="\'' + templateUrl + '\'"></div></div>';
                            } else {
                                const template = '<div class="debugging-border">' + componentName + '<div>' + componentProperties.template + '</div></div>';
                                componentProperties.template = template;
                            }
                        }
                    });
                }
            }
        });

})();