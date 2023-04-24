import { useEffect, useState, useRef, useContext } from 'react';
import { stages, controllers } from '../constants/constants';
import { FormDataContext } from '../context/FormDataContext';
import chime from '../assets/chime.mp3';

const useTimer = () => {
    const { formData } = useContext(FormDataContext);
    const [selectedControl, setSelectedControl] = useState(0);
    const [cornodoro, setCornodoro] = useState(stages);
    const periodId = useRef(stages.period);
    const Sound = () => {
        const audio = new Audio(chime);
        return audio.play();
    };

    const resetTimerValues = () => {
        setCornodoro((prevCornodoro) => ({
            ...prevCornodoro,
            cornodoroTime: formData.cornodoroTime * 60,
            shortBreakTime: formData.shortBreakTime * 60,
            longBreakTime: formData.longBreakTime * 60
        }));
    };

    const getRemainingTimePercentage = () => {
        const totalTime = formData[controllers[selectedControl].value] * 60;
        const remainingTime = cornodoro[controllers[selectedControl].value];
        return (remainingTime / totalTime) * 100;
    };

    useEffect(() => {
        let timer = null;
        if (!cornodoro.isPaused) {
            timer = setInterval(() => {
                setCornodoro((prevCornodoro) => {
                    if (prevCornodoro[controllers[selectedControl].value] === 0) {
                        setSelectedControl((PrevState) => {
                            if (periodId.current % 8 === 0) {
                                return 2;
                            } else {
                                return prevState >= controllers.length - 1 ? 0 : prevState === 0 ? prevState + 1 : prevState === 1 ? prevState - 1 : 0;
                            }
                        });

                        resetTimerValues();
                        clearInterval(timer);
                        Sound();
                        periodId.current += 1;

                        return prevCornodoro;
                    }
                    return {
                        ...prevCornodoro,
                        [controllers[selectedControl].value]: prevCornodoro[controllers[selectedControl].value] - 1,
                    };
                });
            }, 1000);
        }
        return () => {
            clearInterval(timer);
        };
    }, [cornodoro.isPaused, selectedControl, setCornodoro, setSelectedControl, cornodoro.period]);

        return { cornodoro, setCornodoro, selectedControl, setSelectedControl, resetTimerValues, getRemainingTimePercentage };
};      

export default useTimer;