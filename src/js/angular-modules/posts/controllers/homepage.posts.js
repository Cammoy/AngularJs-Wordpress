'use strict';

angular.module('posts')
    .controller('HomepagePostsCtrl', [
        '$scope',
        '$Posts',
        function ( $scope, $Posts ) {

            $scope.posts = null;

            console.log('test');

            $Posts.getPosts( function(_data){
                $scope.posts = _data;
            });


        }
    ]);