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
         heading: 'Purpose',
         url: '/img/person2.jpg',
         texts: [
            'The Cape Crusade endeavors to support the amazing work that Athlete\'s 4 Cancer started back in 2007.'
         ]
       },
       {
         heading: '26 miles. # Teams',
         url: '/img/person1.jpg',
         texts: [
           'Taking place on the beautiful Cape Cod at Smuggler’s Beach in South Yarmouth, Massachussets.'
         ]
       },
       {
         heading: 'Capes for Cancer',
         url: '/img/person3.jpg',
         texts: [
           'Come enjoy an event full of fun, family, adrenaline, racing, and memories!'
           ]
       }
     ]
    },
    eventDates: [
      "June 6th & 7th",
      "May 30th & 31st"
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