import { useState } from 'react';

export function App() {
    const [counter, setCounter] = useState(0);

    function handleAddButtonClick() {
        setCounter(counter + 1);
    }

    return (
        <>
            <h1>You have clicked {counter} on the button below!</h1>
            <button
                type="button"
                onClick={handleAddButtonClick}
            >
                Add 1
            </button>
        </>
    );
}