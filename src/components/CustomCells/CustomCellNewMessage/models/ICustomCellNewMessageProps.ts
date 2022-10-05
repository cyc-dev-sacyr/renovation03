import * as microsoftTeams from "@microsoft/teams-js";
import { MSGraphClientFactory } from '@microsoft/sp-http';
import { IActivity } from "../../../../webparts/activities/components/models";
import { IIssue } from "../../../../webparts/issues/components/models";
import { Functionality } from "../../../../utils";

export interface ICustomCellNewMessageProps {
  SDKmsTeams?: typeof microsoftTeams;
  msGraphClientFactory: MSGraphClientFactory;
  teamID: string;
  Functionality: Functionality;
  activity?: IActivity;
  issue?: IIssue;
  userID: string;
}
