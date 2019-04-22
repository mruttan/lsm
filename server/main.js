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

  Meteor.publish('plist', function() {
    return PList.find({}, { limit: 20 });
  })
});
