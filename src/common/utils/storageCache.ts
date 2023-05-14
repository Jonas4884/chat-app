import { User } from "../types";



const defaultUser = 'chat-user';
const accessTokenItem = 'access-token-value'


const getJson = <T> (key: string) =>{
    const value: T =JSON.parse(localStorage.getItem(key) as string);
    return value;
}
const saveJson= <T> (key: string,value: T) =>{
    localStorage.setItem(key,JSON.stringify(value));
    return value
}

const getKeyAsString = (key:string)=>localStorage.getItem(key);
const setValueStored = (key:string,value:string)=>localStorage.setItem(key,value)

export const getSavedCred = {
    user: ()=> getJson<User>(defaultUser),
    accessToken:()=> getKeyAsString(accessTokenItem)
}
export const cache = {
    user: (user: User) => saveJson(defaultUser,user),
    accessToken:(accessToken = '')=> setValueStored(accessTokenItem,accessToken)
}