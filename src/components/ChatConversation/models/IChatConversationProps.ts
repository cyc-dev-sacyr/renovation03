import * as microsoftTeams from "@microsoft/teams-js";
import { IChannelConversation } from "../../../webparts/activities/components/ActivityMessageSearch/models";

export interface IChatConversationProps {
    messages: IChannelConversation[];
    SDKmsTeams?: typeof microsoftTeams;
    getRepliesMessages: (event: React.FormEvent<HTMLInputElement | HTMLButtonElement>, data: any, parentMessageId: string) => Promise<void>;
}