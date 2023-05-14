import { Channel, ChannelMember } from "@/common/types";

const channelBox= (message : string,member : ChannelMember)=>{
    return(
        <>
            <div>
                <>
                    {
                       member.name.map((key,value)=>{
                        <p key={key.id}>
                            {key.name}
                        </p>
                       })
                    }
                </>
            </div>
            <div>
                {message}
            </div>
        
        </>
    )
}