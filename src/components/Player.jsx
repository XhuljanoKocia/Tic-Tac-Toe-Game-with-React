import { useState } from "react";

export default function Player({ initialName, symbol }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing((editing) => !editing); // => with a function, react schedules a state update which is immediately reflected
        // setIsEditing(!isEditing); // => schedules a state update to true, but is not immediately reflected
        // setIsEditing(!isEditing); => in this case this will also be true, because the state update is scheduled and not immediately reflected
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;

    if (isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />;
    }

    return (
        <li>
            <span className="player">
                {editablePlayerName}           
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}