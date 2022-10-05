import * as React from 'react';
import styles from './Renovation03.module.scss';
import { IRenovation03Props } from './IRenovation03Props';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Renovation03 extends React.Component<IRenovation03Props, {}> {
  public render(): React.ReactElement<IRenovation03Props> {
    return (
      <div className={ styles.renovation03 }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
