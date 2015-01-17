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
      },
     people: [
       {
         heading: 'Alive',
         url: '/img/person2.jpg',
         texts: [
           'Cape Cod’s Premiere Charity Kiteboarding Race',
           '26 miles. # Teams. Saving Lives.',
           'Capes for Cancer'
         ]
       },
       {
         heading: 'Empowering',
         url: '/img/person1.jpg',
         texts: [
           'Taking place on the beautiful Cape Cod at Smuggler’s Beach in South Yarmouth, Massachussets. Come enjoy an event full of fun, family, adrenaline, racing, and memories!'
         ]
       },
       {
         heading: 'Smile',
         url: '/img/person3.jpg',
         texts: ''
       }
     ]
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