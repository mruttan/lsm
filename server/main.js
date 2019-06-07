import { Meteor } from 'meteor/meteor';
//import { PList } from '../imports/collections/PList';
//import { PRODUCTS } from '../imports/ui/StaticData';

Meteor.startup(() => {
  // code to run on server at startup

  // const numberRecords = PList.find({}).count();
  // if(!numberRecords) {
  //   for(var i = 0; i < PRODUCTS.length; i++) {
  //     PList.insert({
  //       page: PRODUCTS[i].page,
  //       title: PRODUCTS[i].title,
  //       link: PRODUCTS[i].link
  //     });
  //   }
  // }

  // Meteor.publish('plist', function(page_num) {
  //   return PList.find({}, { limit: page_num });
  //   //return PList.find({}, { limit: page_num, skip: 1 });
  // });

  // Meteor.publish('plist', function(page_num) {
  //   return PList.find({ page: { $eq: page_num }});
  // });
  
  
  // Meteor.publish('plist', function() {
  //   return PList.find({});
  // });

  
  //a few things to try: multiple publishes?
  //figure out how to place restrictions on publish
  //query the find method, assign values to items such as a page: 1, 2 etc identifier
  //going to try fucking around w/ state and see if that works.
  

  //plan is to pass list to products, then to use state to select only 1 record 
  //at a time
});

