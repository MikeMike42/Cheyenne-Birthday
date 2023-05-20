import React, { useState, useEffect } from "react";
import './ContentSection.css';
import Bezos from './resources/bezos.jpg';
import Arnold from './resources/arnold.jpg';
import Reagan from './resources/regan.jpg';
import KFC from './resources/kfc.jpg';
import MusicSection from "./MusicSection";
import { Typography } from "@mui/material";
import SolarSystem from "./SolarSystem";

export default function ContentSection() {

  function useOnScreen(options) {
    const ref = React.useRef()
    const [visible, setVisible] = React.useState(false)
  
    React.useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        setVisible(entry.isIntersecting)
      }, options)
  
      if (ref.current) {
        observer.observe(ref.current)
      }
  
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current)
        }
      }
    }, [ref, options])
  
    return [ref, visible]
  }

  const [ref, visible] = useOnScreen({ rootMargin: '100px' })
	const [ref2, visible2] = useOnScreen({ rootMargin: '300px' })
	const [ref3, visible3] = useOnScreen({ rootMargin: '500px' })

  return (
    <>
      <div class="main-section">
        <Typography sx={{ fontSize: '.8rem' }}>
          Let's look back in history at some successful people and
          see what they were getting up to at age 30.
        </Typography>
        <div ref={ref} style={{ marginTop: '2rem', opacity: visible ? 1 : 0, 
            filter: visible ? 'blur(0)' : 'blur(5px)', 
            transform: visible ? 'translateX(0)' : 'translateX(-100%)', 
            transition: 'all 1s',  }}>
          <img 
            src={Bezos} 
            alt="Jeff Bezos" 
            width="500"
            height="auto" 
          />
          <div style={{ float: 'right', marginRight: '5rem', maxWidth: '50%' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '.5rem' }}>Jeff Bezos</div>
            <div style={{ fontSize: '.7rem', lineHeight: 1.5 }}>
              When Jeff Bezos was 30 he had yet to step foot into the
              e-commerce space. He didn't start amazon.com until he
              was 31 (which is about 496 lizard years!).
            </div>
          </div>
        </div>
        <div ref={ref2} style={{ marginTop: '1rem', opacity: visible2 ? 1 : 0, 
            filter: visible2 ? 'blur(0)' : 'blur(5px)', 
            transform: visible2 ? 'translateX(0)' : 'translateX(-100%)', 
            transition: 'all 1s',  }}>
          <img 
            src={Reagan} 
            alt="Ronald Reagan" 
            width="500"
            height="auto" 
          />
          <div style={{ float: 'right', marginRight: '5rem', maxWidth: '50%' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '.5rem' }}>Ronald Reagan</div>
            <div style={{ fontSize: '.7rem', lineHeight: 1.5 }}>
              Long before Ronald Reagan was selling weapons to Saddam Hussein, he was a
              Hollywood movie and TV star! He was in movies such as The Killers, Prisoner of War,
              and a bunch of other stuff that no one gives a fuck about! 
              He didn't become president of the United States until age 69 (nice).
            </div>
          </div>
        </div>
        <div ref={ref3} style={{ marginTop: '1rem', opacity: visible3 ? 1 : 0, 
            filter: visible3 ? 'blur(0)' : 'blur(5px)', 
            transform: visible3 ? 'translateX(0)' : 'translateX(-100%)', 
            transition: 'all 1s',  }}>
          <img 
            src={KFC} 
            alt="Colonel Sanders" 
            width="500"
            height="auto" 
          />
          <div style={{ float: 'right', marginRight: '5rem', maxWidth: '50%' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '.5rem' }}>Colonel Sanders</div>
            <div style={{ fontSize: '.7rem', lineHeight: 1.5 }}>
              This asshole didn't start franchising his nasty chicken business until he was 62
              years old. Before that he was a gas station operator. 
            </div>
          </div>
        </div>
        <MusicSection />
        <SolarSystem />
      </div>
    </>
  );
}