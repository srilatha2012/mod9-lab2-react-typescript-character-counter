import type { StatsDisplayProps } from "../../types"
export const StatsDisplay: React.FC<StatsDisplayProps> = ({
    stats,
    showReadingTime = true
}) => {
    return (
        <div className="bg-white text-slate-800 rounded-lg p-6 grid grid-cols-3 text-center">
            <div>
                <p>Characters</p>
                <h2 className="text-3xl font-bold">{stats.characterCount}</h2>
            </div>

            <div>
                <p>Words</p>
                <h2 className="text-3xl font-bold text-red-500">{stats.wordCount}</h2>
            </div>
            {showReadingTime && (
                <div>
                    <p>Reading Time</p>
                    <h2>{stats.readingTime}:00</h2>
                </div>
            )}
        </div>
    );
};