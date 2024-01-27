export const newsReducer = (state, action) => {
    const {type, payload} = action;

    switch(type) {
        case "GET_NEWS":
            return {...state, newsList: payload.news}
        default:
            throw new Error("Nincs ilyen eset a newsReducerben!")
    }
}