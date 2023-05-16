import { User } from "@/common/types";
import { userRequest } from "@/providers/utils";
import { useEffect, useState } from "react";


const ChatBox = (props:any) =>{
   const {user: User,message: string} = props
   return(
    <>
        <div>
            <div>
                {
                    user?.userName
                }
            </div>
            <div>
                {
                    message
                }
            </div>
        </div>
    </>
   ) 

}
export default ChatBox;