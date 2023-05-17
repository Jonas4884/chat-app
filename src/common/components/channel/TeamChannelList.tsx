import { Channel } from "@/common/types";
import { ReactElement } from "react"

type ChannelList ={
    key : string,
    type?: string,
    channel : Channel
}
export const TeamChannelList = ({key,type, channel}:ChannelList) => {
    return (
        <div className="team-channel-list" key={key}>
            <div className="team-channel-list__header">
                <p className="team-channel-list__header__title">
                    <p>
                    Hello
                    </p>
                    {type === 'team' ? 'Public' : 'Private'}
                </p>
                <>
                {
                    console.log("tonga eto")
                    
                }
                </>

            </div>
            <div key={channel.id}>
                <>                `# ${channel.name}`            </>
            </div>
        </div>
    )
}
