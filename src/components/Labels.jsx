import { controllers } from '../constants/constants';

const Labels = ({
    selectedControl,
    setSelectedControl,
    resetTimerValues,
    setCornodoro
}) => {
    function handleSelectedControl(index) {
        setSelectedControl(index);
        resetTimerValues();
        setCornodoro((prevCornodoro) => ({
            ...prevCornodoro,
            isPaused: true,
        }));
    }

    return (
        <div>
            <ul className='tw-infoContainer'>
                {controllers.map((controller, index) => (
                    <li
                        key={index}
                        className={`tw-infoItem ${selectedControl === index && 'active'}`}
                        onClick={() => handleSelectedControl(index)}>
                            {controller.label}
                        </li>
                ))}
            </ul>
        </div>
    );
};

export default Labels;