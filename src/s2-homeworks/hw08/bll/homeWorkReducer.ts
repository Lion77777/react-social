import { UserType } from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const users = [...state]
            // const reversedUsers = users.map((user, i) => ({
            //     _id: user._id,
            //     name: users.reverse()[i].name,
            //     age: users.reverse()[i].age
            // }))

            return action.payload === 'up' ? users.sort((a, b) => a.name.localeCompare(b.name)) : users.sort((a, b) => b.name.localeCompare(a.name)) // need to fix
        }
        case 'check': {

            return state.filter(user => user.age > action.payload) // need to fix
        }
        default:
            return state
    }
}
