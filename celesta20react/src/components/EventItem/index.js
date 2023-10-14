import Image from "../Image"
import styles from './eventitem.module.css'
// import { motion } from 'framer-motion'
import Modal from '../BigModal/index'
import React,{ useState } from 'react'

/*
event={
    is_active=bool,
    poster=string(url of event poster),*
    name=string,*
    start_time=Date,*
    end_time=Date,*
    venue=string,*EXTRA venueUrl
    description=string,*
    min_team_size=number,*
    max_team_size=munber,*
    registration_fee=number,*
    registration_deadline=Date,
    prize=number,
    organizer=[[organizer_name,organizer_number]],
    video=rulebook,*
    is_online=bool,
    is_solo=bool,
    id=any
}
*/
const Index = ( {event} ) => {
    const [modal, setModal] = useState(false)

    // var model=false
    // const close = () => {
    //     setModal(false);
    // }

    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    position: 'relative',
                }}
                onClick={() => setModal(true)}
            >
                {event.is_active ? null : (
                    <img
                        src="/assets/coming-soon.png"
                        style={{
                            position: 'absolute',
                            top: '8px',
                            right: '30px',
                            zIndex: 2,
                            height: '100px',
                        }}
                        alt="Coming Soon"
                    />
                )}
                <div className={styles.imageWrap}>
                    <div className={styles.item}>
                        <img
                            src={
                                event.poster
                                    ? event.poster
                                    : '/events/poster.png'
                            }
                            alt="Fest Image"
                            width={300}
                            height={300}
                            style={{ borderRadius: 15 }}
                            objectfit={'contain'}
                        />
                    </div>
                    <p className={styles.img__description}>
                        <span style={{ marginBottom: '10px' }}>
                            <Image
                                src="/events/Vector.png"
                                width={70}
                                height={70}
                                alt="Fest Image overlay"
                            />
                        </span>{' '}
                    </p>
                </div>
                <div className={styles.eventName}>{event.name}</div>
            </div>
            {modal && (
                <>
                    <Modal
                        title={event.name}
                        body={event}
                        closeHandler={(prev)=>setModal(!prev)}
                    />
                </>
            )}
        </>
    )
}

export default Index
