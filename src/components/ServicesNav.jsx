import ServiceBall from '@components/ServiceBall.jsx';
import {useEffect, useState} from 'react';

export default function ServicesNav(props) {
    const {isVisible, scrollButton} = props;
    const [dataDisabled, setDataDisabled] = useState(false);
    const [webDisabled, setWebDisabled] = useState(false);
    const [prototypingDisabled, setPrototypingDisabled] = useState(false);
    const [shopifyDisabled, setShopifyDisabled] = useState(false);

    useEffect(() => {
        
        
    },[]);

    return <>
        <div className='service-nav-wrapper'>
            <ServiceBall id="Data" tag='data<br>visualization' textClassName='up-text' arrowClassName='up-arrow' disabled={dataDisabled} scrollButton={scrollButton} />
            <ServiceBall id="Web" tag='web<br>development' textClassName="down-text" arrowClassName='down-arrow' disabled={webDisabled} scrollButton={scrollButton} />
            <ServiceBall id="Prototyping" tag='web-app<br>prototyping' textClassName='up-text' arrowClassName='up-arrow' disabled={prototypingDisabled} scrollButton={scrollButton} />
            <ServiceBall id="Shopify" tag='shopify<br>development' textClassName="down-text" arrowClassName='down-arrow' disabled={shopifyDisabled} scrollButton={scrollButton} />
        </div>
    </>
}