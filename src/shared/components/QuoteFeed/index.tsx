import React, { useState, useEffect } from 'react';
import styles from "./styles"
import QuoteCard from '../QuoteCard';
import CustomModal from '../Modal';
import { Typography} from 'antd';
import {BaseAPI} from '../../services/BaseAPI';

const {Paragraph} = Typography;


const QuoteFeed: React.FC = () => {
    const [quotes ,setQuotes] = useState([])
    const [params ,setParams] = useState({page: 1, limit: 3})
    const [isLoading, setIsLoading] = useState(false)
    const [isVisible, setIsVisible] = useState(false);

    const getQuotes = async (params: {page: number, limit: number}) => {
        setIsLoading(true)
        const {data: {results}} = await BaseAPI.get('quotes', params)
        setIsLoading(false)
        setQuotes(results)
        setParams({...params, limit: params.limit + 3})
    }

    useEffect(() => {
        getQuotes(params)
    }, [])

    return(
        <>
            <div style={styles.container}>
                <div style={styles.feed}>
                    <div style={styles.quotesSection}>
                        <Paragraph style={styles.heading}>Hello, here are your morning quotes!</Paragraph>
                        {
                            quotes?.map(({_id, author, authorSlug, content, dateAdded}) => (
                                <QuoteCard 
                                    key={_id} 
                                    author={author} 
                                    authorSlug={authorSlug} 
                                    content={content} 
                                    dateAdded={dateAdded}
                                />)
                            )
                        }
                    </div>
                    <Paragraph 
                        style={{...styles.loadBtn, 
                            color: isLoading? '#BDB8B8':'#FF8E8E', 
                            cursor: isLoading? 'progress':'pointer'
                        }}
                        onClick={() => getQuotes(params)}
                        >
                            {isLoading? 'Loading ...':'Load More'}
                    </Paragraph>
                    <Paragraph 
                        style={{...styles.addQuoteBtn,}}
                        onClick={() => setIsVisible(true)}
                        >
                            Add Quote
                    </Paragraph>
                </div>
            </div>
            <CustomModal 
                isVisible={isVisible} 
                handleOk={() => setIsVisible(false)} 
                handleCancel={() => setIsVisible(false)}
                quotes={quotes}
                setQuotes={setQuotes}
            />
        </>
    );
}


export default QuoteFeed;