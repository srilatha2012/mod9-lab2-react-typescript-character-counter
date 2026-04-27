# React + TypeScript + Vite


## Character counter app
This React + TypeScript project allows users to type text and view real time statastics

## Technologies Used
  - React
  - TypeScript
  - Tailwind css
  - vite

## Example Usage 
 <TextInput onTextChange={setText}
        />
        <StatsDisplay stats={stats} showReadingTime={true} />
        <CharacterCounter minWords={25} maxWords={200} targetReadingTime={1} />

## Reflection
1. How did you handle state updates when the text changed?
I handled state updates using useState() hook. I stored the current text in a state variable called text. When the user typed in the textarea, the child component called the onTextChange callback and sent the new value to the parent.
In the parent component I have updated the text using setText. Once the state changed, React re-render the component and updates like the character count and word count 

2. What considerations did you make when calculating reading time?
I calculated reading time based on the word count. I used an average reading speed of 200 words per minute.I also, used Math.ceil() so that even a short text would show as at least 1 minute instead of showing a decimal value. For empty input, the word count stays 0

3. How did you ensure the UI remained responsive during rapid text input?
I kept the UI responsive by using React state updates efficiently. The statistics were calculated from the current text during rendering. So, I did not create unnecessary extra state for each statistics.

4. What challenges did you face when implementing the statistics calculations?
One challenge was handling empty text correctly. When the textarea was empty, the word count should be 0, I fixed it by checking if the text was empty before counting words. another challenge is reading time, So, I used a simple rule of 200 words per minute and rounded it up
