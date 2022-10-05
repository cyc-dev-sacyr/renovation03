import { MSGraphClientFactory } from '@microsoft/sp-http';
import { IPersonaProps } from 'office-ui-fabric-react/lib/Persona';

export interface ITeamMemberPickerProps {
    teamID: string;
    msGraphClientFactory: MSGraphClientFactory;
    itemLimit: number;
    defaultMembers?: IPersonaProps[];
    defaultSelectedUsers?: string[];
    disabled?: boolean;
    onChange(teamMembers: IPersonaProps[]): void;
}