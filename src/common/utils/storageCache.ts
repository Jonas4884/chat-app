import { User } from "../types";

const defaultUser = 'user';
const defaultUserName = 'name';
const accessTokenItem = 'access-token-value'


const getJson = <T> (key: string) =>{
    if(typeof window !== 'undefined'){
        const value: T =JSON.parse(localStorage.getItem(key) as string);
        return value;
    }
   
}
const saveJson= <T> (key: string,value: T) =>{
     if(typeof window !== 'undefined'){
    localStorage.setItem(key,JSON.stringify(value));
    return value
}
}
const getKeyAsString = (key:string)=>{
    if(typeof window !== 'undefined'){
    localStorage.getItem(key);}}
const setValueStored = (key:string,value:string)=>{
    if(typeof window !== 'undefined'){
    localStorage.setItem(key,value)}}

export const getSavedCred = {
    user: ()=> getJson<User>(defaultUser),
    accessToken:()=> getKeyAsString(accessTokenItem),
    accessUserName:()=> getKeyAsString(defaultUserName)
}
export const clearCredential = {
   clearData : ()=> localStorage.clear()
}
export const cache = {
    user: (user: User) => saveJson(defaultUser,user),
    accessToken:(accessToken = '')=> setValueStored(accessTokenItem,accessToken),
    accessUser:(userName = '')=> setValueStored(userName,defaultUserName)
}