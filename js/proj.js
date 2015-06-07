
var init = function() {

    var fb_users = loadFbUsers();

    
    var user_input = document.getElementById('fb-user').value;
    //var user_input = "barack obama";
    if (user_input === null || user_input.length < 1) {
	alert("Please enter a valid Facebook user name!");
	return;
    }

    var countdown = 1000000;
    while (countdown > 0) {
	countdown--;
    }

    var fb_user;
    for (var i = 0; i < fb_users.length; i++) {
	if (fb_users[i][0].toUpperCase() === user_input.toUpperCase()) {
	    fb_user = fb_users[i];
	    break;
	}
    }
    var tw_users = getTwUser(user_input);
    var scores = new Array();
    var fb_verified = fb_user[6];
    
    for (var i = 0; i < tw_users.length; i++) {
	var scr = tw_users[i][6];
	scores.push(scr);
    }

    console.log("FB User:");
    console.log(fb_user);
    console.log(".");
    console.log("TW Users:");
    for (var i = 0; i < tw_users.length; i++) {
	console.log("--------------------------------------------------------------");
	console.log(tw_users[i]);
	console.log(scores[i]);
    }

    var node1 = document.getElementById('fb_profile');
    var node2 = document.getElementById('tw_profile');
    var node3 = document.getElementById('profile_separator');
    while (node1.hasChildNodes()) {
	node1.removeChild(node1.firstChild);
    }
    while (node2.hasChildNodes()) {
	node2.removeChild(node2.firstChild);
    }
    while (node3.hasChildNodes()) {
	node3.removeChild(node3.firstChild);
    }

    var fb_profile = document.getElementById('fb_profile').innerHTML;
    var tw_profile = document.getElementById('tw_profile').innerHTML;
    var profile_separator = document.getElementById('profile_separator').innerHTML;
    fb_profile = fb_profile.concat("<h4 stye=\"font-color:#4c66a4;\"><b>Facebook profile:</b></h4>");
    if (fb_user[0] !== null) {
	fb_profile = fb_profile.concat("<b>Name:</b> " + fb_user[0] + "<br/>");
    }
    if (fb_user[1] !== null) {
	fb_profile = fb_profile.concat("<b>Facebook username:</b> " + fb_user[1] + "<br/>");
    }
    if (fb_user[2] !== null) {
	fb_profile = fb_profile.concat("<b>Description:</b> " + fb_user[2] + "<br/>");
    }
    if (fb_user[3] !== null) {
	fb_profile = fb_profile.concat("<b>Location:</b> " + fb_user[3] + "<br/>");
    }
    if (fb_user[4] !== null) {
	fb_profile = fb_profile.concat("<b>Email:</b> " + fb_user[4] + "<br/>");
    }
    if (fb_user[5] !== null) {
	fb_profile = fb_profile.concat("<b>Website:</b> " + fb_user[5] + "<br/>");
    }
    if (fb_user[6] !== null) {
	fb_profile = fb_profile.concat("<b>Verified </b><span class=\"glyphicon glyphicon-ok\" aria-hidden=\"true\"></span><br/>");
    }
    profile_separator = profile_separator.concat("<hr style=\"color:#c00; background-color:#c00;\" size=\"7\"><br/>");

    for (var i = 0; i < tw_users.length; i++) {
	tw_profile = tw_profile.concat("<h4><b>Twitter profile:</b></h4>");
	if (tw_users[i][0] !== null) {
	    tw_profile = tw_profile.concat("<b>Name:</b> " + tw_users[i][0] + "<br/>");
	}
	if (tw_users[i][1] !== null) {
	    tw_profile = tw_profile.concat("<b>Twitter handle:</b> " + tw_users[i][1] + "<br/>");
	}
	if (tw_users[i][2] !== null) {
	    tw_profile = tw_profile.concat("<b>Description:</b> " + tw_users[i][2] + "<br/>");
	}
	if (tw_users[i][3] !== null) {
	    tw_profile = tw_profile.concat("<b>Location:</b> " + tw_users[i][3] + "<br/>");
	}
	if (tw_users[i][4] !== null) {
	    tw_profile = tw_profile.concat("<b>Website:</b> " + tw_users[i][4] + "<br/>");
	}
	if (tw_users[i][5] !== null) {
	    tw_profile = tw_profile.concat("<b>Verified </b><span class=\"glyphicon glyphicon-ok\" aria-hidden=\"true\"></span><br/>");
	}

	tw_profile = tw_profile.concat("<b>Similarity Score:</b> " + tw_users[i][6] + "<br/><br/>");
    }

    document.getElementById('fb_profile').innerHTML = fb_profile;
    document.getElementById('tw_profile').innerHTML = tw_profile;
    document.getElementById('profile_separator').innerHTML = profile_separator;

}


var loadFbUsers = function() {

    var bo_fb = ["Barack Obama", "barackobama", "This page is run by Organizing for Action. To visit the White House Facebook page, go to facebook.com/WhiteHouse.", null, null, "http://www.barackobama.com", "verified"];
		
    var hc_fb = ["Hillary Clinton", "hillaryclinton", "This page is run by Hillary for America.", null, null, "http://www.hillaryclinton.com", "verified"];
						
    var tw_fb = ["Tiger Woods", "Tiger", "Professional Golfer", null, null, "www.TigerWoods.com", "verified"];

    var pp_fb = ["Prasanna Pai", "pai.prasanna001", null, "Buffalo, New York", "pai.prasanna001@facebook.com", null, null];

    var jj_fb = ["Jesal Janani", "jesal.janani", null, "Buffalo, New York", "jesal.j9@gmail.com", "https://twitter.com/jesalj", null];

    var dw_fb = ["David Walsh", "davidwalsh83", "Senior Web Developer at Mozilla", "Madison, Wisconsin", null, null, null];

    var au_fb = [bo_fb, hc_fb, tw_fb, pp_fb, jj_fb, dw_fb];

    return au_fb;
}

var getFbUser = function() {
    var users_tw = loadFbUsers();
    for (var i = 0; i < users_tw.length; i++) {
	console.log("--------------------------------------------------------------------------");
	console.log(users_tw[i]);
    }
}

var getTwUser = function(fb_name) {
    var users = loadTwUsers();
    var users_tw = new Array();
    for (var i = 0; i < users.length; i++) {
	if (users[i][0].toUpperCase() === fb_name.toUpperCase()) {
	    users_tw.push(users[i]);
	}
	//console.log("--------------------------------------------------------------------------");
	//console.log(users_tw[i]);
    }
    return users_tw;
}

var loadTwUsers = function() {

    var obama = ["Barack Obama", "@BarackObama", "This account is run by Organizing for Action staff. Tweets from the President are signed -bo.", "Washington, DC", "barackobama.com", "verified", "1.0"];

    var obama1 = ["Barack Obama", "@theUSpresident", "The Official Parody Account of the President of the United States.", "Washington D.C.", null, null, "0.4 "];

    var obama2 = ["Barack Obama", "@BarakObama__", "44th President of the United States", "Washington, DC", "worldsur.ru", null, "0.3 "];

    var clinton = ["Hillary Clinton", "@HillaryClinton", "Wife, mom, grandma, women+kids advocate, FLOTUS, Senator, SecState, hair icon, pantsuit aficionado, 2016 presidential candidate. Tweets from Hillary signed –H", "New York", "hillaryclinton.com", "verified", "1.0"];

    var clinton1 = ["Hillary Clinton", "@AllThingsHill", "All the politics, policy and pantsuits of Hillary Rodham Clinton. Can you handle it?!", "Chicago", "allthingshillaryclinton.blogspot.com", null, "0.2" ];

    var clinton2 = ["Hillary Clinton", "@HRClinton", "Secretary of State", "Washington DC", "Whitehouse.gov", null, "0.1 "];

    var woods = ["Tiger Woods", "@TigerWoods", "Official Twitter account of Tiger Woods", "Jupiter Island, FL", "TigerWoods.com", "verified", "1.0"];

    var woods1 = ["Tiger Woods", "@tgrwds_", "Tiger Woods; a postmodern deconstructional analysis.", null, null, null, "0.2 "];

    var jesal = ["Jesal Janani", "@jesalj", "Computer Science graduate student, University at Buffalo", "Buffalo, NY", null, null, "1.0"];

    var pai = ["Prasanna Pai", "@Prasann_BLU4EVR", null, "Buffalo, New York", null, null, "0.33"];

    var walsh = ["David Walsh", "@davidwalshblog", "Mozilla Sr. Web Developer, Front-End Engineer, MooTools Core Developer, Javascript Fanatic, CSS Tinkerer, PHP Hacker, web and open source lover.", "Madison, WI, US", "davidwalsh.name", null, "0.5 "];

    var walsh1 = ["David Walsh", "@Walshy", "Professional gamer fueled by Red Bull", "Grand Rapids, MI", "walshy.com", "verified", "0.1 "];

     var walsh2 = ["David Walsh", "@DavidWalshST", "chief sports writer Sunday Times. From 13 December 2012, author of Seven Deadly Sins.", "Cambridge, England", null, null, "0.1 "];

    var users_tw = [obama, obama1, obama2, clinton, clinton1, clinton2,  woods, woods1, jesal, pai, walsh, walsh1, walsh2];

    return users_tw;

}
