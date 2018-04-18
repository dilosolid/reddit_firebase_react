import { observable, action, computed,autorun } from 'mobx';
import firebase from 'firebase';
import 'firebase/firestore';
import config from '../config/firebaseconfig.js';

firebase.initializeApp(config);
var firestoreDB = firebase.firestore();    

class RedditCloneStore {
  @observable postsArr = [];

  constructor(){    
    firestoreDB.collection("Posts").get().then((querySnapshot) => {
      this.addItemsToStore(querySnapshot);
    });

    firestoreDB.collection("Posts").onSnapshot((querySnapshot) => {                
      this.addItemsToStore(querySnapshot);
    });
  }    

  addItemsToStore(querySnapshot){
    let result = [];      
    querySnapshot.forEach((doc) => {          
        let item = doc.data();
        item.id = doc.id;      
        result.push(item);
    });      
    this.postsArr.replace(result);
  }

}
  
const redditCloneStore = new RedditCloneStore();
export default redditCloneStore;

