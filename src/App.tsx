import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { siteData } from './data/site'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Experience } from './sections/Experience'
import { Interests } from './sections/Interests'
import { Projects } from './sections/Projects'
import { Stats } from './sections/Stats'
import { Works } from './sections/Works'
import { Writing } from './sections/Writing'

function App() {
  return (
    <>
      <Header name={siteData.personal.name} title={siteData.personal.title} navItems={siteData.navigation} />
      <main>
        <Hero
          eyebrow={siteData.hero.eyebrow}
          title={siteData.hero.title}
          subtitle={siteData.hero.subtitle}
          primaryCta={siteData.hero.primaryCta}
          secondaryCta={siteData.hero.secondaryCta}
        />
        <About heading={siteData.about.heading} paragraphs={siteData.about.paragraphs} />
        <Experience items={siteData.experience} />
        <Interests items={siteData.interests} />
        <Projects items={siteData.projects} />
        <Works items={siteData.works} />
        <Writing items={siteData.writing} />
        <Stats items={siteData.stats} />
        <Contact
          heading={siteData.contact.heading}
          body={siteData.contact.body}
          email={siteData.contact.email}
          links={siteData.contact.links}
        />
      </main>
      <Footer name={siteData.personal.name} note={siteData.footer.note} />
    </>
  )
}

export default App

