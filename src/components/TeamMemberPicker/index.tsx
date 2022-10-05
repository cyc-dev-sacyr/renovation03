import * as React from 'react';
import { ITeamMemberPickerProps } from './models';
import styles from './TeamMemberPicker.module.scss';
import * as strings from 'IssuesWebPartStrings';
import { IPersonaProps } from 'office-ui-fabric-react/lib/Persona';
import { CompactPeoplePicker, IBasePickerSuggestionsProps } from 'office-ui-fabric-react/lib/Pickers';
import { getMembersTeam } from '../../services/GraphServices';

const suggestionProps: IBasePickerSuggestionsProps = {
    suggestionsHeaderText: strings.TeamMemberPicker_SuggestionsHeaderText,
    noResultsFoundText: strings.TeamMemberPicker_NoResultsFoundText,
    loadingText: strings.TeamMemberPicker_LoadingText,
    showRemoveButtons: true
};

const TeamMemberPicker: React.FC<ITeamMemberPickerProps> = (props) => {

    const [peopleList, setPeopleList] = React.useState<IPersonaProps[]>();
    const [currentSelectedItems, setCurrentSelectedItems] = React.useState<IPersonaProps[]>(undefined);
    const [hasInitialValues, setHasInitialValues] = React.useState(false);

    const getMembers = async () => {
        let membersTeam = new Array<IPersonaProps>();
        if (props.defaultMembers) {
            if (props.defaultMembers.length > 0) {
                membersTeam = props.defaultMembers;
            }
            else {
                membersTeam = await getMembersTeam(props.teamID, props.msGraphClientFactory);
            }
        }
        else {
            membersTeam = await getMembersTeam(props.teamID, props.msGraphClientFactory);
        }
        setPeopleList(membersTeam);
    };

    React.useEffect(() => {
        getMembers();
    }, []);

    React.useEffect(() => {
        if (currentSelectedItems) {
            props.onChange(currentSelectedItems);
        }
    }, [currentSelectedItems]);

    React.useEffect(() => {
        if (peopleList) {
            if (props.defaultSelectedUsers) {
                let selectedMembers: IPersonaProps[] = [];
                props.defaultSelectedUsers.forEach(defaultUser => {
                    selectedMembers = selectedMembers.concat(peopleList.filter(member => member.id === defaultUser));
                });
                setCurrentSelectedItems(selectedMembers);
                setHasInitialValues(true);
            }
        }
    }, [peopleList]);

    const filterPersonasByText = (filterText: string): IPersonaProps[] => {
        return peopleList.filter(item => doesTextStartWith(item.text as string, filterText));
    };

    const onFilterChanged = (filterText: string, currentPersonas: IPersonaProps[], limitResults?: number): IPersonaProps[] | Promise<IPersonaProps[]> => {
        if (filterText) {
            let filteredPersonas: IPersonaProps[] = filterPersonasByText(filterText);
            filteredPersonas = removeDuplicates(filteredPersonas, currentPersonas);
            filteredPersonas = limitResults ? filteredPersonas.slice(0, limitResults) : filteredPersonas;
            return filteredPersonas;
        } else {
            return [];
        }
    };

    const onRemoveSuggestion = (item: IPersonaProps): void => {
        const indexPeopleList: number = peopleList.indexOf(item);
        if (indexPeopleList >= 0) {
            const newPeople: IPersonaProps[] = peopleList
                .slice(0, indexPeopleList)
                .concat(peopleList.slice(indexPeopleList + 1));
            setPeopleList(newPeople);
        }
    };

    const onItemsChange = (items: any[]): void => {
        setCurrentSelectedItems(items);
    };

    return (
        <>
            {hasInitialValues
                ? <>
                    {hasInitialValues}{/* Hack to reload*/}
                    <CompactPeoplePicker
                        onResolveSuggestions={onFilterChanged}
                        getTextFromItem={getTextFromItem}
                        onChange={onItemsChange}
                        pickerSuggestionsProps={suggestionProps}
                        className={'ms-PeoplePicker'}
                        onRemoveSuggestion={onRemoveSuggestion}
                        defaultSelectedItems={currentSelectedItems}
                        inputProps={{
                            'aria-label': 'People Picker',
                        }}
                        resolveDelay={300}
                        itemLimit={props.itemLimit}
                        disabled={props.disabled ? props.disabled : false}
                    />
                </>
                : <CompactPeoplePicker
                    onResolveSuggestions={onFilterChanged}
                    getTextFromItem={getTextFromItem}
                    onChange={onItemsChange}
                    pickerSuggestionsProps={suggestionProps}
                    className={'ms-PeoplePicker'}
                    onRemoveSuggestion={onRemoveSuggestion}
                    inputProps={{
                        'aria-label': 'People Picker',
                    }}
                    resolveDelay={300}
                    itemLimit={props.itemLimit}
                    disabled={props.disabled ? props.disabled : false}
                />
            }
        </>
    );
};

function doesTextStartWith(text: string, filterText: string): boolean {
    return text.toLowerCase().indexOf(filterText.toLowerCase()) === 0;
}

function removeDuplicates(personas: IPersonaProps[], possibleDupes: IPersonaProps[]) {
    return personas.filter(persona => !listContainsPersona(persona, possibleDupes));
}

function listContainsPersona(persona: IPersonaProps, personas: IPersonaProps[]) {
    if (!personas || !personas.length || personas.length === 0) {
        return false;
    }
    return personas.filter(item => item.text === persona.text).length > 0;
}

function getTextFromItem(persona: IPersonaProps): string {
    return persona.text as string;
}

export default TeamMemberPicker;