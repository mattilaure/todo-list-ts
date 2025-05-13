import React from "react";
import { Modal as AntModal } from "antd";

interface ModalProps {
    title: string;
    open: boolean;
    onCancel?: () => void;
    onOk?: () => void;
    children: React.ReactNode;
    centered?: boolean;
}

const Modal: React.FC<ModalProps> = ({ title, open, onCancel, onOk, children, centered }) => {
    return (
        <AntModal
            title={title}
            open={open}
            onCancel={onCancel}
            onOk={onOk}
            centered={centered}
        >
            {children}
        </AntModal>
    )
} 

export default Modal;
