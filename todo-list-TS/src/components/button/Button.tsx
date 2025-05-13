import React from "react";

//ANT
import { Button as AntButton } from "antd";

//interfaces
import type { clickable } from "../../interfaces/interfaces";
import type { labeled } from "../../interfaces/interfaces";

interface ButtonProps {
    variant?: "outlined" | "solid" | "dashed";
    color?: string;
    className?: string;
}

const Button: React.FC<ButtonProps & clickable & labeled> = ({ label, onClick, variant, color, className }) => {
    return (
        <AntButton variant={variant} onClick={onClick} color={color as any} className={className}>{label}</AntButton>
    )
}

export default Button;