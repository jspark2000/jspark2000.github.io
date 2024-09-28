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
            Backend Developer (Full Time)
          </p>
          <p className="text-sm text-zinc-400">
            Development of a blockchain-based sports association web server
            (Kotlin, Spring). Serverless application development including image
            compression, CDN path access restriction, (NodeJS).
          </p>
          <p className="text-sm text-zinc-400">2023.6 ~ 2024.3</p>
          <h3 className="pt-3 text-lg font-semibold text-zinc-50">
            Crois Technology Lab
          </h3>
          <p className="text-sm font-semibold text-zinc-50">
            Fullstack Developer (Freelancer, Full Time)
          </p>
          <p className="text-sm text-zinc-400">
            Enhancing the data collection pipeline for CNC machines(MQTT,
            FastAPI) and Developing an Interface for the Visualization of
            Various Data Analysis Techniques, Including FFT and STFT(React,
            WebGL).
            <br />
            2024.4 ~ now
          </p>
        </div>
      </div>
    </section>
  )
}
