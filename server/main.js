import { Meteor } from 'meteor/meteor';
import { PList } from '../imports/collections/PList';
import { IMAGES } from '../imports/ui/StaticData';

Meteor.startup(() => {
  // code to run on server at startup

  const numberRecords = PList.find({}).count();
  console.log(numberRecords);
  if(!numberRecords) {
    for(var i = 0; i < IMAGES.length; i++) {
      PList.insert({
        title: IMAGES[i].title,
        link: IMAGES[i].link
      });
    }
  }

  Meteor.publish('plist', function(per_page) {
    return PList.find({}, { limit: per_page, skip: 1 });
  });

  // Meteor.publish('plist', function(skipCount) {
  //   var positiveIntegerCheck = Match.Where(function(x) {
  //     positiveIntegerCheck(x, Match.Integer);
  //     return x >= 0;
  //   });
  //   positiveIntegerCheck(skipCount, positiveIntegerCheck);

  //   return PList.find({}, {
  //     limit: 1, //records to show per page
  //     skip: skipCount
  //   })
  // });
});
