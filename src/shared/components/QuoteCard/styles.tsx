import React from 'react';

const quote: React.CSSProperties = {
    minHeight: '80px', 
    width: '90%', 
    borderRadius: '10px', 
    background: '#FFFFFF', 
    border: '1px solid #F4F4F4', 
    margin: '3% 5%', 
    padding: '3.5% 8%'
};
const authorName: React.CSSProperties = {
    fontWeight: '600', 
    fontSize: '14px'
};
const slug: React.CSSProperties = {
    fontWeight: '400', 
    fontSize: '10px',
    color: '#BDB8B8', 
    marginLeft: '1%'
};
const date: React.CSSProperties = {
    fontWeight: '600', 
    fontSize: '10px', 
    color: '#FF8E8E', 
    float: 'right'
};
const quoteContent: React.CSSProperties = {
    fontWeight: '400', 
    fontSize: '12px'
};

const styles ={
    quote,
    authorName,
    slug,
    date,
    quoteContent
}

export default styles