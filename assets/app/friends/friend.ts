export class Friend {
    firstName: string;
    userId: string;
    friendId: string;
    
    constructor (firstName: string, userId?: string, friendId?: string) {
        this.firstName = firstName;
        this.userId = userId;
        this.friendId = friendId;
    }
}