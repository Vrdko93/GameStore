import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

import styles from '../components/game_store.module.css';
import logo from './GameStoreLogo.jpg';

export default props => {
    const [title, setTitle] = useState("");
    const [genre, setGenre] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [image_url, setImageURL] = useState("");
    const [image_url2, setImageURL2] = useState("");

    const [errors, setErrors] = useState([]);
  
    useEffect(() => {
        axios.get("http://localhost:8000/api/game/" + props.id)
            .then(res =>{ 
                setTitle(res.data.title); 
                setGenre(res.data.genre);
                setPrice(res.data.price);
                setDescription(res.data.description);
                setImageURL(res.data.image_url);
                setImageURL2(res.data.image_url2);
            })
    }, [props.id])

    const onSubmitHandler = e => {
        e.preventDefault();
        setErrors([]);
        axios.put('http://localhost:8000/api/game/' + props.id, {
            title,
            genre,
            price,
            description,
            image_url,
            image_url2
        })
            .then(() => navigate("/"))
            .catch(err => {
                const errs = [];
                const innerErrors = err.response.data.errors;

                for (const key in innerErrors){
                    errs.push(innerErrors[key].message);
                }
                setErrors(errs);
            })
    }

    return (
        <div className={styles.wrapper}>
        <Link to="/"><img className={styles.logo} src={logo} alt="GameStore Logo"/></Link><br/><br/><br/><br/>
        <h1>Edit Game</h1>
        {errors.map((err, i) => (
            <p key={i} style={{color: "red"}}>{err}</p>
        ))}
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title: </label><br/>
                <input type="text" value={title} onChange = {(e)=>setTitle(e.target.value)} />
            </p>
            <p>
                <label>Genre: </label><br/>
                <input type="text" value={genre} onChange = {(e)=>setGenre(e.target.value)} />
            </p>
            <p>
                <label>Price: </label><br/>
                $<input type="text" value={price} onChange = {(e)=>setPrice(e.target.value)} />
            </p>
            <p>
                <label>Description: </label><br/>
                <input type="text" value={description} onChange = {(e)=>setDescription(e.target.value)} />
            </p>
            <p>
                <label>Image URL (PS4): </label><br/>
                <input type="text" value={image_url} onChange = {(e)=>setImageURL(e.target.value)}/>
            </p>
            <p>
                <label>Image URL (Xbox One): </label><br/>
                <input type="text" value={image_url2} onChange = {(e)=>setImageURL2(e.target.value)}/>
            </p>          
            <button className={styles.content_button}>Update Game</button>
        </form>
    </div>
    )
}
