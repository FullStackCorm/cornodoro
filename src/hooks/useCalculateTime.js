import { useEffect } from 'react';
import { controllers } from '../constants/constants';

const useCalculateTime = ({ cornodoro, selectedControl }) => {
    const minutes = Math.floor(cornodoro[controllers[selectedControl].value] / 60);
    const seconds = Math.floor(cornodoro[controllers[selectedControl].value] % 60);
    return { minutes, seconds };
};

export default useCalculateTime;