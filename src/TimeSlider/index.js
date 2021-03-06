import React from 'react';
import {Slider, Divider} from 'antd';
import {motion, AnimatePresence} from 'framer-motion';

const marks = {
    0: '0 min',
    15: '15 min',
    30: '30 min',
    45: '45 min',
    60: '1h',
};

const variants = {
    open: {opacity: 1, height: 'auto'},
    collapsed: {opacity: 0, height: 0},
};

const transition = {
    duration: 0.3,
    ease: [0.04, 0.62, 0.23, 0.98],
};

function formatter(value) {
    return value + ' min';
}

const TimeSlider = function(props) {
    return (
        <AnimatePresence initial={true}>
            {props.visible && (
                <motion.section
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={variants}
                    transition={transition}
                >
                    <Divider dashed />
                    <div className="timer-slider noselect">
                        <Slider
                            marks={marks}
                            tipFormatter={formatter}
                            dots={true}
                            value={props.value}
                            max={60}
                            step={5}
                            included={true}
                            tooltipPlacement="bottom"
                            tooltipVisible={false}
                            onChange={props.onChange}
                        />
                    </div>
                </motion.section>
            )}
        </AnimatePresence>
    );
};

export default TimeSlider;
