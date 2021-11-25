const USER_KEY = 'user'
export const userService = {
    getUser,
    addMove
}


function getUser() {
    return _loadFromSessionStorage(USER_KEY) || _createDefaultUser()
}

function addMove(toUser, amount) {
    let loggedInUser = _loadFromSessionStorage(USER_KEY)
    loggedInUser.moves.unshift({toId:toUser._id, name: toUser.name, amount, createdAt: Date.now() })
    loggedInUser.coins -= amount
    _saveToSessionStorage(USER_KEY, loggedInUser)

}

function _saveToSessionStorage(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value));
}
function _loadFromSessionStorage() {
    return JSON.parse(sessionStorage.getItem(USER_KEY));
}

function _createDefaultUser() {
    const user = {
        fullname: "Israel",
        coins: 100,
        moves: []
    }
    _saveToSessionStorage(USER_KEY, user)
    return user
}