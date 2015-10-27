/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var app = angular.module('lanches', []);
var urlPath = "http://localhost:8080/lanches/api/pedidos/";

app.controller('pedidoCtrl', function ($scope, $http, $timeout) {
    $scope.pedidos = [];
    $scope.cliente = {};

    $scope.loadPedidos = function () {
        $http.get(urlPath, {cache: false})
                .success(function (response) {
                    //console.log(response);
                    $scope.pedidos = response;
                });
        $scope.config = {
            itemsPerPage: 5,
            fillLastPage: true
        }
    };

    $scope.delete = function (id) {
        $http({
            url: urlPath + id,
            method: 'DELETE'
        }).success(function (status) {
            console.log("Success: ");
            console.log(status);
        });
    };
    
    $scope.update = function(id) {
        $http({
            url: urlPath + id,
            method: 'GET'
        }).success(function (response) {
            $scope.cliente = response;
            jQuery('[href="#formPedido"]')[0].click();
        });
    };

    $scope.save = function (pedido) {
        var values = JSON.stringify(pedido);
        console.log(values);
        
        var method;
        var url;
        if (pedido.id != null) {
            method = 'PUT';
            url = urlPath + pedido.id;
        } else {
            method = 'POST';
            url = urlPath;
        }
        
        $http({
            url: url,
            method: method,
            data: values,
            headers: {'Content-Type': 'application/json; charset=utf-8'}
        }).success(function (status) {
            console.log("Success: ");
            console.log(status);
            jQuery('[href="#tabela"]')[0].click();
        }).error(function (status) {
            console.log("Error: ");
            console.log(status);
        });
    };

    var interval = setInterval(function () {
        $scope.loadPedidos();
    }, 2000);
});

