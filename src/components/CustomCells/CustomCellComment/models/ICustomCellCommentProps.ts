import * as microsoftTeams from "@microsoft/teams-js";

export interface ICustomCellCommentProps {
  searchFilter: string;
  SDKmsTeams?: typeof microsoftTeams;
  isMobile?: boolean;
}  