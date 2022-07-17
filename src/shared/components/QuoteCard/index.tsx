import React from 'react';
import styles from "./styles"
import { Typography } from 'antd';

const {Paragraph} = Typography;

interface QuoteFeedProps {
    author: string, 
    authorSlug: string, 
    content: string, 
    dateAdded: string
}

const QuoteCard: React.FC<QuoteFeedProps> = ({author, authorSlug, content, dateAdded}) => {

    return(
        <div style={styles.quote}>
            <Paragraph> <span style={styles.authorName}>{author}</span> <span style={styles.slug}>{`@${authorSlug}`}</span> <span style={styles.date}>{dateAdded.substring(0,4)}</span> </Paragraph>
            <Paragraph style={styles.quoteContent}>{content}</Paragraph>
        </div>
    );
}


export default QuoteCard;