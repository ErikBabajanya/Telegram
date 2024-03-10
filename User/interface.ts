interface User {
    _id: string,
    firstName: string,
    lastName: string,
    username: string,
    pictur?: Buffer,
    email: string,
    password: string,
}

export default User


