import { IoIosBusiness } from 'react-icons/io'

export default function CareerSection() {
  return (
    <section className="col-span-12 sm:col-span-6">
      <div className="flex flex-col rounded-md py-5 sm:px-6">
        <div className="flex flex-row items-center space-x-2">
          <IoIosBusiness className="h-6 w-6 text-amber-400" />
          <h2 className="text-2xl font-bold text-amber-400">Careers</h2>
        </div>
        <div className="mt-3 flex flex-col space-y-2">
          <h3 className="text-lg font-semibold text-zinc-50">Human Trust</h3>
          <p className="text-sm font-semibold text-zinc-50">
            Backend, Devops Developer (Full Time)
          </p>
          <p className="text-sm text-zinc-400">
            Development of a blockchain-based sports association protocol
            <br />
            2023.6 ~ 2024.3
          </p>

          <h3 className="pt-3 text-lg font-semibold text-zinc-50">Crois</h3>
          <p className="text-sm font-semibold text-zinc-50">
            Backend, Frontend Developer (Part Time)
          </p>
          <p className="text-sm text-zinc-400">
            Building a data collection pipeline for factory robots and
            developing the system UI.
            <br />
            2024.4 ~ now
          </p>
        </div>
      </div>
    </section>
  )
}
