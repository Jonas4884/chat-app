import { Channel, NewChannel } from "@/common/types";
import { confStatusIcon } from "./utils/confidentiality";

type ChannelBoxType = {
    channel ?: Channel 
}
export const ChannelBox = ({channel}: ChannelBoxType) => {
    return (
        <>
         
            <div className="row bg-danger" >
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body" key={channel.id}>
                            <h5 className="card-title">{channel.name} . {confStatusIcon(channel.type)}</h5>
                            
                            <a href="#" className="btn btn-primary">Last chat be here</a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
