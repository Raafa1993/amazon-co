import React, { useEffect, useState } from 'react';

import { Container } from './styles';

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
    placeholder?: string;
    value: string | any;
    onChangeText: (value: string) => void;
    className?: string;
}

const InputTextarea: React.FC<InputProps> = ({
    placeholder,
    value,
    onChangeText,
    className,
}) => {
    const [valueInput, setValueInput] = useState<string>(value);

    useEffect(() => {
        setValueInput(value);
    }, [value]);

    function handleOnChange(e: React.FormEvent<HTMLTextAreaElement>) {
        setValueInput(e.currentTarget.value);
        onChangeText(e.currentTarget.value);
    }

    return (
        <Container className={`form-children-default ${className}`}>
            <textarea
                value={valueInput}
                onChange={handleOnChange}
                placeholder={placeholder}
            />
        </Container>
    );
};

export default InputTextarea;
