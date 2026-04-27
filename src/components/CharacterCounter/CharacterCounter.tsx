import type { CharacterCounterProps } from "../../types";

export const CharacterCounter: React.FC<CharacterCounterProps> = ({
    minWords = 25,
    maxWords = 200,
    targetReadingTime =1,
}) => {
    return (
        <div className="text-center text-sm text-slate-600 bg-white pb-4">
        <p>Min: {minWords} | Max: {maxWords}</p>
        <p>Target Reading Time: {targetReadingTime}</p>
        </div>
    )
}