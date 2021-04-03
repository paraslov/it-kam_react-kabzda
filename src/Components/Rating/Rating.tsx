import React from 'react';
import {Star} from './Star/Star';
import s from './Rating.module.css'

type RatingPropsType = {
    ratingTitle: string
    ratingValue: 0 | 1 | 2 | 3 | 4 | 5
}

export function Rating(props: RatingPropsType) {
    return (
        <div className={s.ratingWrapper}>
            <div className={s.ratingTitle}>
                {props.ratingTitle}
            </div>
            <div className={s.starsBlock}>
                <Star id={1} selected={props.ratingValue > 0}/>
                <Star id={2} selected={props.ratingValue > 1}/>
                <Star id={3} selected={props.ratingValue > 2}/>
                <Star id={4} selected={props.ratingValue > 3}/>
                <Star id={5} selected={props.ratingValue > 4}/>
            </div>

        </div>
    )
}