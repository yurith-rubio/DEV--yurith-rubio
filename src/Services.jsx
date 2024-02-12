import gsap from 'gsap';
import ServicesNav from './ServicesNav.jsx';
import ServiceGraph from './ServiceGraph.jsx';
import { useState, useEffect, useRef } from 'react';
import ServicesInfojson from './ServiceInfo.json';
import {useContext} from "react";
import {ThemeContext} from "./ThemeContext.jsx";

export default function Services() {
    const context = useContext(ThemeContext);
    const isMobile = window.innerWidth <= 767;
    const nav = useRef();
    const data = useRef();
    const web = useRef();
    const prototyping = useRef();
    const shopify = useRef();
    const services = ServicesInfojson.services;


    const references = {
        "Data": data,
        "Web": web,
        "Prototyping": prototyping,
        "Shopify": shopify,
    };

    const [visibleSection, setVisibleSection] = useState({
        "Services": false,
        "Data": false,
        "Web": false, 
        "Prototyping": false,
        "Shopify": false,
    });

    let ballPositions = {};

    const options = {
        root: null,
        rootMargin: "300px",
        threshold: 1
    }

    const callbackFunction = (entries) => {
        entries.forEach(entry => {
            const id = entry.target.id;

            setVisibleSection({...visibleSection, [id]: true});
            let position = ballPositions;
            const servicesSections = ["#ball-Data", "#ball-Web", "#ball-Prototyping", "#ball-Shopify"];

            servicesSections.forEach((section, index) => {
            })

            if(entry.isIntersecting){
                
                gsap.to([".service-ball-arrow", ".service-ball-info"], {autoAlpha:1});
                gsap.set(["#ball-Data path", "#ball-Web path", "#ball-Prototyping path", "#ball-Shopify path"], {fill:'var(--light-green)'});

                // const Xservice = position.positionX.Service
                if (id === "Services") {
                    servicesSections.forEach((section, index) => {
                    })
                }
                
                
                if (id === "Data" || id === "Web" || id === "Prototyping" || id === "Shopify"){
                    gsap.set(`#ball-${id} path`, {fill:'var(--highlights)'});
                    
                } 
                
                if (id != "Services") {
                    // gsap.to(servicesSections, {scale: 0.15});
                    gsap.to([".service-ball-arrow", ".service-ball-info"], {autoAlpha:0});
                }

            } else {
                setVisibleSection({...visibleSection, [id]: false});
            }
        });
    }

    function handleClickScrollNavButton(event){
        event.preventDefault();
        const value = event.currentTarget.attributes.section.value;
        if (value === 'Data'){
            data.current?.scrollIntoView({behavior:'smooth'});
        } else if(value === 'Web'){
            web.current?.scrollIntoView({behavior:'smooth'});
        } else if(value === 'Prototyping'){
            prototyping.current?.scrollIntoView({behavior:'smooth'});
        } else if(value === 'Shopify'){
            shopify.current?.scrollIntoView({behavior:'smooth'});
        }
    }

    useEffect(() => {    
        const observer = new IntersectionObserver(callbackFunction, options);

        [nav,data,web,prototyping,shopify].forEach(target => {
            observer.observe(target.current);
        });
        
    }, []);


    return<>
        <div id="ServicesSection" className={context.theme === 'active' ? 'text-light-green hidden' : 'text-light-green'  }>
            <section id='Services' className={ isMobile ? 'mobile content-boundary' : 'content-boundary' } ref={nav}>
                <div id='ServiceIntro' className='service-content'>
                    <div className='big-text center'>What I can do for you</div>
                    <div id='ServicesContent'>
                        <div id='ServicesIntroGraphics'>
                            <ServicesNav scrollButton={handleClickScrollNavButton}/>
                        </div>
                    </div>
                </div>
            </section>
            {
                Object.keys(services).map((item, key) => {
                    return <section key={key} id={item} className='service-section content-boundary' ref={references[item]}>
                        <ServiceGraph serviceName={item} stages={services[item].stages} isVisible={visibleSection[item]}/>
                    </section>
                })
            }
        </div>
    </>
}