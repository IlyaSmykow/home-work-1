import '../App.css';


export const Phrase = ({phrase}) => {
    return (
        <>
            {
                phrase.map(phrase => <div className='block' key={phrase}>{phrase}</div>)
            }
        </>
    )
};