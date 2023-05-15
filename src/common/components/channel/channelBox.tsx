import { Channel,ChannelMemberList } from "@/common/types";

const channelBox= (message : string,member : ChannelMemberList)=>{
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