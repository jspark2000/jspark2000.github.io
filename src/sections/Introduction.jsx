import { IoMdMegaphone } from 'react-icons/io'

export default function IntroductionSection() {
  return (
    <section className="col-span-12 sm:col-span-6">
      <div className="flex flex-col rounded-md px-6 py-5">
        <div className="flex flex-row items-center space-x-2">
          <IoMdMegaphone className="h-6 w-6 text-amber-400" />
          <h2 className="text-2xl font-bold text-amber-400">Abount me</h2>
        </div>
        <p className="mt-5 px-5 text-base text-zinc-50">
          Hello! I'm an undergraduate student aspiring to become a backend
          developer | AI engineer.
        </p>
      </div>
    </section>
  )
}
