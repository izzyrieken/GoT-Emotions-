

var app = {
	episodes : [],
  list : [],

	initialize: function() {
    console.log ('button int.');
    $('.listEpisodes').click(function (){
      console.log ('button pushed');
			app.getEpisodes();

		});

	},

	makeHTML: function() {
		var theHTML = '';
		// for (var i = 0; i < app.episodes.length; i++){
    for (var i = 0; i < 1; i++){
			theHTML += "<div class='list'>";
      // theHTML += "<h3>" + app.episodes[i].name + "</h3>";
			theHTML += "<h3>" + app.episodes + "</h3>";
			theHTML += "</div>";
		}
		$('.container').html(theHTML);
	},

	getEpisodes: function() {
		console.log("Get GoT Data");
    var episode = 1;
    var season = 1;

    // var myURL = 'https://api.themoviedb.org/3/tv/1399/season/1/episode/1?api_key=a0c315784d22203a07f5dd6e18520cb3&language=en-US';
    var myURL = 'https://api.themoviedb.org/3/tv/1399/season/' + season +'/episode/'+ episode + '?api_key=a0c315784d22203a07f5dd6e18520cb3&language=en-US'
		// var myKey = 'a0c315784d22203a07f5dd6e18520cb3';
		// var nyTimesReqURL = nyTimesURL + myNYKey;
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
				app.makeHTML();
			}
		});
	}



};
