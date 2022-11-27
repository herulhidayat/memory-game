import './GetKartu.css'

export default function GetKartu({kartu , handleChoice, flipped}) {
    const handleClick = () => {
        handleChoice(kartu)
    }
    return(
        <div className='kartu'>
            <div className={flipped ? "flipped" : ""}>
                <img className="ace" src={kartu.img} alt="kartu"/>
                <img className="cover" src="/img/cover.svg" onClick={handleClick} alt="cover"/>
            </div>
        </div>
    )
}