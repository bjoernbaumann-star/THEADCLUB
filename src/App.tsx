import './App.css'

const assets = {
  group1: '/assets/group1.svg',
  vectorThe: '/assets/vector-the.svg',
  vectorArt: '/assets/vector-art.svg',
  vectorClub1: '/assets/vector-club1.svg',
  vectorClub2: '/assets/vector-club2.svg',
  ebene5: '/assets/ebene5.svg',
  ebene6: '/assets/ebene6.svg',
}

export default function App() {
  return (
    <main className="page">
      <div className="page__inner">
        <header className="logo" aria-label="The Art Club">
          <img src={assets.vectorThe} alt="" className="logo__the" />
          <img src={assets.vectorArt} alt="" className="logo__art" />
          <img src={assets.vectorClub1} alt="" className="logo__club logo__club--1" />
          <img src={assets.vectorClub2} alt="" className="logo__club logo__club--2" />
        </header>

        <section className="hero" aria-labelledby="hero-heading">
          <img src={assets.group1} alt="" className="hero__scribbles" aria-hidden="true" />
          <h1 id="hero-heading" className="hero__title">
            fuck let&apos;s meet, discuss and talk and have a drink
          </h1>
        </section>

        <section className="event" aria-labelledby="event-heading">
          <h2 id="event-heading" className="event__label">
            NEXT EVENT
          </h2>

          <div className="event__content">
            <img src={assets.ebene5} alt="" className="event__scribbles" aria-hidden="true" />
            <p className="event__title">how to work with AI</p>
          </div>
        </section>

        <footer className="cta">
          <a href="#signup" className="cta__button">
            <img src={assets.ebene6} alt="" className="cta__border" aria-hidden="true" />
            <span className="cta__text">sign up</span>
          </a>
        </footer>
      </div>
    </main>
  )
}
