var app = angular.module('capeCrusade', ['ui.bootstrap']);

app.controller('CrusadeCtrl', ['$scope', '$sce', function($scope, $sce) {

  $scope.data = {
    name: 'Cape Crusade',
    backgroundUrl: '/img/beach.jpg',
    images: {
      logo: {
        normal: '/img/jlogo.png'
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
            'The Cape Crusade endeavors to support the amazing work that Athletes 4 Cancer started back in 2007.'
         ]
       },
       {
         heading: '26 miles. 30 Teams',
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
     ],
      schedule: [
               {
                 heading: 'Date',
                 url: '/img/person2.jpg',
                 texts: [
                    'The Cape Crusade endeavors to support the amazing work that Athletes 4 Cancer started back in 2007.'
                 ]
               },
               {
                 heading: 'Time',
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
    /*eventDates: [
      "June 6th & 7th",
      "May 30th & 31st"
    ],*/
    
    videos: [
      {
        url: $sce.trustAsResourceUrl('//player.vimeo.com/video/53171530?portrait=0&byline=0&title=0')
      },
      {
        url: $sce.trustAsResourceUrl('//player.vimeo.com/video/53171530?portrait=0&byline=0&title=0')
      }
    ],
    featurettes: [
      {
          header: 'Athletes 4 Cancer.',
          subheader: 'Rebuilding lives.',
          text: 'Athletes 4 Cancer is dedicated to enriching lives impacted by cancer through the healing power of the elements and the tenacity of the human spirit. Essentially, Athletes 4 Cancer rebuilds lives after cancer.',
          image: '/img/unnamed.jpg'
        },
      {
        header: 'Our commitment.',
        subheader: 'Superhuman.',
        text: 'Our logo represents our commitment to fight for what we believe in. It combines the ocean, always full of uncertainty and joy, with a shield to protect us from opposition; and when spun among the waters we ride, a cape to remind us of the superhuman strength it takes for those dealing with cancer.',
        image: '/img/shield.png',
        imageOnTop: true
      },
      {
          header: 'Harness the elements.',
          subheader: 'Find your peace.',
          text: 'Kiteboarders harness the elements for sport, but we all take much more from the beaches we visit. Call it mental clarify or spiritual, energy or renewal, for all of us it is therapeutic. We challenge our community to help share these benefits with those who have survived cancer.',
          image: '/img/liftoff.jpg'
        }
    ],
    featurettes2: [
                  {
                      header: 'Athletes 4 Cancer.',
                      subheader: 'Rebuilding lives.',
                      text: 'Athletes 4 Cancer is dedicated to enriching lives impacted by cancer through the healing power of the elements and the tenacity of the human spirit. Essentially, Athletes 4 Cancer rebuilds lives after cancer.',
                      image: '/img/unnamed.jpg'
                    },
                  {
                    header: 'Our commitment.',
                    subheader: 'Superhuman.',
                    text: 'Our logo represents our commitment to fight for what we believe in. It combines the ocean, always full of uncertainty and joy, with a shield to protect us from opposition; and when spun among the waters we ride, a cape to remind us of the superhuman strength it takes for those dealing with cancer.',
                    image: '/img/shield.png',
                    imageOnTop: true
                  },
                  {
                      header: 'Harness the elements.',
                      subheader: 'Find your peace.',
                      text: 'Kiteboarders harness the elements for sport, but we all take much more from the beaches we visit. Call it mental clarify or spiritual, energy or renewal, for all of us it is therapeutic. We challenge our community to help share these benefits with those who have survived cancer.',
                      image: '/img/liftoff.jpg'
                    }
                ],
    links: [
      {
        name: 'Home',
        url: 'http://www.capecrusade.org'
      },
      {
        name: 'Register',
        url: '/register.html'
      },
      {
          name: 'Schedule',
          url: '/schedule.html'
        },
        {
            name: 'Event Details',
            url: '/details.html'
          },
      {
        name: 'Sponsors',
        url: '/sponsors.html'
      },
      {
        name: 'Donate',
        url: '/donate.html'
      }
    ]
  };

}]);

app.controller('CarouselCtrl', ['$scope', function ($scope) {
  $scope.carousel = {};
}]);