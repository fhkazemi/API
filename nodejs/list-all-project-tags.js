//
// GitHub: https://github.com/SERPWoo/API
//
// This code requests a project's Tags (Domains/URLs) and outputs the Tag ID, Tag, ORM Tag, Settings, Creation Date, Last_Updated
//
// This output is text format
//
// Last updated - Aug 25th, 2017 @ 8:20 EST (@MercenaryCarter https://github.com/MercenaryCarter and https://twitter.com/MercenaryCarter)
//
// Run Command: nodejs list-all-project-tags.js
//

	var request = require("request");
	var sprintf=require("sprintf-js").sprintf;

	// Get your API Key here: https://www.serpwoo.com/v3/api/ (should be logged in)
	var API_key = "API_KEY_HERE"
	var Project_ID = 0 //input your Project ID

	var url = "https://api.serpwoo.com/v1/projects/" + Project_ID + "/tags/?key=" + API_key

		request({
				    url: url,
				    json: true
		}, function (error, response, JsonData) {
				    if (!error && response.statusCode === 200) {
						
				        //console.log(JsonData) // Print the json response
						//console.log("Successful: ", JsonData.success);
						
								if (JsonData.success === 1) {

									console.log("\n--\n");
									console.log(sprintf("%-15s %-80s %-15s %-10s %-15s %-15s", "Tag ID", "Tag", "ORM Tag", "Settings", "Creation Date", "Last Update"));
									console.log(sprintf("%-15s %-80s %-15s %-10s %-15s %-15s", "------", "---", "-------", "--------", "-------------", "-----------"));
							
									for(var project_id in JsonData.projects) {

										for(var id in JsonData.projects[project_id]['tags']) {

										console.log(sprintf("%-15s %-80s %-15s %-10s %-15s %-15s", id, JsonData.projects[project_id]['tags'][id].tag, JsonData.projects[project_id]['tags'][id].orm, JsonData.projects[project_id]['tags'][id]['setting'].type, JsonData.projects[project_id]['tags'][id].creation_date, JsonData.projects[project_id]['tags'][id].last_updated));
										}

									}

									console.log("\n--\n");
							
								}else {
									console.log("Something went wrong: ", JsonData.error);							
								}
						
						
				    }
		})
