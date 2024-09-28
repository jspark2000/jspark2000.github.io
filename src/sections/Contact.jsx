import { IoMdTrophy } from 'react-icons/io'

export default function AwardsSection() {
  return (
    <section className="col-span-12 sm:col-span-6">
      <div className="flex flex-col rounded-md py-5 sm:px-6">
        <div className="flex flex-row items-center space-x-2">
          <IoMdTrophy className="h-6 w-6 text-amber-400" />
          <h2 className="text-2xl font-bold text-amber-400">Awards</h2>
        </div>
        <div className="mt-3 flex flex-col space-y-2">
          <h3 className="text-lg font-semibold text-zinc-50">
            National Best Manager
          </h3>
          <p className="text-sm text-zinc-400">
            Korea American Football Association
            <br />
            2022.11
          </p>
        </div>
      </div>
    </section>
  )
}
