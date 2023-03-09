import { MouseEventHandler } from "react";

interface IProps {
    onClick: MouseEventHandler<HTMLButtonElement>
}

export default function AddButton(props: IProps) {
    const {
        onClick
    } = props;

    return (
        <button className="addButton" onClick={onClick}>Add</button>
    );
}