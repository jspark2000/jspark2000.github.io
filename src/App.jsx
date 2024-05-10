import CareerSection from './sections/Career'
import ContactSection from './sections/Contact'
import EducationSection from './sections/Education'
import ProfileSection from './sections/Profile'
import ProjectSection from './sections/Project'
import SkillsSection from './sections/Skills'

function App() {
  return (
    <main className="grid h-screen w-full grid-cols-12 bg-zinc-900">
      <div className="col-span-12 flex h-full flex-col items-center justify-center bg-zinc-800 py-10 sm:col-span-3">
        <ProfileSection />
      </div>
      <div className="col-span-12 px-6 py-5 sm:col-span-9 sm:p-10">
        <div className="grid grid-cols-12 gap-5">
          <SkillsSection />
          <EducationSection />
          <CareerSection />
          <ProjectSection />
          <ContactSection />
        </div>
      </div>
    </main>
  )
}

export default App
