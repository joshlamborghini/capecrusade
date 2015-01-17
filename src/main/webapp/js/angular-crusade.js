var app = angular.module('capeCrusade', ['ui.bootstrap']);

app.controller('CrusadeCtrl', ['$scope', '$sce', function($scope, $sce) {

  $scope.data = {
    name: 'Cape Crusade',
    backgroundUrl: '/img/beach.jpg',
    images: {
      logo: {
        normal: '/img/cclogo.png'
      },
      shield: {
        normal: '/img/shield.png',
        small: '/img/shield-sm.png'
      }
    },
    dates: [
      "May 30th & 31st",
      "June 6th & 7th"
    ],
    videos: [
      {
        url: $sce.trustAsResourceUrl('//player.vimeo.com/video/53171530?portrait=0&byline=0&title=0')
      },
      {
        url: $sce.trustAsResourceUrl('//player.vimeo.com/video/53171530?portrait=0&byline=0&title=0')
      }
    ],
    links: [
      {
        name: 'About',
        url: ''
      },
      {
        name: 'Sign Up',
        url: ''
      },
      {
        name: 'Sponsors',
        url: ''
      },
      {
        name: 'Schedule',
        url: ''
      },
      {
        name: 'Donate',
        url: ''
      }
    ]
  };

}]);

app.controller('CarouselCtrl', ['$scope', function ($scope) {
  $scope.carousel = {};
}]);