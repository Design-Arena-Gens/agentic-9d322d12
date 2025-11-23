'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showInvite, setShowInvite] = useState(false);

  useEffect(() => {
    setShowInvite(true);
  }, []);

  const events = [
    {
      id: 'haldi',
      name: 'Haldi Ceremony',
      date: 'February 12, 2025',
      time: '10:00 AM',
      venue: 'Home Garden',
      color: '#FFD700',
      emoji: '🌼',
      description: 'A traditional turmeric ceremony filled with joy and laughter'
    },
    {
      id: 'mehendi',
      name: 'Mehendi Night',
      date: 'February 13, 2025',
      time: '6:00 PM',
      venue: 'Grand Banquet Hall',
      color: '#8B4513',
      emoji: '🎨',
      description: 'An evening of beautiful henna art, music and dance'
    },
    {
      id: 'wedding',
      name: 'Wedding Ceremony',
      date: 'February 14, 2025',
      time: '7:00 PM',
      venue: 'Paradise Gardens',
      color: '#FF1493',
      emoji: '💒',
      description: 'The sacred union of two souls in eternal love'
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.stars}></div>
      <div className={styles.stars2}></div>
      <div className={styles.stars3}></div>

      {!selectedEvent ? (
        <div className={`${styles.mainCard} ${showInvite ? styles.fadeIn : ''}`}>
          <div className={styles.characterContainer}>
            <div className={styles.character}>
              <div className={styles.characterHead}>
                <div className={styles.characterEye} style={{ left: '30%' }}></div>
                <div className={styles.characterEye} style={{ right: '30%' }}></div>
                <div className={styles.characterSmile}></div>
              </div>
              <div className={styles.characterBody}></div>
            </div>
            <div className={styles.character} style={{ marginLeft: '30px' }}>
              <div className={styles.characterHead}>
                <div className={styles.characterEye} style={{ left: '30%' }}></div>
                <div className={styles.characterEye} style={{ right: '30%' }}></div>
                <div className={styles.characterSmile}></div>
                <div className={styles.characterHair}></div>
              </div>
              <div className={styles.characterBody} style={{ background: 'linear-gradient(180deg, #ff6b9d 0%, #ff1493 100%)' }}></div>
            </div>
          </div>

          <div className={styles.heartFloat}>❤️</div>

          <h1 className={styles.title}>You're Invited!</h1>
          <div className={styles.coupleNames}>
            <span className={styles.name}>Priya</span>
            <span className={styles.ampersand}>&</span>
            <span className={styles.name}>Rahul</span>
          </div>

          <p className={styles.subtitle}>Join us in celebrating our special moments</p>

          <div className={styles.eventsGrid}>
            {events.map((event, index) => (
              <div
                key={event.id}
                className={styles.eventCard}
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => setSelectedEvent(event)}
              >
                <div className={styles.eventEmoji}>{event.emoji}</div>
                <h3>{event.name}</h3>
                <p className={styles.eventDate}>{event.date}</p>
                <button
                  className={styles.detailsBtn}
                  style={{ background: event.color }}
                >
                  View Details
                </button>
              </div>
            ))}
          </div>

          <div className={styles.footer}>
            <p>We can't wait to celebrate with you! 🎉</p>
          </div>
        </div>
      ) : (
        <div className={`${styles.eventDetails} ${styles.fadeIn}`}>
          <button
            className={styles.backBtn}
            onClick={() => setSelectedEvent(null)}
          >
            ← Back
          </button>

          <div className={styles.eventHeader} style={{ background: selectedEvent.color }}>
            <div className={styles.eventIcon}>{selectedEvent.emoji}</div>
            <h2>{selectedEvent.name}</h2>
          </div>

          <div className={styles.eventInfo}>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>📅 Date</span>
              <span className={styles.infoValue}>{selectedEvent.date}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>⏰ Time</span>
              <span className={styles.infoValue}>{selectedEvent.time}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>📍 Venue</span>
              <span className={styles.infoValue}>{selectedEvent.venue}</span>
            </div>
          </div>

          <p className={styles.eventDescription}>{selectedEvent.description}</p>

          <div className={styles.pixarCharacter}>
            {selectedEvent.id === 'haldi' && (
              <div className={styles.haldiScene}>
                <div className={styles.haldiCharacter}>
                  <div className={styles.haldiHead}></div>
                  <div className={styles.haldiBody}></div>
                  <div className={styles.turmericSplash}></div>
                </div>
              </div>
            )}
            {selectedEvent.id === 'mehendi' && (
              <div className={styles.mehendiScene}>
                <div className={styles.mehendiCharacter}>
                  <div className={styles.mehendiHead}></div>
                  <div className={styles.mehendiBody}></div>
                  <div className={styles.mehendiHand}>
                    <div className={styles.hennaPattern}>✿</div>
                  </div>
                </div>
              </div>
            )}
            {selectedEvent.id === 'wedding' && (
              <div className={styles.weddingScene}>
                <div className={styles.bride}>
                  <div className={styles.brideHead}></div>
                  <div className={styles.brideBody}></div>
                  <div className={styles.veil}></div>
                </div>
                <div className={styles.groom}>
                  <div className={styles.groomHead}></div>
                  <div className={styles.groomBody}></div>
                </div>
                <div className={styles.confetti}>🎊</div>
              </div>
            )}
          </div>

          <button
            className={styles.rsvpBtn}
            style={{ background: selectedEvent.color }}
          >
            RSVP Now
          </button>
        </div>
      )}
    </div>
  );
}
