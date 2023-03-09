import { ChangeEventHandler } from "react";


interface IProps{
    onChange: ChangeEventHandler<HTMLInputElement>;
    value: any;
    type: string;
}

export default function InputBox (props: IProps) {
    const {
        onChange, value, type
    } = props;

    return(
        <input className="todoInput" type={type} value={value} onChange={onChange} />
    );
}