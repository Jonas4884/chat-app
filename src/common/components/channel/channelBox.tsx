import { Channel, NewChannel } from "@/common/types";
import { confStatusIcon } from "./utils/confidentiality";

export const ChannelBox = (channel: NewChannel) => {
    return (
        <>
         
            <div className="row bg-danger" >
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body" key={channel.id}>
                            <h5 className="card-title">{channel.name} . {confStatusIcon(channel.type)}</h5>
                            <p className="card-text">{channel.owner.name}</p>
                            <a href="#" className="btn btn-primary">Last chat be here</a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
