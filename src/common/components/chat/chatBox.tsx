import { User } from "@/common/types";
import { userRequest } from "@/providers/utils";
import { useEffect, useState } from "react";


const chatBox = (user: User,position: string,message: string) =>{
   
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
export default chatBox;