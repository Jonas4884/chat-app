import { Channel, RestChannel } from "@/common/types";


type ChannelBoxType = {
    channel ?: RestChannel
}
export const ChannelBox = ({channel}: ChannelBoxType) => {
    return (
        <>
                    <div className="card channel-card">
                        <div className="card-body" key={channel?.id}>
                            <h5 className="card-title">{channel?.name}
                            </h5>
                            <a href="#" className="btn btn-primary">Last chat be here</a>
                        </div>
                    </div>
        </>
    )
}
