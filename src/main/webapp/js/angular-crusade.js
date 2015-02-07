var app = angular.module('capeCrusade', ['ui.bootstrap']);

app.controller('CrusadeCtrl', ['$scope', '$sce', function($scope, $sce) {

  $scope.data = {
    name: 'Cape Crusade',
    backgroundUrl: '/img/beach.jpg',
    images: {
      logo: {
        normal: '/img/CCwebheader_46.png'
      },
      shield: {
        normal: '/img/shield.png',
        small: '/img/shield-sm.png'
      },
      facebook: '/img/facebook/FB-f-Logo__blue_29.png',
     people: [
       {
         heading: 'Purpose',
         url: '/img/person2.jpg',
         texts: [
            'The amazing work of Athletes 4 Cancer allows the estimated 14.5M survivors in the U.S. to reclaim their lives!'
         ]
       },
       {
         heading: '26 Miles 30 Teams',
         url: '/img/person1.jpg',
         texts: [
           'Taking place on the beautiful beaches of Cape Cod'
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
   links: [
          {
            name: 'Register',
            url: 'register.html'
          },
          {
            name: 'Schedule',
            url: 'schedule.html'
          },
          {
             name: 'Race Details',
             url: 'race-details.html'
            },
          {
            name: 'Sponsors',
            url: 'sponsors.html'
          },
          {
            name: 'Donate',
            url: ''
          }
        ],
    eventDates: [
      "June 6th & 7th",
      "May 30th & 31st"
    ],
    videos: [
      {
        url: $sce.trustAsResourceUrl('//player.vimeo.com/video/117349427?portrait=0&byline=0&title=0')
      },
      {
        url: $sce.trustAsResourceUrl('//player.vimeo.com/video/53171530?portrait=0&byline=0&title=0')
      }
    ],
    featurettes: [
       {
	      header: 'Athletes 4 Cancer.',
	      subheader: 'Rebuilding lives.',
	      text: 'A4C uses adventure-based experiences such as surfing as a channel of healing, achievement and life-renewal. Their programs help patients not just survive, but thrive in all aspects of life. Learn more about their amazing work <a href="http://www.athletes4cancer.org">here.</a>',
	      image: '/img/a4csurf.jpg'
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
    tips: {        	   	
 	   tipstexts:[
 	          '#1 Start fundraising early',
 	          '#2 Lose your inhibition to ask people for money',
 	          '#3 Find your personal connection',
 	          '#4 Craft a compelling message',
 	          '#5 Leverage social media',
 	          '#6 Send a personalized thank-you note to every contributor',
 	   ]
   },
   racedetails: [
                             
              {
        	      header: 'The Course.',
        	      subheader: '26 miles total.',
        	      text: 'The course will be simple and a detailed map is coming soon.  Each lap of the course will be approx. 2.5 miles and will be completed a total of 10 times in relay fashion to finish.',
        	      image: '/img/racedetails1.jpg'
              },
              {
        	      header: 'Boat Support.',
        	      subheader: 'We got you.',
        	      text: 'There will be boat support on the course.  Should you require assistance simply wave your arms in the air until the support boat acknowledges it has seen you.',
        	      image: '/img/shield.png',
                imageOnTop: true
              },
              {
        	      header: 'Safety.',
        	      subheader: 'Keep it fun.',
        	      text: 'Please keep safety in mind at all times!  This race is meant to be fun!  Abide by Right of Way rules, always respect race volunteers and support staff, and avoid crossing lines at all costs.',
        	      image: '/img/racedetails2.jpg'
              },
              {
        	      header: 'Official Rules.',
        	      subheader: 'Coming soon.',
        	      text: 'Complete rules will be emailed to all registered racers. For an easy guide to right\'s of way, you can go to, http://www.mauikiteboardingassociation.com/kiteboarding_right-of-way_rules.html',
        	      image: '/img/shield.png',
                imageOnTop: true
              }                                  	   
               
                    ], 
   register: [
         {
   	      header: 'Forming a Team.',
   	      subheader: '5 kiters each.',
   	      text: 'All levels of experience are welcomed to join the fun - You simply need to be able to ride up wind! We can help individuals connect with other kiters if needed. Just let us know!',
   	      image: '/img/group.jpg'
         },
         {
          header: 'Registration Fundraising.',
          subheader: '$1,000 per team.',
          texts: [
                  'Registration is free with your required minimum fundraising.',
                  'See the suggested fundraisng tips below',
                  'With 10 pledges of just $1 for every mile of the race, you\'re already done! It\'s that easy!',
                  '$1,500 covers all expenses to send 1 survivor to these life changing camps. Your impact is real!'
               ],
          image: '/img/shield.png',
          imageOnTop: true
         },
         {
           header: 'Racer\'s Gear.',
           subheader: 'Team packages include.',
           texts: [
			'Crusade Race Jersey',
			'Invitation to the post-race award celebration',
			'Team fundraising page to collect pledges from family, friends and co-workers',
			'Online fundraising tool kit'
           ],
           image: '/img/doucet.jpg'
         },
    
         {
	      header: '6 tips',
	      subheader: 'to elevate your fundraising',
	      text: 'With only 10 pledges of just $1 for every mile of the race, you\'re already done!#1 Start fundraising early. Timing is everything. We don\'t want people to just hit goals; we want them to exceed them! #2 Lose your inhibition to ask people for moneyYou\'re not asking for money, you\'re asking them to make an impact. Recognize this is truly a selfless act that will benefit others and be proud. Others will appreciate and respect your enthusiasm for the cause. #3 Find your personal connection You must have conviction about the work you\'re supportting and the people who benefit from it. Some have very direct links to the cause. #4 Craft a compelling message Your message has to be impactful and explain why you are raising money for Athletes 4 Cancer and why the charity deserves it. Let the strength of your story draw the appropriate donations. And remember to ask them to forward the request on to others who may support the cause.#5 Leverage social media Tell your story on Facebook and Twitter. People will "like" and retweet your story to others who may donate. #6 Send a personalized thank-you note to every contributo Make sure that everyone who makes a donation receives a personal word of thanks from you. Use a photo from the event in your thank-you!',
	      image: '/img/shield.jpg'
         },
         {
             header: '6 tips',
             subheader: 'to evelvate your fundraising.',
             texts: [
  			'With only 10 pledges of just $1 for every mile of the race, you\'re already done!',  			
  			'Timing is everything. We don\'t want people to just hit goals; we want them to exceed them!',  			  
  			'You\'re not asking for money, you\'re asking them to make an impact. Recognize this is truly a selfless act that will benefit others and be proud. Others will appreciate and respect your enthusiasm for the cause.',  			
  			'You must have conviction about the work you\'re supportting and the people who benefit from it. Some have very direct links to the cause.',  			
  			'Your message has to be impactful and explain why you are raising money for Athletes 4 Cancer and why the charity deserves it. Let the strength of your story draw the appropriate donations. And remember to ask them to forward the request on to others who may support the cause.',  			
  			'Tell your story on Facebook and Twitter. People will "like" and retweet your story to others who may donate.',  			
  			'Make sure that everyone who makes a donation receives a personal word of thanks from you. Use a photo from the event in your thank-you!'
             ],             
             image: '/img/shield.png'
            	 
           },
           {
        	      header: 'Volunteers.',
        	      subheader: 'We need your help!',
        	      text: 'Want to participate, but don\'t feel up to the race?  We will need plenty of support on race day. If you are interest in volunteering please email us and we will find a fun way to get you involved and help the cause. You can cheer on your friends and be an important part of making this event a success! ',
        	      image: '/img/cleanup.jpg'
           }
                             	   
          
               ],
          
                
    
    schedule: {
    	events: [
	     {
	         heading: 'May 30.31 / June 6.7',
	         icon: 'fa-calendar',
	         text: 
	           'While we chase the wind, 2 weekends are held for proper conditions. A 48 hour notice will be given.'
	       },
    	{
         heading: 'Day of the Race',
         icon: 'fa-clock-o',
         texts: [
            '7:45a Volunteer meeting',
            '8:15a racer registration opens',
            '9:00a Skipper\'s meeting covers all race rules and determines start time',
            'Race start time: Determined by forecast',
            '7:00p Award celebration'
         ]
       },
       {
         heading: 'Award Celebration',
         icon: 'fa-headphones',
         text: 'Includes food, drinks, silent auction, raffle and prizes. Entry is free with registration! Additional tickets available for $15 in advance or $20 at the door.'
       }
    	],
    	featurettes: [
          {
   	      header: 'Athletes 4 Cancer.',
   	      subheader: 'Rebuilding lives.',
   	      text: 'Being a wind dependent event we have selected two weekends to run the race.  We are targeting the first weekend of May 30th/31st however are holding June 6th/7th as a back up.  Please set both weekends aside to make sure you can participate!',
   	      image: '/img/group.jpg'
          },         
         {
           header: 'Harness the elements.',
           subheader: 'Find your peace.',
           text: 'Based on the forecast we will make a call on May 27th, and then provide 48 hour notice as to the exact day.',
           image: '/img/liftoff.jpg'
         }
       ]
    },
  
    sponsors: [
       {
	      header: 'Gold Sponsors',
	      image: '/img/Gold sponsors.png',
	      text: ''
       }
	],
	details: {
		
	}
    
  };

}]);

app.controller('CarouselCtrl', ['$scope', function ($scope) {
  $scope.carousel = {};
}]);