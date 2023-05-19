import { Channel, RestChannel } from "@/common/types";
import { useRouter } from "next/router";


type ChannelBoxType = {
    channel ?: RestChannel
}
export const ChannelBox = ({channel}: ChannelBoxType) => {
    const redirectChannel = useRouter()
    const  Channel = (id ?:number)=>{
        redirectChannel.push(`/chat/${id}`)
    }
    return (
        <>
                    <div className="card channel-card" onClick={()=>Channel(channel?.id)}>
                        <div className="card-body" key={channel?.id}>
                            <h5 className="card-title">{channel?.name}
                            </h5>
                            <a href="#" className="btn btn-primary">Last chat be here</a>
                        </div>
                    </div>
        </>
    )
}
