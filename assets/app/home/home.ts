export class Home {
    message: String;
    homeId: String;
    timestamp: String;
    
    constructor (message: String, homeId: String, timestamp: String) {
        this.message = message;
     	this.homeId = homeId;
        this.timestamp = timestamp;
    }
}