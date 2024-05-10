import ArchieveSection from './sections/Archieve'
import ContactSection from './sections/Contact'
import EducationSection from './sections/Education'
import IntroductionSection from './sections/Introduction'
import SkillsSection from './sections/Skills'

function App() {
  return (
    <main className="flex h-screen w-full flex-col bg-zinc-900">
      <div className="mx-auto w-full max-w-screen-xl p-10">
        <div className="grid grid-cols-12 gap-5">
          <IntroductionSection />
          <SkillsSection />
          <EducationSection />
          <ArchieveSection />
          <ContactSection />
        </div>
      </div>
    </main>
  )
}

export default App
