import { Container } from './styles';

interface InputProps {
    value: string;
    options: IOptions[];
    onChange(value: string): void;
    flexDirection?: 'row' | 'column';
    maxColumns?: any;
    className?: string;
}

interface IOptions {
    label: string;
    value: string;
}

export default function InputRadioDefault({
    value,
    options,
    onChange,
    flexDirection = 'row',
    maxColumns = false,
    className,
}: InputProps) {
    function handleOnChange(value: string) {
        onChange(value);
    }

    return (
        <Container
            className={`form-children-default ${className}`}
            flexDirection={flexDirection}
            maxColumn={maxColumns}
        >
            {options.map((row, key) => (
                <div
                    className="input-radio"
                    key={key}
                    onClick={() => handleOnChange(row.value)}
                >
                    <div className="radio">
                        <div
                            className={`bullet ${
                                row.value === value ? 'active' : 'inactive'
                            }`}
                        ></div>
                    </div>
                    {row.label && <span className="label">{row.label}</span>}
                </div>
            ))}
        </Container>
    );
}
