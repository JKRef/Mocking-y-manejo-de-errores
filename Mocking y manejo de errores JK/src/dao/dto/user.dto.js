export default class UserDTO {
    constructor(user){
        // envio de informacion solo para current
        this.name = user.first_name + ' ' + user.last_name,
        this.role = user.role
    }
}