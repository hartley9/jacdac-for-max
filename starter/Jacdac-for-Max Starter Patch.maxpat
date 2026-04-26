{
    "patcher": {
        "fileversion": 1,
        "appversion": {
            "major": 9,
            "minor": 1,
            "revision": 0,
            "architecture": "x64",
            "modernui": 1
        },
        "classnamespace": "box",
        "rect": [ 34.0, 87.0, 1372.0, 779.0 ],
        "subpatcher_template": "template_template",
        "boxes": [
            {
                "box": {
                    "fontface": 1,
                    "id": "obj-45",
                    "maxclass": "comment",
                    "numinlets": 1,
                    "numoutlets": 0,
                    "patching_rect": [ 733.3333551883698, 146.0, 338.66667675971985, 20.0 ],
                    "presentation_linecount": 3,
                    "text": "<- Click here after connection to spawn JDService objects"
                }
            },
            {
                "box": {
                    "fontface": 1,
                    "id": "obj-44",
                    "linecount": 2,
                    "maxclass": "comment",
                    "numinlets": 1,
                    "numoutlets": 0,
                    "patching_rect": [ 864.0000257492065, 334.66667664051056, 296.0000088214874, 33.0 ],
                    "presentation_linecount": 5,
                    "text": "<- This dict.view shows the friendlyName of each module and each service instance it provides"
                }
            },
            {
                "box": {
                    "id": "obj-43",
                    "maxclass": "dict.view",
                    "numinlets": 1,
                    "numoutlets": 0,
                    "patching_rect": [ 707.0, 272.0000081062317, 141.3333375453949, 161.33333814144135 ]
                }
            },
            {
                "box": {
                    "fontface": 1,
                    "id": "obj-42",
                    "linecount": 2,
                    "maxclass": "comment",
                    "numinlets": 1,
                    "numoutlets": 0,
                    "patching_rect": [ 720.333338022232, 486.66668117046356, 358.0, 33.0 ],
                    "presentation_linecount": 5,
                    "text": "<- An example of connecting a JDServicePotentiometer endpoint to a Max UI object"
                }
            },
            {
                "box": {
                    "fontface": 1,
                    "id": "obj-41",
                    "maxclass": "comment",
                    "numinlets": 1,
                    "numoutlets": 0,
                    "patching_rect": [ 673.3333534002304, 112.0, 412.0000122785568, 20.0 ],
                    "presentation_linecount": 4,
                    "text": "<- Restarting jacdac-for-max will clear the service map dictionary and "
                }
            },
            {
                "box": {
                    "fontface": 1,
                    "id": "obj-16",
                    "linecount": 3,
                    "maxclass": "comment",
                    "numinlets": 1,
                    "numoutlets": 0,
                    "patching_rect": [ 730.0, 182.0, 142.0, 47.0 ],
                    "presentation_linecount": 3,
                    "text": "<- You can inspect this object to see the status of the node.script"
                }
            },
            {
                "box": {
                    "id": "obj-13",
                    "maxclass": "newobj",
                    "numinlets": 0,
                    "numoutlets": 0,
                    "patcher": {
                        "fileversion": 1,
                        "appversion": {
                            "major": 9,
                            "minor": 1,
                            "revision": 0,
                            "architecture": "x64",
                            "modernui": 1
                        },
                        "classnamespace": "box",
                        "rect": [ 449.0, 192.0, 727.0, 561.0 ],
                        "subpatcher_template": "template_template",
                        "boxes": [
                            {
                                "box": {
                                    "id": "obj-12",
                                    "maxclass": "dial",
                                    "numinlets": 1,
                                    "numoutlets": 1,
                                    "outlettype": [ "float" ],
                                    "parameter_enable": 0,
                                    "patching_rect": [ 72.0, 256.5, 40.0, 40.0 ]
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-10",
                                    "maxclass": "number",
                                    "numinlets": 1,
                                    "numoutlets": 2,
                                    "outlettype": [ "", "bang" ],
                                    "parameter_enable": 0,
                                    "patching_rect": [ 72.0, 313.5, 50.0, 22.0 ]
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-8",
                                    "maxclass": "newobj",
                                    "numinlets": 1,
                                    "numoutlets": 1,
                                    "outlettype": [ "" ],
                                    "patching_rect": [ 72.0, 217.5, 191.0, 22.0 ],
                                    "text": "JDServiceRotaryEncoder UG40_1"
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-2",
                                    "maxclass": "message",
                                    "numinlets": 2,
                                    "numoutlets": 1,
                                    "outlettype": [ "" ],
                                    "patching_rect": [ 146.6666442155838, 117.0, 87.0, 22.0 ],
                                    "text": "serviceObjects"
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-28",
                                    "maxclass": "message",
                                    "numinlets": 2,
                                    "numoutlets": 1,
                                    "outlettype": [ "" ],
                                    "patching_rect": [ 129.6666442155838, 91.0, 43.0, 22.0 ],
                                    "text": "restart"
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-3",
                                    "maxclass": "message",
                                    "numinlets": 2,
                                    "numoutlets": 1,
                                    "outlettype": [ "" ],
                                    "patching_rect": [ 94.6666442155838, 62.0, 66.0, 22.0 ],
                                    "text": "disconnect"
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-15",
                                    "maxclass": "message",
                                    "numinlets": 2,
                                    "numoutlets": 1,
                                    "outlettype": [ "" ],
                                    "patching_rect": [ 72.0, 35.0, 51.0, 22.0 ],
                                    "text": "connect"
                                }
                            },
                            {
                                "box": {
                                    "bgcolor": [ 0.219607843137255, 0.298039215686275, 0.12156862745098, 1.0 ],
                                    "id": "obj-1",
                                    "maxclass": "newobj",
                                    "numinlets": 2,
                                    "numoutlets": 3,
                                    "outlettype": [ "", "", "dictionary" ],
                                    "patching_rect": [ 72.0, 159.5, 163.0, 22.0 ],
                                    "text": "jacdac-for-max"
                                }
                            }
                        ],
                        "lines": [
                            {
                                "patchline": {
                                    "destination": [ "obj-10", 0 ],
                                    "source": [ "obj-12", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-1", 0 ],
                                    "source": [ "obj-15", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-1", 0 ],
                                    "source": [ "obj-2", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-1", 0 ],
                                    "source": [ "obj-28", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-1", 0 ],
                                    "source": [ "obj-3", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-12", 0 ],
                                    "source": [ "obj-8", 0 ]
                                }
                            }
                        ],
                        "styles": [
                            {
                                "name": "jpatcher001",
                                "default": {
                                    "editing_bgcolor": [ 0.219607843137255, 0.2, 0.23921568627451, 1.0 ],
                                    "fontname": [ "<Monospaced>" ],
                                    "locked_bgcolor": [ 0.184313725490196, 0.180392156862745, 0.180392156862745, 1.0 ],
                                    "textcolor": [ 0.129411764705882, 0.129411764705882, 0.129411764705882, 1.0 ]
                                },
                                "parentstyle": "redness",
                                "multi": 0
                            }
                        ]
                    },
                    "patching_rect": [ 563.0, 486.66668117046356, 144.0, 22.0 ],
                    "text": "p potentiometer_example"
                }
            },
            {
                "box": {
                    "fontsize": 30.0,
                    "id": "obj-85",
                    "maxclass": "comment",
                    "numinlets": 1,
                    "numoutlets": 0,
                    "patching_rect": [ 446.0, 8.0, 320.0, 40.0 ],
                    "text": "Jacdac-for-Max Starter"
                }
            },
            {
                "box": {
                    "id": "obj-2",
                    "maxclass": "message",
                    "numinlets": 2,
                    "numoutlets": 1,
                    "outlettype": [ "" ],
                    "patching_rect": [ 639.0, 146.0, 87.0, 22.0 ],
                    "text": "serviceObjects"
                }
            },
            {
                "box": {
                    "id": "obj-28",
                    "maxclass": "message",
                    "numinlets": 2,
                    "numoutlets": 1,
                    "outlettype": [ "" ],
                    "patching_rect": [ 621.0, 111.0, 43.0, 22.0 ],
                    "text": "restart"
                }
            },
            {
                "box": {
                    "id": "obj-3",
                    "maxclass": "message",
                    "numinlets": 2,
                    "numoutlets": 1,
                    "outlettype": [ "" ],
                    "patching_rect": [ 586.0, 82.0, 66.0, 22.0 ],
                    "text": "disconnect"
                }
            },
            {
                "box": {
                    "id": "obj-15",
                    "maxclass": "message",
                    "numinlets": 2,
                    "numoutlets": 1,
                    "outlettype": [ "" ],
                    "patching_rect": [ 563.0, 55.0, 51.0, 22.0 ],
                    "text": "connect"
                }
            },
            {
                "box": {
                    "id": "obj-1",
                    "maxclass": "newobj",
                    "numinlets": 2,
                    "numoutlets": 3,
                    "outlettype": [ "", "", "dictionary" ],
                    "patching_rect": [ 563.0, 180.0, 163.0, 22.0 ],
                    "text": "jacdac-for-max"
                }
            },
            {
                "box": {
                    "fontface": 1,
                    "id": "obj-76",
                    "maxclass": "comment",
                    "numinlets": 1,
                    "numoutlets": 0,
                    "patching_rect": [ 63.733345764297496, 63.0, 330.0, 20.0 ],
                    "text": "Max objects for Jacdac services will appear here"
                }
            },
            {
                "box": {
                    "fontface": 1,
                    "id": "obj-71",
                    "maxclass": "comment",
                    "numinlets": 1,
                    "numoutlets": 0,
                    "patching_rect": [ 621.0, 56.0, 142.0, 20.0 ],
                    "text": "<- Click connect first"
                }
            }
        ],
        "lines": [
            {
                "patchline": {
                    "destination": [ "obj-43", 0 ],
                    "source": [ "obj-1", 2 ]
                }
            },
            {
                "patchline": {
                    "destination": [ "obj-1", 0 ],
                    "source": [ "obj-15", 0 ]
                }
            },
            {
                "patchline": {
                    "destination": [ "obj-1", 0 ],
                    "source": [ "obj-2", 0 ]
                }
            },
            {
                "patchline": {
                    "destination": [ "obj-1", 0 ],
                    "source": [ "obj-28", 0 ]
                }
            },
            {
                "patchline": {
                    "destination": [ "obj-1", 0 ],
                    "source": [ "obj-3", 0 ]
                }
            }
        ],
        "autosave": 0,
        "styles": [
            {
                "name": "jpatcher001",
                "default": {
                    "editing_bgcolor": [ 0.219607843137255, 0.2, 0.23921568627451, 1.0 ],
                    "fontname": [ "<Monospaced>" ],
                    "locked_bgcolor": [ 0.184313725490196, 0.180392156862745, 0.180392156862745, 1.0 ],
                    "textcolor": [ 0.129411764705882, 0.129411764705882, 0.129411764705882, 1.0 ]
                },
                "parentstyle": "chiba",
                "multi": 0
            }
        ]
    }
}