import React, { useState, useEffect } from 'react';
import ShelfTower from '../../components/yuliya/yula2/shelf';
import AlbumStage from '../../components/yuliya/yula2/albumstage';
import styles from '../../styles/comps/yuliya/yula2/yula2.module.css';

const PETALS = ['🌸', '🌷', '💐', '🌺', '🌸', '🌷', '💐', '🌺', '🌸'];

function Loader({ hidden }) {
  return (
    <div className={`${styles.loader} ${hidden ? styles.loaderHidden : ''}`}>
      <div className={styles.loaderInner}>
        <div className={styles.loaderPetals}>
          {PETALS.map((petal, index) => (
            <span
              key={index}
              className={styles.loaderPetal}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {petal}
            </span>
          ))}
        </div>
        <p className={styles.loaderText}>something for you...</p>
      </div>
    </div>
  );
}

const library = [
  {
    id: 'origins',
    title: 'Started',
    color: '#be123c',
    height: 112,
    side: 'left',
    photos: [
      {
        id: 'origins-1',
        title: 'First Spark',
        description: 'The tiny beginning of a very big chapter.',
        img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'origins-2',
        title: 'First Laugh',
        description: 'The moment everything felt a little easier.',
        img: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'origins-3',
        title: 'Soft Start',
        description: 'A quiet little memory that stuck around.',
        img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'origins-4',
        title: 'Early Days',
        description: 'Everything still felt new in the sweetest way.',
        img: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'trips',
    title: 'Trips',
    color: '#166534',
    height: 124,
    side: 'left',
    photos: [
      {
        id: 'trips-1',
        title: 'Windows Down',
        description: 'A playlist, a long road, and no real rush.',
        img: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'trips-2',
        title: 'Almost There',
        description: 'The part of the drive where the sky did all the work.',
        img: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'trips-3',
        title: 'Detour',
        description: 'Not the plan, somehow still perfect.',
        img: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'trips-4',
        title: 'Golden Hour',
        description: 'The kind of light that makes everything feel cinematic.',
        img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'little-days',
    title: 'Little Days',
    color: '#ec4899',
    height: 106,
    side: 'left',
    photos: [
      {
        id: 'little-days-1',
        title: 'Slow Afternoon',
        description: 'Nothing huge happened. That was kind of the point.',
        img: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'little-days-2',
        title: 'Errand Date',
        description: 'Somehow even ordinary things felt like ours.',
        img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'little-days-3',
        title: 'Tiny Pause',
        description: 'A small moment that made the day softer.',
        img: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'favorites',
    title: 'Favorites',
    color: '#171717',
    height: 118,
    side: 'left',
    photos: [
      {
        id: 'favorites-1',
        title: 'Favorite Corner',
        description: 'A tiny place that started feeling familiar.',
        img: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'favorites-2',
        title: 'This One',
        description: 'Some memories keep getting picked first.',
        img: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'favorites-3',
        title: 'Kept Close',
        description: 'The kind of memory you save without thinking.',
        img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'food',
    title: 'Food',
    color: '#15803d',
    height: 104,
    side: 'right',
    photos: [
      {
        id: 'food-1',
        title: 'Our Table',
        description: 'Good food, better company.',
        img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'food-2',
        title: 'Dessert First',
        description: 'A very reasonable decision, honestly.',
        img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'food-3',
        title: 'Late Bite',
        description: 'One of those meals that fixed the whole day.',
        img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'laughs',
    title: 'Jokes',
    color: '#dc2626',
    height: 116,
    side: 'right',
    photos: [
      {
        id: 'laughs-1',
        title: 'Do Not Explain',
        description: 'Some jokes are better when nobody else gets them.',
        img: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'laughs-2',
        title: 'The Look',
        description: 'No words needed. Immediate laughter.',
        img: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'laughs-3',
        title: 'Again?',
        description: 'Yes. Again. Still funny.',
        img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'quiet',
    title: 'Quiet',
    color: '#f472b6',
    height: 110,
    side: 'right',
    photos: [
      {
        id: 'quiet-1',
        title: 'Soft Silence',
        description: 'Not every good memory needs a lot of noise.',
        img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'quiet-2',
        title: 'Just There',
        description: 'The kind of calm that feels rare.',
        img: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'quiet-3',
        title: 'Still Moment',
        description: 'A little quiet, saved on purpose.',
        img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'future',
    title: 'Future',
    color: '#262626',
    height: 122,
    side: 'right',
    photos: [
      {
        id: 'future-1',
        title: 'Someday List',
        description: 'A few places, a few ideas, and a lot to look forward to.',
        img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'future-2',
        title: 'Next Chapter',
        description: 'Not a memory yet, but already part of the story.',
        img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'future-3',
        title: 'Soon',
        description: 'A little placeholder for everything still coming.',
        img: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80'
      }
    ]
  }
];

export default function BookshelfRoom() {
  const [activeAlbum, setActiveAlbum] = useState(null);
  const [loaderHidden, setLoaderHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaderHidden(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  const leftAlbums = library.filter((album) => album.side === 'left');
  const rightAlbums = library.filter((album) => album.side === 'right');

  return (
    <>
      <Loader hidden={loaderHidden} />
      <div className={styles.roomContainer}>
        <div className={styles.entertainmentCenter}>
          <ShelfTower
            side="left"
            albums={leftAlbums}
            activeId={activeAlbum?.id}
            onSelectAlbum={setActiveAlbum}
          />

          <div className={styles.centerSection}>
            <AlbumStage
              activeAlbum={activeAlbum}
              onClose={() => setActiveAlbum(null)}
            />

            <div className={styles.lowConsole}>
              <div className={styles.basket} />
              <div className={styles.basket} />
              <div className={styles.basket} />
            </div>
          </div>

          <ShelfTower
            side="right"
            albums={rightAlbums}
            activeId={activeAlbum?.id}
            onSelectAlbum={setActiveAlbum}
          />
        </div>
      </div>
    </>
  );
}