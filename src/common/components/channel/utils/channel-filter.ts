import { RestChannel } from "@/common/types";

export const customChannelTeamFilter = (channels : RestChannel[]) => { 
    return channels?.filter((channel) => channel.type === 'private');
}

export const customChannelDirectFilter = (channels : RestChannel[]) => {
    return channels?.filter((channel) => channel.type === 'public');
}