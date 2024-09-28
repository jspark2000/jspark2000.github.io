import { HiAcademicCap } from 'react-icons/hi'

export default function EducationSection() {
  return (
    <section className="col-span-12 sm:col-span-6">
      <div className="flex flex-col rounded-md py-5 sm:px-6">
        <div className="flex flex-row items-center space-x-2">
          <HiAcademicCap className="h-6 w-6 text-amber-400" />
          <h2 className="text-2xl font-bold text-amber-400">Education</h2>
        </div>
        <div className="mt-3 flex flex-col space-y-2">
          <h3 className="text-lg font-semibold text-zinc-50">
            Applied Artifical Intelligence(B.S.)
          </h3>
          <p className="text-sm text-zinc-400">
            Sungkyunkwan University (SKKU) <br />
            2019.3 ~ now
          </p>
          <h3 className="text-lg font-semibold text-zinc-50">
            Computer Science(B.S.)
          </h3>
          <p className="text-sm text-zinc-400">
            Sungkyunkwan University (SKKU) <br />
            2020.9 ~ now
          </p>
          <h3 className="pt-3 text-lg font-semibold text-zinc-50">
            GPA{' '}
            <span className="ml-3 text-base text-zinc-400">
              4.2 / 4.5 (major)
            </span>
          </h3>
        </div>
      </div>
    </section>
  )
}
