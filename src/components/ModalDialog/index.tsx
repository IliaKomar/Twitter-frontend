import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import OutsideClickHandler from 'react-outside-click-handler';

interface ModalDialogProps {
    children: React.ReactNode;
    title: string;
    visible: boolean;
    onClose: () => void;
}

const ModalDialog: React.FC<ModalDialogProps> = ({
    title,
    children,
    visible = false,
    onClose,
}): React.ReactElement | null => {
    if (!visible) {
        return null;
    }

    return (
        <Dialog
            open={visible}
            aria-labelledby="form-dialog-title"
        >
            <OutsideClickHandler onOutsideClick={onClose}>
                <DialogTitle id="form-dialog-title">
                    <IconButton onClick={onClose} color="secondary" aria-label="close">
                        <CloseIcon style={{ fontSize: 26 }} color="secondary" />
                    </IconButton>
                    {title}
                </DialogTitle>
                <DialogContent>{children}</DialogContent>
            </OutsideClickHandler>
        </Dialog>
    );
};

export default ModalDialog;
