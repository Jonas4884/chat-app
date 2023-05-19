import { Channel, RestChannel } from "@/common/types";
import { ReactElement } from "react"
import { ChannelBox } from "./ChannelBox";


type teamChannelProps ={
    item : RestChannel
}
export const TeamChannelList = ({item}: teamChannelProps) => {
    return (
        <ChannelBox channel={item}/>
    )
}
