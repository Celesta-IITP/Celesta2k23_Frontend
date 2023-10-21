// import Image from "../Image"
import styles from './eventitem.module.css'
import defaultPoster from "../../assets/img/RegisterImage.webp";
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
                <div className={styles.imageWrap}>
                    <div className={styles.item}>
                        <img
                            src={
                                event.imageUrl
                                    ? event.imageUrl
                                    : defaultPoster
                            }
                            alt="Fest Poster"
                            width={300}
                            style={{ borderRadius: 15, aspectRatio: "1" }}
                            objectfit={'contain'}
                        
                        />
                    </div>
                    <p className={styles.img__description}>
                        {/* <span style={{ marginBottom: '10px' }}>
                            <Image
                                src="/events/Vector.png"
                                width={70}
                                height={70}
                                alt="Fest Image overlay"
                            />
                        </span>{' '} */}
                    </p>
                </div>
                <div className={styles.eventName}>{event.name}</div>
            </div>
            {modal && (
                <>
                    <Modal
                        title={event.name}
                        body={event}
                        closeHandler={setModal}
                    />
                </>
            )}
        </>
    )
}

export default Index
