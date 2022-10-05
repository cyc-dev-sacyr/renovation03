import { IAttachmentFileInfo } from "@pnp/sp/attachments/types";

export interface IAttachmentsPickerProps {
    onChangeFiles(uploadedFiles: IAttachmentFileInfo[]): void;
}