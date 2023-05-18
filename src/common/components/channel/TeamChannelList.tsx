import { Channel, RestChannel } from "@/common/types";
import { ReactElement } from "react"


export const TeamChannelList = (props:RestChannel) => {
    return (
        <div className="team-channel-list" key={props.id}>
            <div className="team-channel-list__header">
                <p className="team-channel-list__header__title">
                    <p>
                    
                    </p>
                    {props.type === 'team' ? 'Public' : 'Private'}
                </p>
                <>
                {
                    console.log("tonga eto")
                    
                }
                </>

            </div>
            <div key={props.id}>
                <>                `# ${props.name}`            </>
            </div>
        </div>
    )
}
