import { RxAccessibility } from 'react-icons/rx'

export default function SkillsSection() {
  return (
    <section className="col-span-12 sm:col-span-6">
      <div className="flex flex-col rounded-md py-5 sm:px-6">
        <div className="flex flex-row items-center space-x-2">
          <RxAccessibility className="h-6 w-6 text-amber-400" />
          <h2 className="text-2xl font-bold text-amber-400">Skills</h2>
        </div>
        <div className="mt-3 flex flex-col space-y-2">
          <h3 className="text-lg font-semibold text-zinc-50">Backend</h3>
          <p className="text-sm text-zinc-400">
            Java, Kotlin, Spring(Kotlin), Python, FastAPI, NodeJS, Express
          </p>
          <h3 className="text-lg font-semibold text-zinc-50">Frontend</h3>
          <p className="text-sm text-zinc-400">Javascript, Typescript, React</p>
        </div>
      </div>
    </section>
  )
}
