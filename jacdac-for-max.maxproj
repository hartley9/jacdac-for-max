{
	"name" : "jacdac-for-max",
	"version" : 1,
	"creationdate" : 3723914097,
	"modificationdate" : 3742038290,
	"viewrect" : [ 1083.0, 342.0, 300.0, 500.0 ],
	"autoorganize" : 0,
	"hideprojectwindow" : 0,
	"showdependencies" : 1,
	"autolocalize" : 0,
	"contents" : 	{
		"patchers" : 		{
			"n4m-bundler.main.maxpat" : 			{
				"kind" : "patcher",
				"local" : 1,
				"toplevel" : 1
			}
,
			"PATCH_jacdac-for-max.maxpat" : 			{
				"kind" : "patcher",
				"local" : 1
			}
,
			"mypatch.maxpat" : 			{
				"kind" : "patcher",
				"local" : 1
			}
,
			"JDServiceButton.maxpat" : 			{
				"kind" : "patcher",
				"local" : 1
			}
,
			"JDServiceGamepad.maxpat" : 			{
				"kind" : "patcher",
				"local" : 1
			}
,
			"JDServiceLightLevel.maxpat" : 			{
				"kind" : "patcher",
				"local" : 1
			}
,
			"JDServiceRotaryEncoder.maxpat" : 			{
				"kind" : "patcher",
				"local" : 1
			}
,
			"JDServicePotentiometer.maxpat" : 			{
				"kind" : "patcher",
				"local" : 1,
				"singleton" : 				{
					"bootpath" : "~/Documents/Max 8/Projects/jacdac-for-max/max_objects",
					"projectrelativepath" : "./max_objects"
				}

			}
,
			"JDBpatchGamepad.maxpat" : 			{
				"kind" : "patcher",
				"local" : 1
			}
,
			"JDServiceFlex.maxpat" : 			{
				"kind" : "patcher",
				"local" : 1
			}
,
			"JDServiceAccelerometer.maxpat" : 			{
				"kind" : "patcher",
				"local" : 1
			}
,
			"JDServiceHumidity.maxpat" : 			{
				"kind" : "patcher",
				"local" : 1
			}
,
			"JDServiceTemperature.maxpat" : 			{
				"kind" : "patcher",
				"local" : 1
			}

		}
,
		"code" : 		{
			"createServiceObjects.js" : 			{
				"kind" : "javascript",
				"local" : 1
			}
,
			"jacdac_connect.js" : 			{
				"kind" : "javascript",
				"local" : 1
			}

		}
,
		"data" : 		{
			"serviceObjectMap.json" : 			{
				"kind" : "json",
				"local" : 1,
				"singleton" : 				{
					"bootpath" : "~/Documents/Max 8/Projects/jacdac-for-max/js_objects",
					"projectrelativepath" : "./js_objects"
				}

			}

		}
,
		"externals" : 		{

		}

	}
,
	"layout" : 	{

	}
,
	"searchpath" : 	{
		"0" : 		{
			"bootpath" : "~/Documents/Max 8/Projects/jacdac-for-max/node_content",
			"projectrelativepath" : "./node_content",
			"label" : "",
			"recursive" : 1,
			"enabled" : 1,
			"includeincollective" : 1
		}
,
		"1" : 		{
			"bootpath" : "~/Documents/Max 8/Projects/jacdac-for-max/max_objects",
			"projectrelativepath" : "./max_objects",
			"label" : "maxObjects",
			"recursive" : 1,
			"enabled" : 1,
			"includeincollective" : 1
		}

	}
,
	"detailsvisible" : 0,
	"amxdtype" : 0,
	"readonly" : 0,
	"devpathtype" : 0,
	"devpath" : ".",
	"sortmode" : 0,
	"viewmode" : 0
}
