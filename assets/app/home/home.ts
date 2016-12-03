export class Home {
    message: String;
    homeId: String;
    timestamp: Number;
    userName: String;
    friendName: String;
    
    constructor (message: String, homeId: String, timestamp: Number, userName: String, friendName: String) {
        this.message = message;
     	this.homeId = homeId;
        this.timestamp = timestamp;
        this.userName = userName;
        this.friendName = friendName;
    }
}