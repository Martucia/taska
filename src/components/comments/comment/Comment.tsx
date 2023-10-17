import React, { useState, useRef, useEffect, FC } from 'react';

import { BASE_URL } from '../../../utils/constants';
import { useFormattedDate, zoomPage } from '../../../utils/functions';
import { IComment } from '../../../types/comment';

import CommentPopup from '../../popups/commentPopup/CommentPopup';
import CommentInput from '../commentInput.tsx/CommentInput';

import { useAppDispatch, useAppSelector } from '../../../actions/redux';

import styles from './Comment.module.sass';

// import download from '@images/download.svg'

interface CommentProps {
    comment: IComment,
    isEditing: boolean,
    setEditing: React.Dispatch<React.SetStateAction<number | null>>
}

const Comment: FC<CommentProps> = ({ comment, isEditing, setEditing }) => {
    const [isPopupOpen, setPopupOpen] = useState(false);

    const dispatch = useAppDispatch();
    const user = useAppSelector(state => state.userReducer.user)

    const inputRef = useRef<HTMLTextAreaElement | null>(null);

    const textOut = comment.text.split('\n').map((line, index) => (
        <React.Fragment key={index}>
            {line}
            <br />
        </React.Fragment>
    ));

    // const handleCancelEdit = () => {
    //     setValue(comment.text);
    //     setEditing(null);
    // }

    const handleZoom = (src: string) => {
        dispatch(zoomPage(src));
    }

    const handleSetEdit = () => {
        setPopupOpen(false);
        setEditing(comment.id);
    }

    useEffect(() => {
        if (inputRef.current && isEditing) {
            inputRef.current.focus();
        }
    }, [isEditing])

    const createdAt = useFormattedDate(comment.createdAt);

    if (isEditing) {
        return (
            <CommentInput
                comment={comment}
                closeEditing={() => setEditing(null)}
            />
        )
    }

    return (
        <div className={`${styles.comment} ${isPopupOpen && styles.open} ${isEditing && styles.editing}`}>
            <div className={styles.user}>
                <div className={styles.avatar}>
                    <img src={`${BASE_URL}/file/${comment.user.avatar}`} alt="avatar" />
                </div>
                <span className={styles.name}>
                    {comment.user.firstName}
                </span>
            </div>

            <div className={styles.content}>
                <div className={styles.text}>
                    {textOut}
                </div>
                {comment.files.length > 0 &&
                    <div className={`${comment.files.length === 1 ? styles.attaches : styles.attaches_list}`}>
                        {comment.files.map(attach =>
                            <div className={styles.attach} key={attach}>
                                {/* <button className={styles.attach_btn}>
                                    <img src={download} alt="download" />
                                </button> */}
                                <div className={styles.attach_image} onClick={() => handleZoom(attach)}>
                                    <img src={`${BASE_URL}/file/${attach}`} alt="avatar" />
                                </div>
                            </div>
                        )}
                    </div>
                }

                <div className={styles.date}>
                    {createdAt}
                </div>
            </div>

            <div className={styles.options}>
                <button className={styles.dots} onClick={() => setPopupOpen(true)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                {isPopupOpen && <CommentPopup
                    close={() => setPopupOpen(false)}
                    id={comment.id}
                    isOwner={user?.id === comment.user.id}
                    setEdit={handleSetEdit}
                    text={comment.text}
                />}
            </div>

        </div >
    );
}

export default Comment;