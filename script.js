jwplayer("container").setup({

		    controls: true,
		    displaytitle: true,
		    fullscreen: "false",
		    primary: 'html5',
		  
		    

		    skin: {
		    	name: 'ZonAnime',
		    },


		     
		    captions: {
		        color: '#FFF',
		         fontSize: 14,
		         backgroundOpacity: 0,
		         edgeStyle: 'raised' 
		    },

		  playlist: [
        ,
        //Begin Movies Truyen Ky Ly Tieu Long Tap 1
       {        
		    title: "",
		    description: "  ",
		    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhG-KEbUvaNOoaORyfts0eyGftb95QvyyAd-fIy_7SkRNfu4N2u3_dVUnX3ogkNhdn0aYTi9azeaiPoL2VjWayjEJcSXRFq0yH8N2y3XUDZE_9vsWOt3YpOnZiXMFhkYFhFdN9jPV-BGCR0Mzfull-C__JHg7I8Glm2xZ001TaSDSLZ_atb-YV2RA/s500/backdrop2.jpg",
		    sources: [{
		    file: "https://files.catbox.moe/lz3wzz.mp4",
		      label: '720p',
		      'type': 'mp4',
		      primary: 'html5',

		    }],
		    
		    
		 
		  }//end of movies
      ]
		});
jwplayer("container").setCaptions({
  "back": true,
  "backgroundOpacity": "32",
  "edgeStyle": "dropshadow",
  "fontSize": 14,
  "fontOpacity": 100,
  "fontScale": 0.05,
  "windowOpacity": 0,
  "color": "#ffff00"
});