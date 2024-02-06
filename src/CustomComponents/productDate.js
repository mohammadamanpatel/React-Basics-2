import React from 'react';
import './productDate.css'
function ProductDate(props) {
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const year = props.date.getFullYear();
    return (
        <div className='product-date'>
            <div className='date_day'>{day}</div>
            <div className='date_month'>{month}</div>
            <div className='date_year'>{year}</div>
        </div>
    )
}
export default ProductDate;