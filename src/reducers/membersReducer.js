export const membersReducer = (state, action) => {
    const {type, payload} = action;

    switch(type) {
        case "GET_MEMBERS":
            return {...state, membersList: payload.members}
        default:
            throw new Error("Nincs ilyen eset a membersReducerben!")
    }
}