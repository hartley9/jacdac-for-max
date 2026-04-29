{
	"patcher" : 	{
		"fileversion" : 1,
		"appversion" : 		{
			"major" : 9,
			"minor" : 0,
			"revision" : 0,
			"architecture" : "x64",
			"modernui" : 1
		}
,
		"classnamespace" : "box",
		"rect" : [ 34.0, 87.0, 1372.0, 779.0 ],
		"gridsize" : [ 15.0, 15.0 ],
		"subpatcher_template" : "template_template",
		"boxes" : [ 			{
				"box" : 				{
					"fontface" : 1,
					"id" : "obj-7",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 795.0, 222.0, 391.0, 20.0 ],
					"presentation_linecount" : 2,
					"text" : "<- Clear all spawned JDService objects from current patcher"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 673.0, 221.0, 115.0, 22.0 ],
					"text" : "clearServiceObjects"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"id" : "obj-45",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 737.0, 190.0, 339.0, 20.0 ],
					"text" : "<-  Spawn JDService objects after connection "
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"id" : "obj-44",
					"linecount" : 3,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 849.0, 418.0, 296.000008821487427, 48.0 ],
					"text" : "<- This dict.view shows the friendlyName of each physical Jacdac module and the services it provides"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-43",
					"maxclass" : "dict.view",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 714.0, 350.0, 113.0, 195.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"id" : "obj-42",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 727.0, 564.0, 358.0, 34.0 ],
					"text" : "<- An example of connecting a JDServicePotentiometer endpoint to a Max UI object"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"id" : "obj-41",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 673.0, 155.0, 412.000012278556824, 20.0 ],
					"text" : "<- Restarting jacdac-for-max will clear the service map dictionary and "
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"id" : "obj-16",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 737.0, 260.0, 430.000008821487427, 20.0 ],
					"text" : "<- You can inspect this object to see the status of the node.script"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-13",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 0,
					"patcher" : 					{
						"fileversion" : 1,
						"appversion" : 						{
							"major" : 9,
							"minor" : 0,
							"revision" : 0,
							"architecture" : "x64",
							"modernui" : 1
						}
,
						"classnamespace" : "box",
						"rect" : [ 449.0, 192.0, 727.0, 561.0 ],
						"gridsize" : [ 15.0, 15.0 ],
						"subpatcher_template" : "template_template",
						"boxes" : [ 							{
								"box" : 								{
									"id" : "obj-12",
									"maxclass" : "dial",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "float" ],
									"parameter_enable" : 0,
									"patching_rect" : [ 72.0, 256.5, 40.0, 40.0 ]
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-10",
									"maxclass" : "number",
									"numinlets" : 1,
									"numoutlets" : 2,
									"outlettype" : [ "", "bang" ],
									"parameter_enable" : 0,
									"patching_rect" : [ 72.0, 313.5, 50.0, 22.0 ]
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-8",
									"maxclass" : "newobj",
									"numinlets" : 0,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 72.0, 217.5, 191.0, 22.0 ],
									"text" : "JDServiceRotaryEncoder UG40_1"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-2",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 146.666644215583801, 117.0, 87.0, 22.0 ],
									"text" : "serviceObjects"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-28",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 129.666644215583801, 91.0, 43.0, 22.0 ],
									"text" : "restart"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-3",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 94.666644215583801, 62.0, 66.0, 22.0 ],
									"text" : "disconnect"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-15",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 72.0, 35.0, 51.0, 22.0 ],
									"text" : "connect"
								}

							}
, 							{
								"box" : 								{
									"bgcolor" : [ 0.219607843137255, 0.298039215686275, 0.12156862745098, 1.0 ],
									"id" : "obj-1",
									"maxclass" : "newobj",
									"numinlets" : 2,
									"numoutlets" : 3,
									"outlettype" : [ "", "", "dictionary" ],
									"patching_rect" : [ 72.0, 159.5, 163.0, 22.0 ],
									"text" : "jacdac-for-max"
								}

							}
 ],
						"lines" : [ 							{
								"patchline" : 								{
									"destination" : [ "obj-10", 0 ],
									"source" : [ "obj-12", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-1", 0 ],
									"source" : [ "obj-15", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-1", 0 ],
									"source" : [ "obj-2", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-1", 0 ],
									"source" : [ "obj-28", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-1", 0 ],
									"source" : [ "obj-3", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-12", 0 ],
									"source" : [ "obj-8", 0 ]
								}

							}
 ],
						"originid" : "pat-83",
						"styles" : [ 							{
								"name" : "jpatcher001",
								"default" : 								{
									"editing_bgcolor" : [ 0.219607843137255, 0.2, 0.23921568627451, 1.0 ],
									"fontname" : [ "<Monospaced>" ],
									"locked_bgcolor" : [ 0.184313725490196, 0.180392156862745, 0.180392156862745, 1.0 ],
									"textcolor" : [ 0.129411764705882, 0.129411764705882, 0.129411764705882, 1.0 ]
								}
,
								"parentstyle" : "redness",
								"multi" : 0
							}
 ]
					}
,
					"patching_rect" : [ 570.0, 564.0, 144.0, 22.0 ],
					"saved_object_attributes" : 					{
						"globalpatchername" : ""
					}
,
					"text" : "p potentiometer_example"
				}

			}
, 			{
				"box" : 				{
					"fontsize" : 30.0,
					"id" : "obj-85",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 446.0, 8.0, 320.0, 41.0 ],
					"text" : "Jacdac-for-Max Starter"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-2",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 646.0, 189.0, 87.0, 22.0 ],
					"text" : "serviceObjects"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-28",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 628.0, 154.0, 43.0, 22.0 ],
					"text" : "restart"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-3",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 593.0, 125.0, 66.0, 22.0 ],
					"text" : "disconnect"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-15",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 570.0, 98.0, 51.0, 22.0 ],
					"text" : "connect"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "dictionary" ],
					"patching_rect" : [ 570.0, 258.0, 163.0, 22.0 ],
					"text" : "jacdac-for-max"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"id" : "obj-76",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 63.733345764297496, 63.0, 330.0, 20.0 ],
					"text" : "Max objects for Jacdac services will appear here"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"id" : "obj-71",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 628.0, 99.0, 361.0, 20.0 ],
					"text" : "<- Click connect after your jacdac device is plugged in"
				}

			}
 ],
		"lines" : [ 			{
				"patchline" : 				{
					"destination" : [ "obj-43", 0 ],
					"source" : [ "obj-1", 2 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"source" : [ "obj-15", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"source" : [ "obj-2", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"source" : [ "obj-28", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"source" : [ "obj-3", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"source" : [ "obj-6", 0 ]
				}

			}
 ],
		"originid" : "pat-81",
		"dependency_cache" : [ 			{
				"name" : "JDServiceRotaryEncoder.maxpat",
				"bootpath" : "~/Documents/jacdac-for-max/DEPRECATED_MAX_OBJECTS",
				"patcherrelativepath" : "../DEPRECATED_MAX_OBJECTS",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "createServiceObjects.js",
				"bootpath" : "~/Documents/jacdac-for-max/js_objects",
				"patcherrelativepath" : "../js_objects",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "fit_jweb_to_bounds.js",
				"bootpath" : "C74:/packages/Node for Max/patchers/debug-monitor",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "jacdac-for-max.maxpat",
				"bootpath" : "~/Documents/Max 9/Library/jacdac-for-max-windows_support",
				"patcherrelativepath" : "../../Max 9/Library/jacdac-for-max-windows_support",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "jacdac_connect.js",
				"bootpath" : "~/Documents/jacdac-for-max/node_content",
				"patcherrelativepath" : "../node_content",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "n4m.monitor.maxpat",
				"bootpath" : "C74:/packages/Node for Max/patchers/debug-monitor",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "resize_n4m_monitor_patcher.js",
				"bootpath" : "C74:/packages/Node for Max/patchers/debug-monitor",
				"type" : "TEXT",
				"implicit" : 1
			}
 ],
		"autosave" : 0,
		"styles" : [ 			{
				"name" : "jpatcher001",
				"default" : 				{
					"editing_bgcolor" : [ 0.219607843137255, 0.2, 0.23921568627451, 1.0 ],
					"fontname" : [ "<Monospaced>" ],
					"locked_bgcolor" : [ 0.184313725490196, 0.180392156862745, 0.180392156862745, 1.0 ],
					"textcolor" : [ 0.129411764705882, 0.129411764705882, 0.129411764705882, 1.0 ]
				}
,
				"parentstyle" : "chiba",
				"multi" : 0
			}
 ],
		"oscreceiveudpport" : 0
	}

}
