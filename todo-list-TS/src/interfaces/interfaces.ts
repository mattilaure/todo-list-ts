export interface clickable {
    onClick: () => void;
}

export interface labeled {
    label: string;
}

export interface changeable {
    onChange?: (value: any) => void;
}