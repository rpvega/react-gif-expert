import { ChangeEvent, FormEvent, useState } from "react"

//Este componente solo emite el valor ingresado en el input, es su unica tarea
export const AddCategory = ({ onNewCategory }: any) => {

    const [inputValue, setInputValue] = useState('');

    const onInputchange = (event: ChangeEvent) => {
        const { target } = event;
        setInputValue((target as HTMLButtonElement).value);
    }

    const onSubmit = (event: FormEvent) => {
        event.preventDefault();
        const value = inputValue.trim();

        if (value.length <= 1) return;
        setInputValue('');
        onNewCategory(inputValue.trim());
    }
    return (
        <>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Buscar gifs"
                    value={inputValue}
                    onChange={onInputchange}
                />
            </form>
        </>
    )
}
