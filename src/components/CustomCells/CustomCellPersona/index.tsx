import * as React from 'react';
import { ICustomCellPersonaProps } from './models';
import styles from './CustomCellPersona.module.scss';
import { Persona, PersonaSize } from 'office-ui-fabric-react/lib/Persona';
import { IUserInfo } from '../../../services/models';

export const CustomCellPersona: React.FC<ICustomCellPersonaProps> = (props) => {

    const [infoUser, setInfoUser] = React.useState<IUserInfo>();

    const iniComponent = () => {
        let user: IUserInfo = props.infoUsers.filter(person => person.id === props.value)[0];
        setInfoUser(user);
    };

    React.useEffect(() => {
        iniComponent();
    }, [props]);

    return (
        <>{infoUser ?
            <Persona {...{ imageUrl: infoUser.blobUrlPhoto, text: infoUser.displayName }} size={PersonaSize.size28} className={styles.userNameText} />
            : ""
        }
        </>
    );
};