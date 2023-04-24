import useCalculateTime from '../hooks/useCalculateTime';

const TimeDisplay = ({ cornodoro, selectedControl }) => {
    const { minutes, seconds } = useCalculateTime({ cornodoro, selectedControl });

    return (
        <>
            {minutes < 9 ? '0' : ''}
            {minutes}:{seconds < 9 ? '0' : ''}
            {seconds}
        </>
    );
};

export default TimeDisplay;