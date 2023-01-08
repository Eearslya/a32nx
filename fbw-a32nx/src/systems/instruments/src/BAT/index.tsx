import './style.scss';
import React, { useCallback, useRef, useState } from 'react';
import { render } from '@instruments/common/index';
import { useSimVar } from '@instruments/common/simVars';
import { useUpdate } from '@instruments/common/hooks';
import PseudoFWC from '@instruments/common/PseudoFWC';

const BASE_DELAY_MS = 1_000;
const DIGIT_REFRESH_INTERVAL_MS = 130;
const FULL_DISPLAY_REFRESH_INTERVAL_MS = BASE_DELAY_MS + 2 * DIGIT_REFRESH_INTERVAL_MS;

const BatDisplay = ({ batteryNumber, x, y }) => {
    const [ltsTest] = useSimVar('L:A32NX_OVHD_INTLT_ANN', 'Bool', 100);
    const [voltage] = useSimVar(`L:A32NX_ELEC_BAT_${batteryNumber}_POTENTIAL`, 'Volts', 100);
    const [digits, setDigits] = useState('   ');

    const updated = useRef(0); // how many of the digits have already been updated
    // how much time has passed since we started over - initialize with offsets so the two batteries are not in sync
    const timer = useRef(batteryNumber === 1 ? 0 : 200);

    /**
     * Updates a single digit. No dependencies are necessary as we use a setter callback
     */
    const setDigit = useCallback((indexOfDigitToSet: number, digit: string) => {
        setDigits((oldDigits) => `${oldDigits.slice(0, indexOfDigitToSet)}${digit}${oldDigits.slice(indexOfDigitToSet + 1)}`);
    }, []);

    const voltageValue = voltage.toFixed(1); // prevent unnecessary rebuilds of getDisplayValue
    const getDisplayValue: () => string = useCallback(() => {
        if (ltsTest === 0) {
            return '888';
        }

        const int = Math.floor(voltageValue);
        const decimal = (voltageValue - int).toFixed(1).substring(2);

        let intDigits = int.toString();
        while (intDigits.length < 2) {
            intDigits = `0${intDigits}`;
        }

        return `${intDigits}${decimal}`;
    }, [ltsTest, voltageValue]);

    // This updater calls getDisplayValue and updates one digit at a time. Note that there is no consistency enforced:
    // It's possible that for example the lights test is turned off mid-cycle and we end up rendering 87.6, as the last
    // two digits were updated before the first one.
    useUpdate((deltaTime) => {
        const displayValue = getDisplayValue();

        // only update one digit at a time
        timer.current += deltaTime;

        if (timer.current >= BASE_DELAY_MS && updated.current < 1) {
            setDigit(0, displayValue[0]);
            updated.current = 1;
        }
        if (timer.current >= BASE_DELAY_MS + DIGIT_REFRESH_INTERVAL_MS && updated.current < 2) {
            setDigit(1, displayValue[1]);
            updated.current = 2;
        }
        if (timer.current >= BASE_DELAY_MS + 2 * DIGIT_REFRESH_INTERVAL_MS && updated.current < 3) {
            setDigit(2, displayValue[2]);
            updated.current = 3;
        }

        while (timer.current >= FULL_DISPLAY_REFRESH_INTERVAL_MS) {
            timer.current -= FULL_DISPLAY_REFRESH_INTERVAL_MS;
            updated.current = 0;
        }
    });

    return (
        <text x={x} y={y}>
            {digits[0]}
            {digits[1]}
            .
            {digits[2]}
            V
        </text>
    );
};

const BatRoot = () => (
    <svg className="bat-svg" viewBox="0 0 200 100">
        <BatDisplay batteryNumber={1} x="184" y="45" />
        <BatDisplay batteryNumber={2} x="184" y="95" />
        <PseudoFWC />
    </svg>
);

render(<BatRoot />);
