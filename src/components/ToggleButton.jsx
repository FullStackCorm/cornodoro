const ToggleButton = ({ cornodoro, setCornodoro }) => {
    function togglePausePlay() {
        setCornodoro((prevCornodoro) => {
            return {
                ...prevCornodoro,
                isPaused: !prevCornodoro.isPaused
            };
        });
    }

    return (
        <button
            onClick={togglePausePlay}
            className='text-base uppercase tracking-[0.5rem]'>
                {cornodoro.isPaused ? 'Start' : 'Stop'}
            </button>
    );
};

export default ToggleButton;