import * as React from 'react';
import { Spinner, SpinnerSize } from 'office-ui-fabric-react/lib/Spinner';
import { ActionButton, IconButton } from 'office-ui-fabric-react/lib/Button';
import { StepTitleProps } from './models';

export const StepTitle: React.FC<StepTitleProps> = (props) => {
     const { stepText, isValid, loading } = props;
     return <React.Fragment>
          <ActionButton
               style={{ color: loading ? "" : isValid ? "green" : "crimson" }}
               onRenderIcon={(iconProps, context) => {
                    // Si el nombre del icono a mostrar no es undefined se muestra el icono indicado. En caso contrario spinner
                    if (loading) {
                         return <Spinner theme={iconProps.theme} size={SpinnerSize.small} />;
                    }
                    else {
                         return <IconButton
                              theme={iconProps.theme}
                              iconProps={iconProps.iconProps}
                              style={{ color: loading ? "" : isValid ? "green" : "crimson", marginLeft: -8 }}
                              allowDisabledFocus={iconProps.allowDisabledFocus}
                         />;
                    }
               }}
               iconProps={{ iconName: isValid ? 'SkypeCircleCheck' : 'ErrorBadge' }}
               allowDisabledFocus
               disabled={loading}
          >
               {stepText}
          </ActionButton>
     </React.Fragment>;
};

export default StepTitle;
export { StepTitleProps } from './models';
