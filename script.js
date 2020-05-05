var app = {
	episodes : [],
  list : [],
	anguish : [0, 3],

	rivalry : [2, 70],


	initialize: function() {
		var romance = [1, 71];

    console.log ('button int.');
    $('.listEpisodes').click(function (){
      console.log ('button pushed');
			app.getEpisodes();
		});
		$('.romance').click(function (){
			console.log ('romance pushed');
			app.makeHTML(romance);
		});
	},

	makeHTML: function(emotions) {
		var theHTML = '';
		//var allEpisodes = new Array();
		var allEpisodes = [];
		// call API and get all episode
		console.log("Get GoT Data");
		for (var i = 1; i < 9; i++){
			for(var j= 1; j < 11; j++){
				var myURL = 'https://api.themoviedb.org/3/tv/1399/season/' + i +'/episode/'+ j + '?api_key=a0c315784d22203a07f5dd6e18520cb3&language=en-US'
				// var allEpisodes = new Array(10);
				console.log(myURL);
				$.ajax({
					url: myURL,
					type: 'GET',
					dataType: 'json',
					error: function(err){
						console.log("Uh oh...");
						console.log(err);
					},
					success: function(data){
						console.log(data);
						app.episodes = data.name;
						// app.episodes = data.response.docs;
						// console.log(app.episodes);
						// app.makeHTML();
						//allEpisodes.push ({name:data.name,season:data.season_number,episode:data.episode_number});
						allEpisodes.push (data.name);
					}
				});
			}
		}
		// list out episodes from selected emotion
		var myStringArray = ["Hello","World"];
		console.log(myStringArray);
		var arrayLength = myStringArray.length;
		for (var i = 0; i < arrayLength; i++) {
		    console.log(myStringArray[i]);
		    //Do something
		}

		console.log(emotions);
		for (var i = 0; i < emotions.length; i++){
			theHTML += "<div class='list'>";
			console.log(emotions[i]);
			var index = emotions[i];
			var data = allEpisodes[0];
			console.log("index here: " + index);
			console.log(allEpisodes);
			console.log("HERE: " + allEpisodes[2]);
      theHTML += "<h3>" + data + "</h3>";
			// theHTML += "<h3>" + app.episodes + "</h3>";
			// theHTML += "<h3>" + number + "</h3>";
			theHTML += "</div>";
			// document.getElementById("list").innerHTML = number;
		}
		$('.container1').html(theHTML);
	},

	getEpisodes: function() {





    // var episode =
    // var season = 1;

    // var myURL = 'https://api.themoviedb.org/3/tv/1399/season/1/episode/1?api_key=a0c315784d22203a07f5dd6e18520cb3&language=en-US';
    // var myURL = 'https://api.themoviedb.org/3/tv/1399/season/' + season +'/episode/'+ episode + '?api_key=a0c315784d22203a07f5dd6e18520cb3&language=en-US'
		// var myKey = 'a0c315784d22203a07f5dd6e18520cb3';
		// var nyTimesReqURL = nyTimesURL + myNYKey;

	}



};
