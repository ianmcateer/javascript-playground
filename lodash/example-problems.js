const _ = require("lodash");

// find the subscription that includes the itemId 5c11bb2fe2d172000a29a7a6

const state = {
  subscriptions: [{
        subscriptionLength: 1,
        subscriptionLengthUnit: "y",
        itemCollectionType: "port",
        id: "5c119232b55ea3000a60c049",
        userId: "59faac4d589fd426bea27759",
        bundleId: "5b3c4909f59a720014206f79",
        deletedAt: null,
        createdAt: "2018-12-12T22:56:50.124Z",
        updatedAt: "2018-12-12T22:56:54.168Z",
        itemIds: ["5c1192322bac80000aa96939"]
      }, {
        subscriptionLength: 1,
        subscriptionLengthUnit: "YEAR",
        itemCollectionType: "connection",
        id: "5c11bb2f891498000acdcb07",
        userId: "59faac4d589fd426bea27759",
        bundleId: "5b3c4909f59a720014206f79",
        deletedAt: null,
        createdAt: "2018-12-13T01:51:43.953Z",
        updatedAt: "2018-12-13T01:51:43.954Z",
        itemIds: ["5c11bb2fe2d172000a29a7a6"]
      }
  ]
};

const getSubscriptions = state => _.get( state, 'subscriptions' );
// first get the subscriptions array fro the state
// console.log(getSubscriptions(state))

const getSubscriptionByConnectionId = (state, connectionId) => {
  const subscriptions = getSubscriptions( state );
  return _.find( subscriptions, sub =>
    _.includes( sub.itemIds, connectionId ) );
}

const sub = getSubscriptionByConnectionId(state, '5c11bb2fe2d172000a29a7a6')
console.log(sub)


// export const getSubscriptionFromConnectionId = ( state, connectionId ) => {
//   const subscriptions = getSubscriptions(state);
//   return _.filter(subscriptions, sub => _.includes(sub.itemIds, connectionId))
// }

// export const getSubscriptionFromConnectionId = ( state, connectionId ) => {
// //   const subscriptions = getSubscriptions( state );
// //   return _.filter(subscriptions, sub => _.includes(sub.itemIds, connectionId))[0];
// // }
