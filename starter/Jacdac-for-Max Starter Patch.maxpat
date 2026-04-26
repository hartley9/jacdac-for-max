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
        "rect": [ 154.0, 162.0, 1372.0, 779.0 ],
        "subpatcher_template": "template_template",
        "boxes": [
            {
                "box": {
                    "fontface": 1,
                    "id": "obj-45",
                    "maxclass": "comment",
                    "numinlets": 1,
                    "numoutlets": 0,
                    "patching_rect": [ 740.0, 224.0, 339.0, 20.0 ],
                    "text": "<- Click here after connection to spawn JDService objects"
                }
            },
            {
                "box": {
                    "fontface": 1,
                    "id": "obj-44",
                    "linecount": 3,
                    "maxclass": "comment",
                    "numinlets": 1,
                    "numoutlets": 0,
                    "patching_rect": [ 871.0, 412.0, 296.0000088214874, 47.0 ],
                    "text": "<- This dict.view shows the friendlyName of each physical Jacdac module and the services it provides"
                }
            },
            {
                "box": {
                    "id": "obj-43",
                    "maxclass": "dict.view",
                    "numinlets": 1,
                    "numoutlets": 0,
                    "patching_rect": [ 714.0, 350.0, 141.3333375453949, 161.33333814144135 ]
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
                    "patching_rect": [ 727.0, 564.0, 358.0, 33.0 ],
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
                    "patching_rect": [ 680.0, 190.0, 412.0000122785568, 20.0 ],
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
                    "patching_rect": [ 737.0, 260.0, 145.0, 47.0 ],
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
                    "patching_rect": [ 570.0, 564.0, 144.0, 22.0 ],
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
                    "patching_rect": [ 646.0, 224.0, 87.0, 22.0 ],
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
                    "patching_rect": [ 628.0, 189.0, 43.0, 22.0 ],
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
                    "patching_rect": [ 593.0, 160.0, 66.0, 22.0 ],
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
                    "patching_rect": [ 570.0, 133.0, 51.0, 22.0 ],
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
                    "patching_rect": [ 570.0, 258.0, 163.0, 22.0 ],
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
                    "patching_rect": [ 628.0, 134.0, 361.0, 20.0 ],
                    "text": "<- Click connect after your jacdac device is plugged in"
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