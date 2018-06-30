// app.debug.js
(function () {
    'use strict';

    angular.module('app')

        .run(function (debuggingBorder) {
            if (debuggingBorder) {
                if (angular.module('app')._invokeQueue) {
                    angular.module('app')._invokeQueue.forEach(function (item) {
                        if (item[1] == 'component') {
                            var componentName = item[2][0];
                            var componentProperties = item[2][1];
                            if (componentProperties.templateUrl) {
                                var templateUrl = componentProperties.templateUrl;
                                delete componentProperties.templateUrl;
                                componentProperties.template = '<div class="debugging-border">Component: <b>' + componentName + '</b><div ng-include="\'' + templateUrl + '\'"></div></div>';
                            } else {
                                var template = '<div class="debugging-border">' + componentName + '<div>' + componentProperties.template + '</div></div>';
                                componentProperties.template = template;
                            }
                        }
                    });
                }
            }
        });

})();