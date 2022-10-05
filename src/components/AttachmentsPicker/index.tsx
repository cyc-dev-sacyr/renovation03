import * as React from 'react';
import { IAttachmentsPickerProps } from './models';
import { IAttachmentFileInfo } from "@pnp/sp/attachments/types";
import styles from './AttachmentsPicker.module.scss';
import { FormButton } from '@fluentui/react-northstar/dist/es/components/Form/FormButton';
import { CloseIcon } from '@fluentui/react-icons-northstar';
import * as strings from 'IssuesWebPartStrings';
import { Attachment } from '@fluentui/react-northstar/dist/es/components/Attachment/Attachment';

const AttachmentsPicker: React.FC<IAttachmentsPickerProps> = (props) => {

    const [uploadedFiles, setUploadedFiles] = React.useState<IAttachmentFileInfo[]>([]);

    React.useEffect(() => {
        props.onChangeFiles(uploadedFiles);
    }, [uploadedFiles]);

    const onClickUpload = () => {
        if (document.getElementById("attachmentsFileUploader")) {
            document.getElementById("attachmentsFileUploader").click();
        }
    };

    const addFile= (event) => {
        let resultFile = event.target.files;
        let currentFiles= [...uploadedFiles];
        for (var i = 0; i < resultFile.length; i++) {
            var file = resultFile[i];
            var reader = new FileReader();
            reader.onload = ((file2) => {
                return (e) => {
                    //Push the converted file into array 
                    currentFiles.push({
                        name: file2.name,
                        content: e.target.result
                    });
                    setUploadedFiles(currentFiles);
                };
            })(file);
            reader.readAsArrayBuffer(file);
        }
    };

    const removeFile = (fileName:string) => {
        let currentFiles= [...uploadedFiles];
        let indexFileToDelete: number=  currentFiles.map(file => { return file.name; }).indexOf(fileName);
        if (indexFileToDelete !== -1) { 
            currentFiles.splice(indexFileToDelete, 1);
            setUploadedFiles(currentFiles);
        }
    };

    return (
        <div className={styles.attachmentsPickerContainer}>
            <div className={styles.addAttachmentsButtonContainer}>
                <FormButton content={strings.FormField_Attachments_UploadFile} secondary onClick={onClickUpload} />
                <div style={{display: 'none'}}>
                    <input type="file" multiple={true} id="attachmentsFileUploader" onChange={addFile} />
                </div>
            </div>
            {uploadedFiles && uploadedFiles.length>0 && 
                <div className={styles.fileContainer}>
                    {uploadedFiles.map(file => {
                        return(
                            <div className={styles.fileAttachment}>
                                <Attachment
                                    header={file.name}
                                    actionable
                                    action={{
                                        icon: <CloseIcon />,
                                        onClick: () => removeFile(file.name),
                                        title: strings.FormField_Button_Remove,
                                    }}
                                />
                            </div>
                        );})
                    }
                </div>
            }
        </div>
    );
};

export default AttachmentsPicker;