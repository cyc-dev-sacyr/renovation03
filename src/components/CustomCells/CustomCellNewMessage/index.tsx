import * as React from 'react';
import { ICustomCellNewMessageProps } from './models';
import styles from './CustomCellNewMessage.module.scss';
import { FontIcon } from 'office-ui-fabric-react/lib/Icon';
import { IconButton, IIconProps } from 'office-ui-fabric-react';
import { Spinner, SpinnerSize } from 'office-ui-fabric-react/lib/Spinner';
import { getChannelByName, sendActivityMessage, sendIssueMessage, sendNotificationToUsers } from '../../../services/GraphServices';
import { ACTIVITYCHANNELNAME, ISSUECHANNELNAME, Functionality } from '../../../utils';
import { IMessageChat } from '../../../services/models';

const commentAddIcon: IIconProps = { iconName: 'CommentAdd' };
const iconButtonStyles = {
    root: {
        height: 'auto',
        color: '#3D8CB9',
        cursor: 'pointer',
        width: '15px'
    }
};

export const CustomCellNewMessage: React.FC<ICustomCellNewMessageProps> = (props) => {

    const [loading, setLoading] = React.useState(false);
    const [hasError, setHasError] = React.useState(false);

    React.useEffect(() => {
        if (hasError) {
            setTimeout(() => setHasError(false), 5000);
        }
    }, [hasError]);

    const newMessageAndRedirect = async (): Promise<void> => {
        setLoading(true);
        let messageChat: IMessageChat = null;

        if (props.Functionality === Functionality.Activities) {
            const activityChannelID = await getChannelByName(props.msGraphClientFactory, props.teamID, ACTIVITYCHANNELNAME);
            if (activityChannelID !== "") {
                messageChat = await sendActivityMessage(props.msGraphClientFactory, props.teamID, activityChannelID, props.activity);
                if (messageChat != null) {
                    if (props.activity.AssignedTo) {
                        await sendNotificationToUsers(messageChat.id, props.activity.AssignedTo.map(assignedTo => assignedTo.Id), props.teamID, activityChannelID, props.msGraphClientFactory, props.userID, props.Functionality, props.activity.Denomination);
                    }
                }
                else {
                    setHasError(true);
                }
            }else {
                setHasError(true);
            }
        } else if (props.Functionality === Functionality.Issues) {
            const issueChannelID = await getChannelByName(props.msGraphClientFactory, props.teamID, ISSUECHANNELNAME);
            if (issueChannelID !== "") {
                messageChat = await sendIssueMessage(props.msGraphClientFactory, props.teamID, issueChannelID, props.issue);
                if (messageChat != null) {
                    if (props.issue.AssignedTo) {
                        await sendNotificationToUsers(messageChat.id, props.issue.AssignedTo.map(assignedTo => assignedTo.Id), props.teamID, issueChannelID, props.msGraphClientFactory, props.userID, props.Functionality, props.issue.Denomination);
                    }
                }
                else {
                    setHasError(true);
                }
            }
            else {
                setHasError(true);
            }
        }
        if (messageChat.url) {
            if (props.SDKmsTeams) { //If in teams 
                props.SDKmsTeams.executeDeepLink(messageChat.url);
            } else {
                window.open(messageChat.url);
            }
        }
        setLoading(false);
    };

    return (
        <>
            {loading
                ? <div className={styles.containerSpinner}>
                    <Spinner size={SpinnerSize.small} />
                </div>
                : <div className={styles.commentActive}>
                    {/* {false
                        ? <IconButton iconProps={commentAddIcon} styles={iconButtonStyles} onClick={newMessageAndRedirect} onFocus={(ev) => ev.stopPropagation()}></IconButton>
                        : <FontIcon iconName="CommentAdd" className={styles.icon} onClick={newMessageAndRedirect} />
                    } */}
                    {hasError
                        ? <FontIcon iconName="ErrorBadge" className={styles.iconError} />
                        : <FontIcon iconName="CommentAdd" className={styles.icon} onClick={newMessageAndRedirect} />
                    }
                </div>
            }
        </>
    );
};