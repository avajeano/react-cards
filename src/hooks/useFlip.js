import React, { useState } from "react";

const useFlip = (initialState = true) => {
    const [isFacingUp, setIsFacingUp] = useState(initialState);
    const toggleCard = () => {
        setIsFacingUp(isFacingUp => !isFacingUp)
    }
    return [isFacingUp, toggleCard]
}

export default useFlip;