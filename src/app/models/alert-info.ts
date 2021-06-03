export interface IAlertInfo{
    type: string;
    id: string;
    version: number | string;
    priority: 'veryLow' | 'low' | 'normal' | 'high' | 'veryHigh';
    timestamps: {
        creation: string;
        lastModification: string;
        availability: {
            from: string;
            to: string;
        },
        validity: [
            {
                from: string;
                to: string;
            }
        ]
    },
    urlText: string;
    url: string;
    subtitle: string;
    properties: any;
    affected: {
        [key: string]: {
            id: string;
            destination: {
                name: string;
                type: string;
            },
            name: string;
            number: string;
            description: string;
            iconId: number;
            product: {
                class: number;
                iconId: number;
            },
            operator: {
                id: string;
                name: string;
            }
        }
    }
}


/* 
{
    "type": "routeInfo",
    "id": "6000017",
    "version": 1,
    "priority": "veryLow",
    "timestamps": {
        "creation": "2016-11-22T03:47:00Z",
        "lastModification": "2016-11-22T03:47:00Z",
        "availability": {
            "from": "2016-11-22T03:47:00Z",
            "to": "2026-11-22T13:47:59Z"
        },
        "validity": [
            {
                "from": "2016-11-22T03:47:00Z",
                "to": "2026-11-22T13:47:59Z"
            }
        ]
    },
    "urlText": "Restrictions may apply - confirm when booking",
    "url": "http://localhost:8085/ics/XSLT_CM_SHOWADDINFO_REQUEST?infoID=6000017&seqID=1",
    "subtitle": "Restrictions may apply - confirm when booking",
    "properties": {
        "providerCode": "Serco",
        "stopIDglobalID": "10150136#10161835#10161844#10150208#10150143#10150141#10150145",
        "source": {
            "id": "ICSNSW_DEV_10.2",
            "name": "ICSNSW_DEV_10.2",
            "type": "MDVCMS"
        },
        "announcementType": "serviceChange"
    },
    "affected": {
        "lines": [
            {
                "id": "nsw:94110: :H:",
                "destination": {
                    "name": "Newcastle Station, Scott St",
                    "type": "stop"
                },
                "name": "Hunter Buses Network 110",
                "number": "110",
                "description": "Hamilton to Newcastle",
                "iconId": 15,
                "product": {
                    "class": 5,
                    "iconId": 5
                },
                "operator": {
                    "id": "NE",
                    "name": "Newcastle Buses and Ferries"
                }
            },
            {
                "id": "nsw:06662: :H:",
                "destination": {
                    "name": "Lismore Town Coach Stop, Molesworth St, Lismore",
                    "type": "stop"
                },
                "name": "Private bus services 662",
                "number": "662",
                "description": "Lennox Head to Lismore",
                "iconId": 9,
                "product": {
                    "class": 5,
                    "iconId": 5
                },
                "operator": {}
            },
            {
                "id": "nsw:06662: :R:",
                "destination": {
                    "name": "Lennox Head Coach Stop, Ballina St, Lennox Head",
                    "type": "stop"
                },
                "name": "Private bus services 662",
                "number": "662",
                "description": "Lismore to Lennox Head",
                "iconId": 9,
                "product": {
                    "class": 5,
                    "iconId": 5
                },
                "operator": {}
            }
        ],
        "stops": [
            {
                "id": "10150136",
                "name": "Lismore Coach Stop, Union St, South Lismore",
                "type": "stop",
                "parent": {
                    "name": "South Lismore",
                    "type": "locality"
                }
            },
            {
                "id": "10161835",
                "name": "Goonellabah Coach Stop, Ballina Rd, Goonellabah",
                "type": "stop",
                "parent": {
                    "name": "Goonellabah",
                    "type": "locality"
                }
            },
            {
                "id": "10161844",
                "name": "Wollongbar Coach Stop, Lismore Rd, Wollongbar",
                "type": "stop",
                "parent": {
                    "name": "Wollongbar",
                    "type": "locality"
                }
            },
            {
                "id": "10150208",
                "name": "Alstonville Coach Stop, Main St, Alstonville",
                "type": "stop",
                "parent": {
                    "name": "Alstonville",
                    "type": "locality"
                }
            },
            {
                "id": "10150143",
                "name": "Ballina West Coach Stop, River St, West Ballina",
                "type": "stop",
                "parent": {
                    "name": "West Ballina",
                    "type": "locality"
                }
            },
            {
                "id": "10150141",
                "name": "Ballina Coach Stop,Tamar St, Ballina",
                "type": "stop",
                "parent": {
                    "name": "Ballina",
                    "type": "locality"
                }
            },
            {
                "id": "10150145",
                "name": "Lennox Head Coach Stop, Ballina St, Lennox Head",
                "type": "stop",
                "parent": {
                    "name": "Lennox Head",
                    "type": "locality"
                }
            }
        ]
    }
}, */