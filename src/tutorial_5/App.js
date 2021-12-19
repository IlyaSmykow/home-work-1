import { useState, useEffect, useRef } from 'react';
import { Comments } from "./Comments";
import { Form } from "./Form";
import styles from './App.module.scss';


export const App = () => {

    const [comments, setComments] = useState([]);
    const commentsRef = useRef();

    useEffect(() => {
        commentsRef.current = comments;
    }, [comments]);

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem('comments'));
        setComments(data);
    }, []);

    useEffect(() => {
        if(comments.length > 0) {
            localStorage.setItem('comments', JSON.stringify(comments));
        }
    }, [comments]);

    const getComments = array => {
        setComments([...comments, ...array]);
    };

    const deleteComments = indexOfComment => {
        setComments(comments.filter((_, index) => index !== indexOfComment));
    };

    return (
        <div className={styles.root}>
            <Comments comments={comments} deleteComments={deleteComments}/>
            <Form getComments={getComments}/>
        </div>
    )
};