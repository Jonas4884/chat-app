import { User } from "@/common/types";
import { userRequest } from "@/providers/utils";
import { useEffect, useState } from "react";

type Chat ={
    user: User,message: string
}

const ChatBox = (props:Chat) =>{
   return(
    <>
        <div>
            <>
                {
                    props?.user
                }
            </>
            <>
                {
                    props?.message
                }
            </>
        </div>
    </>
   ) 

}
export default ChatBox;