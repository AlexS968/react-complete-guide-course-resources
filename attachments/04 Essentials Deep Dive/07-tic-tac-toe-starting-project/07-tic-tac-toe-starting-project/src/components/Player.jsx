import {useState} from "react";

export default function Player({initialName, symbol}) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    function handleEditClick() {
        setIsEditing((editing) => !editing);
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    let editedPlayerName = <span className="player-name">{playerName}</span>;
    if (isEditing) {
        editedPlayerName = (<input type="text" required value={playerName} onChange={handleChange}/>);
    }

    return (
        <li>
            <span id="player">
                {editedPlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    )
}