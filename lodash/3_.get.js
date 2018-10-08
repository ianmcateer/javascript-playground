const _ = require('lodash')
// _.get(object, path, [defaultValue])
// _.get gets the value at path of an object, If the resolved value is undefined, the defaultValue is returned in its place.

const dataCenter = {
    "createdAt": "2018-03-16T04:03:44.005Z",
    "updatedAt": "2018-09-25T03:01:04.825Z",
    "username": "mega-iadvantage",
    "__v": 6,
    "costbookLocationId": "5ba99a4c8b747e000a2f213f",
    "popIds": [
        "9d9bcab5-ff02-4b2e-8492-ac2c5559e5cf"
    ],
    "stats": {
        "members": 0,
        "interconnections": 0,
        "followers": 0,
        "following": 0,
        "privateArticles": 0,
        "privateEvents": 0,
        "privatePosts": 0,
        "articles": 0,
        "events": 0,
        "posts": 0
    },
    "dataCenterFacility": {
        "brandId": "",
        "nniReady": true,
        "airportCodes": [

        ],
        "speeds": [
            {
                "value": 1000,
                "name": "1000 Mbps"
            },
            {
                "value": 10000,
                "name": "10000 Mbps"
            }
        ],
        "metroId": "5aab41724547120012c6d5be",
        "ready": true,
        "id": null
    },
    "company": {
        "parentIds": [

        ],
        "fax": null,
        "phone": null,
        "addresses": [
            {
                "geo": {
                    "coordinates": [
                        null,
                        null
                    ],
                    "type": "Point"
                },
                "phone": null,
                "email": null,
                "country": "HK",
                "zip": null,
                "state": null,
                "city": "Hong Kong",
                "address": null,
                "registered": false
            }
        ],
        "privacy": {
            "community": {
                "whiteListIds": [

                ],
                "blackListIds": [

                ],
                "mode": "PUBLIC"
            },
            "network": {
                "whiteListIds": [

                ],
                "blackListIds": [

                ],
                "mode": "PUBLIC"
            }
        },
        "zip": null,
        "state": null,
        "city": null,
        "address": null,
        "last": null,
        "first": null,
        "clientId": null,
        "regionalInternetRegistry": [

        ],
        "businessRegistrationCertRejectedReason": null,
        "businessRegistrationCertVerified": "UNVERIFIED",
        "businessRegistrationCertUploadedAt": null,
        "businessRegistrationCertReference": null,
        "registeredName": null,
        "dateFounded": null,
        "companySize": null,
        "businessType": "Data Center",
        "industry": null,
        "emailDomains": [

        ],
        "website": "https://www.iadvantage.net"
    },
    "system": {
        "welcomeMessage": null
    },
    "deletedAt": null,
    "deleted": false,
    "verified": true,
    "tags": [
        "free"
    ],
    "status": "ACTIVE",
    "capabilities": {
        "layer3Regions": [

        ],
        "layer2Regions": [

        ],
        "layer3Metros": [

        ],
        "layer2Metros": [

        ],
        "layer3": false,
        "layer2": false
    },
    "displayOrder": -299,
    "phone": null,
    "groups": [

    ],
    "optIntoMarketingEmail": false,
    "location": null,
    "legalEntityId": null,
    "summary": null,
    "headline": null,
    "background": null,
    "avatarId": "5af12a9dd8fa59001285d8d9",
    "avatar": null,
    "name": "Mega i-Advantage",
    "isSupport": false,
    "type": "DATA_CENTER_FACILITY",
    "companies": [

    ],
    "id": "5aab421f4547120012c6d5c3",
    "online": false,
    "isFollowing": false,
    "isFollowee": false,
    "linkUserCompany": {

    },
    "token": null
}

const speeds = _.get( dataCenter, 'dataCenterFacility.speeds' );
console.log(speeds)

    // [ { value: 1000, name: '1000 Mbps' },
    // { value: 10000, name: '10000 Mbps' } ]

//if cant find matched element returns undefined

const result = _.find(speeds, function(speed) {
    return String(speed.value) === '1000'
})

console.log(result)