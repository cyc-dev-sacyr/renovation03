import * as React from 'react';
import { ICustomCellExpirationDateProps } from './models';
import styles from './CustomCellExpirationDate.module.scss';
import { FontIcon } from 'office-ui-fabric-react/lib/Icon';

export const CustomCellExpirationDate: React.FC<ICustomCellExpirationDateProps> = (props) => {
    return (
        <>
            {
                new Date(props.value) <= new Date() ?
                    <div className={styles.warningDate}>
                        <FontIcon iconName="Warning" className={styles.icon} />
                        <span>{new Date(props.value).toLocaleDateString(props.cultureName, { year: "numeric", month: "2-digit", day: "2-digit" })}</span>
                    </div>
                    :
                    <span>{new Date(props.value).toLocaleDateString(props.cultureName, { year: "numeric", month: "2-digit", day: "2-digit" })}</span>
            }
        </>
    );
};