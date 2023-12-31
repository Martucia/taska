import { useState, useRef, useEffect } from 'react';
import { SketchPicker } from 'react-color';

import { ClickOutside } from '../../utils/functions';

import styles from './Stage.module.sass';
import { useAppDispatch, useAppSelector } from '../../actions/redux';
import { commonSlice } from '../../store/reducers/commonSlice';
import { updateStage } from '../../actions/stages';

interface StageCreateUpdate {
    create?: (data: any) => void,
    id?: number,
    oldColor?: string,
    oldBackground?: string,
    oldName?: string,
    closeEdit?: () => void
}

const StageCreateUpdate = ({ create, closeEdit, id, oldColor = '#fff', oldBackground = '#6fb0e7', oldName = 'Stage name' }: StageCreateUpdate) => {
    const [background, setBackground] = useState(oldBackground);
    const [color, setColor] = useState(oldColor);
    const [name, setName] = useState(oldName);
    const [isBackgroundPickerOpen, setBackgroundPickerOpen] = useState(false);
    const [isColorPickerOpen, setColorPickerOpen] = useState(false);
    const [error, setError] = useState(false);

    const projectId = useAppSelector(state => state.commonReducer.projectId);

    const bgPicker = useRef<HTMLDivElement | null>(null);
    const colorPicker = useRef<HTMLDivElement | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const dispatch = useAppDispatch()

    const handleChangeBackground = (hex: string) => {
        setBackground(hex);
    };

    const handleChangeColor = (hex: string) => {
        setColor(hex);
    };

    const handleDone = async (e: any) => {
        if (e.key === "Enter" && e._reactName === "onKeyDown" || e._reactName !== "onKeyDown") {
            if (name.length === 0) return setError(true);

            if (create) {
                create({ name, color, background });
            } else if (projectId && closeEdit) {
                await dispatch(updateStage({ id, name, color, background }, projectId));
                closeEdit();
            }
        }
    }

    const handleChangeValue = (e: any) => {
        setName(e.target.value);
        setError(false);
    }

    const handleClose = () => {
        if (closeEdit) {
            closeEdit()
        } else {
            dispatch(commonSlice.actions.toggleParam({
                param: "isStageCreateOpen",
                value: false
            }))
        }
    }

    useEffect(() => {
        ClickOutside({ element: bgPicker, close: setBackgroundPickerOpen });
        ClickOutside({ element: colorPicker, close: setColorPickerOpen });

        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    return (
        <div className={styles.stage}>
            <div className={styles.name} style={{ background, justifyContent: "space-between", marginBottom: "16px" }}>
                <input
                    className={`${styles.input} ${error && styles.error}`}
                    type="text"
                    value={name}
                    onChange={handleChangeValue}
                    style={{ color }}
                    onKeyDown={handleDone}
                    ref={inputRef}
                />

                <div className={styles.btns}>
                    <button className={styles.btn} onClick={() => setBackgroundPickerOpen(true)}>
                        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect fill="white" fillOpacity="0.01" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M37 37C39.2091 37 41 35.2091 41 33C41 31.5272 39.6667 29.5272 37 27C34.3333 29.5272 33 31.5272 33 33C33 35.2091 34.7909 37 37 37Z" fill={color} />
                            <path d="M20.8535 5.50439L24.389 9.03993" stroke={color} strokeWidth="4" strokeLinecap="round" />
                            <path d="M23.6818 8.33281L8.12549 23.8892L19.4392 35.2029L34.9955 19.6465L23.6818 8.33281Z" stroke={color} strokeWidth="4" strokeLinejoin="round" />
                            <path d="M12 20.0732L28.961 25.6496" stroke={color} strokeWidth="4" strokeLinecap="round" />
                            <path d="M4 43H44" stroke={color} strokeWidth="4" strokeLinecap="round" />
                        </svg>
                    </button>

                    <button style={{ color }} className={styles.btn} onClick={() => setColorPickerOpen(true)}>
                        Aa
                    </button>

                    <button className={styles.btn} onClick={handleDone}>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 14L8.23309 16.4248C8.66178 16.7463 9.26772 16.6728 9.60705 16.2581L18 6" stroke={color} strokeWidth="2" strokeLinecap="round" />
                        </svg>

                    </button>
                </div>


                {isBackgroundPickerOpen &&
                    <div ref={bgPicker} className={styles.color_picker}>
                        <SketchPicker
                            color={background}
                            onChange={(color: any) => handleChangeBackground(color.hex)}
                        />
                    </div>}

                {isColorPickerOpen &&
                    <div ref={colorPicker} className={styles.color_picker}>
                        <SketchPicker
                            color={color}
                            onChange={(color: any) => handleChangeColor(color.hex)}
                        />
                    </div>}

            </div>
            <div className={styles.content}>
                <button onClick={handleClose}>
                    Cancel
                </button>
            </div>
        </div>
    );
}

export default StageCreateUpdate;