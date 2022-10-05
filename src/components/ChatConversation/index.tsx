import * as React from 'react';
import { IChatConversationProps } from './models';
import styles from './ChatConversation.module.scss';
import * as strings from 'ActivitiesWebPartStrings';
import { Persona, PersonaSize } from 'office-ui-fabric-react/lib/Persona';
import { ChevronDownIcon, ChatIcon, Button } from '@fluentui/react-northstar';

const lens: any = require('../../assets/img/lens.svg');

const ChatConversation: React.FC<IChatConversationProps> = (props) => {

    const [messageIdLoadReplies, setMessageIdLoadReplies] = React.useState<string>("");

    const redirectSearchComments = (event: React.FormEvent<HTMLInputElement | HTMLButtonElement>, data: any, messageUrl: string) => {
        event.stopPropagation();
        if (props.SDKmsTeams) { //If in teams 
            props.SDKmsTeams.executeDeepLink(messageUrl);
        } else {
            console.log("SDK Teams no definido");
            window.open(messageUrl);
        }
    };

    const getRepliesMessages = async (event: React.FormEvent<HTMLInputElement | HTMLButtonElement>, data: any, parentMessageId: string): Promise<void> => {
        try {
            setMessageIdLoadReplies(parentMessageId);
            await props.getRepliesMessages(event, data, parentMessageId);
            setMessageIdLoadReplies("");
        } catch (error) {
            console.log(error);
            setMessageIdLoadReplies("");
        }
    };

    return (
        <>
            {props.messages.length > 0 ?
                props.messages.map(message => {
                    return (
                        <div className={styles.conversation}>
                            <div className={styles.parentMessage}>
                                <div className={styles.senderPhoto}>
                                    <Persona text={message.From.displayName} imageUrl={message.From.blobUrlPhoto} size={PersonaSize.size32} hidePersonaDetails={true} />
                                </div>
                                <div className={styles.principalMessage}>
                                    <div className={styles.senderInfo}>
                                        <a onClick={(e: any) => redirectSearchComments(e, null, message.WebUrl)} className={styles.senderNameLink}>{message.From.displayName} {strings.ActivityMessageSearch.HasPosted}</a>
                                        <div className={styles.senderDate}>
                                            {message.CreatedDateTime.toLocaleDateString()} {message.CreatedDateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </div>
                                    </div>
                                    {(() => {
                                        switch (message.Body.ContentType) {
                                            case 'text':
                                                return (<p>{message.Body.Content}</p>);
                                            case 'html':
                                                return (<>
                                                    <div
                                                        dangerouslySetInnerHTML={{ __html: message.Body.Content }}
                                                    />
                                                </>);
                                            default:
                                                return null;
                                        }
                                    })()}
                                    <Button className={styles.btnSearchReplies} icon={<ChevronDownIcon />} iconOnly secondary onClick={(e: any, data: any) => getRepliesMessages(e, data, message.Id)} loading={messageIdLoadReplies === message.Id} hidden={message.repliesLoaded !== undefined} title={strings.ActivityMessageSearch.Replies} size='small' />
                                </div>
                                <div className={styles.linkMessage}>
                                    <Button icon={<ChatIcon />} iconOnly secondary onClick={(e: any, data: any) => redirectSearchComments(e, data, message.WebUrl)} title={strings.ActivityMessageSearch.GoToMessage} size='small' text />
                                </div>
                            </div>

                            <div>
                                {
                                    message.repliesLoaded
                                        ? message.replies.length > 0
                                            ? <div className={styles.repliesContainer}>
                                                {message.replies.map(reply => {
                                                    return (
                                                        <div className={styles.reply}>
                                                            <div className={styles.replierPhoto}>
                                                                <Persona text={reply.From.displayName} imageUrl={reply.From.blobUrlPhoto} size={PersonaSize.size32} hidePersonaDetails={true} />
                                                            </div>
                                                            <div className={styles.replierMessage}>
                                                                <div className={styles.replierSenderInfo}>
                                                                    <span className={styles.replierSenderNameLink}>{reply.From.displayName}</span>
                                                                    <div className={styles.replierSenderDate}>
                                                                        {reply.CreatedDateTime.toLocaleDateString()} {reply.CreatedDateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                                    </div>
                                                                </div>
                                                                {(() => {
                                                                    switch (reply.Body.ContentType) {
                                                                        case 'text':
                                                                            return (<p>{reply.Body.Content}</p>);
                                                                        case 'html':
                                                                            return (<>
                                                                                <div
                                                                                    dangerouslySetInnerHTML={{ __html: reply.Body.Content }}
                                                                                />
                                                                            </>);
                                                                        default:
                                                                            return null;
                                                                    }
                                                                })()}
                                                            </div>
                                                            <div className={styles.linkMessage}>
                                                                <Button icon={<ChatIcon />} iconOnly secondary onClick={(e: any, data: any) => redirectSearchComments(e, data, reply.WebUrl)} title={strings.ActivityMessageSearch.GoToMessage} size='small' text />
                                                            </div>
                                                        </div>
                                                    );
                                                })
                                                }
                                            </div>
                                            : <div className={styles.repliesContainer}>
                                                <div className={styles.reply}>
                                                    <h3>{strings.ActivityMessageSearch.WithoutReplies}</h3>
                                                </div>
                                            </div>
                                        : message.repliesLoaded === false
                                        && <div className={styles.repliesContainer}>
                                            <div className={styles.reply}>
                                                <h3>{strings.ActivityMessageSearch.WithoutReplies}</h3>
                                            </div>
                                        </div>
                                }
                            </div>
                        </div>
                    );
                })
                : <div className={styles.noMessages}>
                    <img src={lens}></img>
                    <h3>{strings.ActivityMessageSearch.WithoutMessages}</h3>
                </div>
            }
        </>
    );
};

export default ChatConversation;