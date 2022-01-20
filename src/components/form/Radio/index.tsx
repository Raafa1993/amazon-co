import { Container, Label } from "./styles";

interface IOptions {
  label: string;
  value: string;
}

interface InputProps {
  value: string;
  options: IOptions[];
  onChange(value: string): void;
}

export default function Radio({ value, options, onChange }: InputProps) {
  function handleOnChange(value: string) {
    onChange(value);
  }
  return (
    <Container>
      {options.map(row => (
        <Label key={row.label}>
          <input
            type="radio"
            name="group"
            onClick={() => handleOnChange(row.value)}
            defaultChecked={row.value === value ? true : false}
          />
          <span className="radioPulse" />
          <span className="radioButton">
            <span className="radioButtonInner" />
          </span>
          <span className="radioLabel">{row.label}</span>
        </Label>
      ))}
    </Container>
  );
}
