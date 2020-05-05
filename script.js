var app = {
	episodes : [],
  list : [],

	initialize: function() {
		var romance = [12, 24, 52, 29, 32, 59, 64, 43, 61, 67];
		var anguish = [71, 72, 13, 4, 10, 28, 36, 56, 33, 48, 23, 15, 18, 68, 69, 22, 14, 37, 45 ];
		var competitive = [25, 46, 39, 70, 38, 11, 34, 35, 53, 58, 62, 5, 9, 6];
		var triumphant = [2, 3, 27, 54, 65, 30, 41, 44 , 51, 7, 8, 44, 21, 40, 66 ];
		var sinister = [26, 47, 63, 19, 20, 55, 42, 31, 57, 60, 16, 17, 49, 50];

    console.log ('button int.');
    $('.listEpisodes').click(function (){
      console.log ('button pushed');
			app.getEpisodes();
		});
		$('.romance').click(function (){
			console.log ('romance pushed');
			app.makeHTML(romance);
		});
		$('.anguish').click(function (){
			console.log ('romance pushed');
			app.makeHTML(anguish);
		});
		$('.competitive').click(function (){
			console.log ('romance pushed');
			app.makeHTML(competitive);
		});
		$('.triumphant').click(function (){
			console.log ('romance pushed');
			app.makeHTML(triumphant);
		});
		$('.sinister').click(function (){
			console.log ('romance pushed');
			app.makeHTML(sinister);
		});
	},

	makeHTML: function(emotions) {

		var theHTML = '';
		//var allEpisodes = new Array();
		var allEpisodes = [];
		// call API and get all episode
		console.log("Get GoT Data");
		for (var i = 0; i < emotions.length; i++){
			  var index = emotions[i];
				console.log("index "+index);
				// calculate season & episode
				if (index < 60) {
					season = Math.floor(index/10);
					episode = index%10;
				} else if (index < 67) {
					season = 7;
					episode = (index-60)%7;
				} else {
					season = 8;
					episode = (index-67)%6;
				}
				console.log("season,episode= "+season+","+episode);
				// call api to get title
				var myURL = 'https://api.themoviedb.org/3/tv/1399/season/' + season +'/episode/'+ episode + '?api_key=a0c315784d22203a07f5dd6e18520cb3&language=en-US'
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
						//app.episodes = data.name;
						// app.episodes = data.response.docs;
						// console.log(app.episodes);
						// app.makeHTML();
						//allEpisodes.push ({name:data.name,season:data.season_number,episode:data.episode_number});
						//allEpisodes.push (data.name);
						// theHTML += "<div class='list' id='elementID'>";
			      // theHTML += "";
						// theHTML += "</div>";
						// $('.container1').html(theHTML);

						theHTML += "<div class='list' >";
			      theHTML += "<h3>" + data.name + "</h3>";
						theHTML += "</div>";
						// document.getElementById(container1).innerHTML = "";
						$('.container1').html(theHTML);



					}
				});
		}

		// console.log(emotions);
		// for (var i = 0; i < emotions.length; i++){
		// 	theHTML += "<div class='list'>";
		// 	console.log(emotions[i]);
		// 	var index = emotions[i];
		// 	var data = allEpisodes[0];
		// 	console.log("index here: " + index);
		// 	console.log(allEpisodes);
		// 	console.log("HERE: " + allEpisodes[2]);
    //   theHTML += "<h3>" + data + "</h3>";
		// 	// theHTML += "<h3>" + app.episodes + "</h3>";
		// 	// theHTML += "<h3>" + number + "</h3>";
		// 	theHTML += "</div>";
		// 	// document.getElementById("list").innerHTML = number;
		// }

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
