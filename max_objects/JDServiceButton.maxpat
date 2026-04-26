{
	"patcher" : 	{
		"fileversion" : 1,
		"appversion" : 		{
			"major" : 8,
			"minor" : 3,
			"revision" : 1,
			"architecture" : "x64",
			"modernui" : 1
		}
,
		"classnamespace" : "box",
		"rect" : [ 290.0, 149.0, 1041.0, 653.0 ],
		"bglocked" : 0,
		"openinpresentation" : 0,
		"default_fontsize" : 12.0,
		"default_fontface" : 0,
		"default_fontname" : "Arial",
		"gridonopen" : 1,
		"gridsize" : [ 15.0, 15.0 ],
		"gridsnaponopen" : 1,
		"objectsnaponopen" : 1,
		"statusbarvisible" : 2,
		"toolbarvisible" : 1,
		"lefttoolbarpinned" : 0,
		"toptoolbarpinned" : 0,
		"righttoolbarpinned" : 0,
		"bottomtoolbarpinned" : 0,
		"toolbars_unpinned_last_save" : 0,
		"tallnewobj" : 0,
		"boxanimatetime" : 200,
		"enablehscroll" : 1,
		"enablevscroll" : 1,
		"devicewidth" : 0.0,
		"description" : "",
		"digest" : "",
		"tags" : "",
		"style" : "",
		"subpatcher_template" : "",
		"assistshowspatchername" : 0,
		"boxes" : [ 			{
				"box" : 				{
					"id" : "obj-6",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 33.0, 74.0, 71.0, 22.0 ],
					"text" : "r jacdacBus"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"id" : "obj-13",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 288.0, 228.0, 163.0, 20.0 ],
					"text" : "Identify device"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"fontsize" : 18.0,
					"id" : "obj-10",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 5.0, 9.0, 236.0, 27.0 ],
					"text" : "Button Service"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"id" : "obj-8",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 276.0, 346.0, 161.0, 20.0 ],
					"text" : "Events"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"id" : "obj-7",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 11.5, 346.0, 161.0, 20.0 ],
					"text" : "Registers"
				}

			}
, 			{
				"box" : 				{
					"comment" : "",
					"id" : "obj-5",
					"index" : 1,
					"maxclass" : "inlet",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 379.5, 105.0, 30.0, 30.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-18",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 379.5, 257.5, 162.0, 22.0 ],
					"text" : "s jacdac_for_max_command"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-15",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 379.5, 228.0, 94.0, 22.0 ],
					"text" : "prepend identify"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-2",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 251.0, 63.0, 72.0, 22.0 ],
					"text" : "patcherargs"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-3",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 251.0, 105.0, 73.0, 22.0 ],
					"text" : "unpack sym"
				}

			}
, 			{
				"box" : 				{
					"id" : "idMessage",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 379.5, 172.0, 88.0, 22.0 ],
					"text" : "EE82.button_0"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-4",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 33.0, 161.0, 76.0, 22.0 ],
					"text" : "route"
				}

			}
, 			{
				"box" : 				{
					"id" : "RouteRegisters",
					"maxclass" : "newobj",
					"numinlets" : 3,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "" ],
					"patching_rect" : [ 77.0, 346.0, 132.0, 22.0 ],
					"text" : "route pressure pressed"
				}

			}
, 			{
				"box" : 				{
					"id" : "RouteEvents",
					"maxclass" : "newobj",
					"numinlets" : 4,
					"numoutlets" : 4,
					"outlettype" : [ "", "", "", "" ],
					"patching_rect" : [ 325.0, 346.0, 203.0, 22.0 ],
					"text" : "route downEvent upEvent holdEvent"
				}

			}
, 			{
				"box" : 				{
					"comment" : "pressureEvent: number",
					"id" : "pressure_outlet",
					"index" : 1,
					"maxclass" : "outlet",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 77.0, 439.0, 30.0, 30.0 ]
				}

			}
, 			{
				"box" : 				{
					"comment" : "pressedEvent: number",
					"id" : "pressed_outlet",
					"index" : 2,
					"maxclass" : "outlet",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 177.0, 439.0, 30.0, 30.0 ]
				}

			}
, 			{
				"box" : 				{
					"comment" : "downEvent: ",
					"id" : "down_outlet",
					"index" : 3,
					"maxclass" : "outlet",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 325.0, 439.0, 30.0, 30.0 ]
				}

			}
, 			{
				"box" : 				{
					"comment" : "upEvent: number",
					"id" : "up_outlet",
					"index" : 4,
					"maxclass" : "outlet",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 425.0, 439.0, 30.0, 30.0 ]
				}

			}
, 			{
				"box" : 				{
					"comment" : "holdEvent: number",
					"id" : "hold_outlet",
					"index" : 5,
					"maxclass" : "outlet",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 525.0, 439.0, 30.0, 30.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "pressure_fromSymbol",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 77.0, 389.0, 71.0, 22.0 ],
					"text" : "fromsymbol"
				}

			}
, 			{
				"box" : 				{
					"id" : "pressed_fromSymbol",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 177.0, 389.0, 71.0, 22.0 ],
					"text" : "fromsymbol"
				}

			}
, 			{
				"box" : 				{
					"id" : "down_fromSymbol",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 325.0, 389.0, 71.0, 22.0 ],
					"text" : "fromsymbol"
				}

			}
, 			{
				"box" : 				{
					"id" : "up_fromSymbol",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 425.0, 389.0, 71.0, 22.0 ],
					"text" : "fromsymbol"
				}

			}
, 			{
				"box" : 				{
					"id" : "hold_fromSymbol",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 525.0, 389.0, 71.0, 22.0 ],
					"text" : "fromsymbol"
				}

			}
 ],
		"lines" : [ 			{
				"patchline" : 				{
					"destination" : [ "down_fromSymbol", 0 ],
					"source" : [ "RouteEvents", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "hold_fromSymbol", 0 ],
					"source" : [ "RouteEvents", 2 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "up_fromSymbol", 0 ],
					"source" : [ "RouteEvents", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "pressed_fromSymbol", 0 ],
					"source" : [ "RouteRegisters", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "pressure_fromSymbol", 0 ],
					"source" : [ "RouteRegisters", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "down_outlet", 0 ],
					"source" : [ "down_fromSymbol", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "hold_outlet", 0 ],
					"source" : [ "hold_fromSymbol", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-15", 0 ],
					"source" : [ "idMessage", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-18", 0 ],
					"source" : [ "obj-15", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"source" : [ "obj-2", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "idMessage", 1 ],
					"order" : 0,
					"source" : [ "obj-3", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-4", 1 ],
					"order" : 1,
					"source" : [ "obj-3", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "RouteEvents", 0 ],
					"order" : 0,
					"source" : [ "obj-4", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "RouteRegisters", 0 ],
					"order" : 1,
					"source" : [ "obj-4", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "idMessage", 0 ],
					"source" : [ "obj-5", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-4", 0 ],
					"source" : [ "obj-6", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "pressed_outlet", 0 ],
					"source" : [ "pressed_fromSymbol", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "pressure_outlet", 0 ],
					"source" : [ "pressure_fromSymbol", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "up_outlet", 0 ],
					"source" : [ "up_fromSymbol", 0 ]
				}

			}
 ]
	}

}
