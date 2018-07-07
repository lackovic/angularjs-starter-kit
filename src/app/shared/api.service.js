// api.service.js
(() => {

    angular
        .module('app')
        .factory('apiService', ApiService);

    function ApiService(apiBase, $http) {

        return {
            get: get
        };

        ////////////

        function get(endpoint, cache) {
            return $http
                .get(`${apiBase}${endpoint}`, {
                    cache: cache
                })
                .then(response => response.data);
        }

    }

})();