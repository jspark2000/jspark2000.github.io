import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function ProfileSection() {
  return (
    <section className="flex flex-col items-center">
      <img
        className="mb-5 h-36 w-36 rounded-full border-2 border-zinc-50 object-cover"
        src="/profile.jpg"
        alt="profile image"
      />
      <h2 className="text-xl font-bold text-zinc-50">Park Jisoo</h2>
      <p className="text-xs font-light text-amber-400">Backend Developer</p>
      <p className="mt-5 text-center text-sm font-normal text-zinc-50">
        "Hello! I'm an undergraduate student
        <br />
        aspiring to become a backend developer."
      </p>
      <div className="mt-8 flex flex-row space-x-3 text-zinc-50 sm:mt-10">
        <FaGithub className="h-5 w-5" />
        <FaLinkedin className="h-5 w-5" />
      </div>
      <div className="mt-8 flex flex-col space-y-1 text-center sm:mt-10">
        <p className="text-sm text-zinc-400">idpjs2000@gmail.com</p>
        <p className="text-sm text-zinc-400">+82 10-5648-3326</p>
      </div>
    </section>
  )
}
