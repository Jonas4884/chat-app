import ChatBox from "@/common/components/chat/chatBox"
import { channelProvider } from "@/providers/channel-provider"
import { number } from "yup"

const ActualChannel= (id : number)=>{
        return(
            <>
            <ChatBox />
            </>
        )
        }
export const getServerSideProps =async (context) => {
    const res = await channelProvider.getChanelById(id) 
    return {
        props:{res}
    }
}
export default ActualChannel;