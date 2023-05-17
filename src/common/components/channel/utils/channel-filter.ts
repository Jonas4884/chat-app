import { Channel } from "@/common/types";

export const customChannelTeamFilter = (channels : Channel[]) => {
    return channels.filter((channel) => channel.type === 'private');
}

export const customChannelDirectFilter = (channels : Channel[]) => {
    return channels.filter((channel) => channel.type === 'public');
}