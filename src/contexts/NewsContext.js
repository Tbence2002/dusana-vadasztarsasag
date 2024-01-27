import { createContext, useContext, useEffect, useReducer } from "react";
import { newsReducer } from "../reducers/newsReducer";
import axiosInstance from "../components/helpers/axiosInstance";

const initialState = {
    newsList: [],
}

const NewsContext = createContext(initialState);

export const NewsProvider = ({children}) => {
    const [state, dispatch] = useReducer(newsReducer, initialState);

    useEffect(() => {
        const getAllNews = () => {
            axiosInstance.get("news/getAllNews").then((response) => {
                if(response.data) {
                    dispatch({
                        type:"GET_NEWS",
                        payload: {
                            news:response.data
                        }
                    })
                } else {
                    console.log("Hiba történt lekérés során.")
                }
            })
        }
        getAllNews();
    }, [])

    const value = {
        newsList: state.newsList,
    }

    return (
        <NewsContext.Provider value={value}>
            {children}
        </NewsContext.Provider>
    )
}

export const useNews = () => {
    const context = useContext(NewsContext);
    return context;
}