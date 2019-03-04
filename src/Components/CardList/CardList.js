import React from 'react';
import Card from '.././Card/Card';
import API from '../../API/Api';

const CardList = (props) => {
    const cards = API.getProfiles();

    return (<div>
        {cards.map(card => <Card {...card}/>)}
    </div>);
}

export default CardList;