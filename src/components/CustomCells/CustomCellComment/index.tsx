import * as React from 'react';
import { ICustomCellCommentProps } from './models';
import styles from './CustomCellComment.module.scss';
import { FontIcon } from 'office-ui-fabric-react/lib/Icon';
import { IconButton, IIconProps } from 'office-ui-fabric-react';

const commentIcon: IIconProps = { iconName: 'SearchBookmark' };
const iconButtonStyles = {
    root: {
        height: 'auto',
        color: '#3D8CB9',
        cursor: 'pointer',
        width: '15px'
    }
};

export const CustomCellComment: React.FC<ICustomCellCommentProps> = (props) => {

    const redirectSearchComments = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        event.stopPropagation();
        const urlRedirect = `https://teams.microsoft.com/_#/apps/a2da8768-95d5-419e-9441-3b539865b118/search?q=%22${props.searchFilter}%22`;
        if (props.SDKmsTeams) { //If in teams 
            props.SDKmsTeams.executeDeepLink(urlRedirect);
        } else {
            window.open(urlRedirect);
        }
    };

    const redirectSearchCommentsMobile = (): void => {
        const urlRedirect = `https://teams.microsoft.com/_#/apps/a2da8768-95d5-419e-9441-3b539865b118/search?q=%22${props.searchFilter}%22`;
        if (props.SDKmsTeams) { //If in teams 
            props.SDKmsTeams.executeDeepLink(urlRedirect);
        } else {
            window.open(urlRedirect);
        }
    };

    return (
        <>
            <div className={styles.commentActive}>
                {props.isMobile
                ? <IconButton iconProps={commentIcon} styles={iconButtonStyles} onClick={redirectSearchCommentsMobile} onFocus={(ev) => ev.stopPropagation()}></IconButton>
                : <FontIcon iconName="SearchBookmark" className={styles.icon} onClick={redirectSearchComments}/>
                }
            </div>
        </>
    );
};