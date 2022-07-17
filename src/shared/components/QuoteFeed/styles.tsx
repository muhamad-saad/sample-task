import React from 'react';

const container: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
};
const feed: React.CSSProperties = {
    width: '454px', 
    height: '630px', 
    background: '#FBFBFD', 
    border: '1px solid #E3DFDF', 
    borderRadius: '10px', 
    position: 'relative'
};
const heading: React.CSSProperties = {
    fontWeight: '600', 
    fontSize: '16px', 
    textAlign: 'center', 
    margin: "8% 0"
};
const loadBtn: React.CSSProperties = {
    fontWeight: '600', 
    fontSize: '15px', 
    textAlign: 'center', 
    position: 'absolute', 
    left: '42.5%', 
    bottom: '3%'
}
const quotesSection: React.CSSProperties = {
    width: '454px', 
    height: '85%', 
    overflowY: 'auto'
};

const addQuoteBtn: React.CSSProperties = {
    fontWeight: '600', 
    fontSize: '15px', 
    textAlign: 'center', 
    position: 'absolute', 
    left: '60.5%', 
    bottom: '3%'
}

const styles ={
    container,
    feed,
    heading,
    loadBtn,
    quotesSection,
    addQuoteBtn
}

export default styles