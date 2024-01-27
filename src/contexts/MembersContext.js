import { createContext, useContext, useReducer, useEffect } from "react";
import { membersReducer } from "../reducers/membersReducer";
import axiosInstance from "../components/helpers/axiosInstance";

const initialState = {
    membersList: [],
}

const MembersContext = createContext(initialState);

export const MembersProvider = ({children}) => {
    const [state, dispatch] = useReducer(membersReducer, initialState);

    useEffect(() => {
        const getAllMembers = () => {
            axiosInstance.get("member/getAllMembers").then((response) => {
                if(response.data) {
                    dispatch({
                        type:"GET_MEMBERS",
                        payload: {
                            members:response.data
                        }
                    })
                } else {
                    console.log("Hiba történt a tagok lekérése során.")
                }
            })
        }
        getAllMembers();
    }, [])

    const value = {
        membersList: state.membersList,
    }

    return (
        <MembersContext.Provider value={value}>
            {children}
        </MembersContext.Provider>
    )
}

export const useMembers = () => {
    const context = useContext(MembersContext);
    return context;
}