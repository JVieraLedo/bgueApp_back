(function (angular) {
    'use strict';

    angular
        .module('bgueAdmin.services')
        .factory('dataService', dataService);

    dataService.$inject = [];

    function dataService() {
        var factory = {};
        factory.entity = function (object) {
            return {
                articles: object.articles,
                total: object.total,
                discount: object.discount,
                price: object.price
            };
        };

        return {
            sendData: sendData,
            getDataBBDD: getDataBBDD
        };

        function sendData(bbdd, data) {
            bbdd.ref('orders/' + data.id).set({});
        }

        function getDataBBDD(url) {
            return firebase.database().ref(url).once('value');
        }

    }

})(window.angular);