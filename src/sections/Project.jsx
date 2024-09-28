import { FaGithub, FaHome, FaRunning } from 'react-icons/fa'

export default function ProjectSection() {
  return (
    <section className="col-span-12 sm:col-span-6">
      <div className="flex flex-col rounded-md py-5 sm:px-6">
        <div className="flex flex-row items-center space-x-2">
          <FaRunning className="h-6 w-6 text-amber-400" />
          <h2 className="text-2xl font-bold text-amber-400">Toy Projects</h2>
        </div>
        <div className="mt-3 flex flex-col space-y-2">
          <h3 className="text-lg font-semibold text-zinc-50">Codedang</h3>
          <p className="text-sm text-zinc-400">
            A coding platform for Sungkyunkwan University students
            <br />
            2022.9 ~ now
          </p>
          <div className="flex flex-row space-x-2 text-zinc-50">
            <a href="https://codedang.com">
              <FaHome className="h-4 w-4" />
            </a>
            <a href="https://github.com/skkuding/codedang">
              <FaGithub className="h-4 w-4" />
            </a>
          </div>

          <h3 className="pt-3 text-lg font-semibold text-zinc-50">ROYALS</h3>
          <p className="text-sm text-zinc-400">
            An Integrated team management system for SKKU American Football Team
            ROYALS
            <br />
            2023.1 ~ now
          </p>
          <div className="flex flex-row space-x-2 text-zinc-50">
            <a href="https://skku-royals.com">
              <FaHome className="h-4 w-4" />
            </a>
            <a href="https://github.com/skku-royals/official-webpage">
              <FaGithub className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
