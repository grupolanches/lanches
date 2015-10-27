var app = angular.module('lanches', []);
var urlPath = "http://localhost:8080/lanches/api/produto/";

app.controller('produtoCtrl', function ($scope, $http, $timeout) {
    $scope.produtos = [];
    $scope.produto = {};

    $scope.loadProdutos = function () {
        $http.get(urlPath, {cache: false})
                .success(function (response) {
                    //console.log(response);
                    $scope.produtos = response;
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
            $scope.produto = response;
            jQuery('[href="#formProduto"]')[0].click();
        });
    };

    $scope.save = function (produto) {
        var values = JSON.stringify(produto);
        console.log(values);
        
        var method;
        var url;
        if (produto.id != null) {
            method = 'PUT';
            url = urlPath + produto.id;
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
        $scope.loadProdutos();
    }, 2000);
});