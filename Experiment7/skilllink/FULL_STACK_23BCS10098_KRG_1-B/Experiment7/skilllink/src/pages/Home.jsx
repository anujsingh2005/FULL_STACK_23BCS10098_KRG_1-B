import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-100/60 via-purple-100/70 to-pink-100/50 dark:from-gray-900 dark:to-blue-900">
      {/* Hero */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <header className="text-center mt-12 mb-8">
          <div className="inline-block rounded-2xl bg-white/60 dark:bg-gray-900/60 shadow-xl px-10 py-8 backdrop-blur-md ring-1 ring-blue-100 dark:ring-gray-700">
            <h1 className="text-6xl font-extrabold mb-4 text-blue-800 dark:text-blue-200 drop-shadow-lg animate-fade-in-down">
              Skill<span className="text-purple-600 dark:text-pink-300">Link</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-800 dark:text-gray-200 mb-2 font-medium animate-fade-in">
              Where <span className="font-bold text-blue-600 dark:text-blue-300">opportunity</span> meets <span className="font-bold text-purple-600 dark:text-pink-300">talent</span>
            </p>
            <p className="text-md md:text-lg text-blue-800 dark:text-blue-50 mb-5 animate-fade-in">
              Post projects, bid, hire, and manage work — all in one place!
            </p>
            <div className="flex flex-wrap gap-6 justify-center mb-2 mt-8">
              <Link
                to="/auth/login"
                className="px-8 py-3 rounded-lg bg-blue-600 text-white text-lg font-semibold shadow-md hover:bg-blue-800 transition"
              >
                Login
              </Link>
              <Link
                to="/auth/register"
                className="px-8 py-3 rounded-lg bg-white text-blue-800 border-2 border-blue-600 text-lg font-semibold shadow-md hover:bg-blue-50 transition"
              >
                Register
              </Link>
              <Link
                to="/projects"
                className="px-8 py-3 rounded-lg bg-purple-600 text-white text-lg font-semibold shadow-md hover:bg-purple-700 transition"
              >
                Browse Projects
              </Link>
            </div>
          </div>
        </header>
        {/* Role Cards */}
        <section className="mt-8 mb-10 flex flex-col md:flex-row gap-8 justify-center">
          {/* Employer Card */}
          <div className="flex-1 max-w-md bg-white/80 dark:bg-gray-800/80 backdrop-blur rounded-2xl shadow-lg ring-1 ring-blue-100 dark:ring-gray-900 px-8 py-8 text-center transition hover:scale-105 hover:shadow-2xl duration-200">
            <div className="flex items-center justify-center mb-3 text-blue-700 dark:text-blue-300">
              <svg className="w-10 h-10 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 8c-1.1 0-2 .9-2 2m2-2c1.1 0 2 .9 2 2m-2-2v2m10 7.5A2.5 2.5 0 0119.5 20h-15A2.5 2.5 0 012 17.5v-3A2.5 2.5 0 014.5 12H8a.5.5 0 00.47-.32l1.1-2.78A2 2 0 0111.45 8.5h1.1a2 2 0 011.88 1.4l1.1 2.78A.5.5 0 0016 12h3.5A2.5 2.5 0 0122 14.5v3z" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-extrabold text-2xl">Employers</span>
            </div>
            <ul className="text-gray-700 dark:text-gray-200 mb-6 space-y-2 text-lg">
              <li>Post projects and describe your needs</li>
              <li>Instantly receive bids from top freelancers</li>
              <li>Manage milestones, payments, and reviews</li>
            </ul>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/auth/register" className="px-6 py-2 rounded bg-blue-600 text-white font-bold shadow hover:bg-blue-800 transition">
                Join as Employer
              </Link>
              <Link to="/auth/login" className="px-6 py-2 rounded bg-white text-blue-800 border-2 border-blue-700 font-bold shadow hover:bg-blue-50 transition">
                Employer Login
              </Link>
            </div>
          </div>
          {/* Freelancer Card */}
          <div className="flex-1 max-w-md bg-white/80 dark:bg-gray-800/80 backdrop-blur rounded-2xl shadow-lg ring-1 ring-pink-100 dark:ring-pink-900 px-8 py-8 text-center transition hover:scale-105 hover:shadow-2xl duration-200">
            <div className="flex items-center justify-center mb-3 text-pink-700 dark:text-pink-300">
              <svg className="w-10 h-10 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M18 8c0 3.866-3.134 7-7 7S4 11.866 4 8a7 7 0 1114 0zm-7 9c4.411 0 8 1.567 8 3.5V22H3v-1.5C3 18.567 6.589 17 11 17z" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-extrabold text-2xl">Freelancers</span>
            </div>
            <ul className="text-gray-700 dark:text-gray-200 mb-6 space-y-2 text-lg">
              <li>Browse diverse projects across industries</li>
              <li>Bid, chat, and win freelance jobs</li>
              <li>Showcase your skills, build a great reputation</li>
            </ul>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/auth/register" className="px-6 py-2 rounded bg-pink-600 text-white font-bold shadow hover:bg-pink-700 transition">
                Join as Freelancer
              </Link>
              <Link to="/auth/login" className="px-6 py-2 rounded bg-white text-pink-800 border-2 border-pink-700 font-bold shadow hover:bg-pink-50 transition">
                Freelancer Login
              </Link>
            </div>
          </div>
        </section>
        {/* General Features Section */}
        <section className="my-6 w-full flex justify-center">
          <div className="max-w-3xl w-full py-7 px-5 bg-white dark:bg-gray-800/80 rounded-2xl shadow-lg ring-1 ring-blue-100 dark:ring-gray-800/60 glass">
            <h2 className="text-2xl font-bold mb-3 text-blue-800 dark:text-blue-100 animate-fade-in">Why SkillLink?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="list-disc pl-5 text-gray-900 dark:text-gray-200 text-lg space-y-2">
                <li>Hire <span className="font-bold">vetted freelancers</span> or find gigs instantly</li>
                <li>Easy project posting and <span className="font-bold">transparent bidding</span></li>
              </ul>
              <ul className="list-disc pl-5 text-gray-900 dark:text-gray-200 text-lg space-y-2">
                <li><span className="font-bold">Real-time messaging & support</span> for all users</li>
                <li>Powerful dashboards for <span className="font-bold">Admins</span>, <span className="font-bold">Employers</span>, &amp; <span className="font-bold">Freelancers</span></li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      {/* Footer */}
      <footer className="w-full py-7 bg-gradient-to-r from-blue-800 via-purple-800 to-pink-800 text-white shadow-inner">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          <div className="mb-2 md:mb-0 font-semibold">© {new Date().getFullYear()} SkillLink. All rights reserved.</div>
          <div className="flex flex-wrap gap-5 text-sm">
            <a href="mailto:support@skilllink.com" className="hover:underline">Contact</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
              <svg fill="currentColor" stroke="none" className="w-4 h-4 inline-block mr-1" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.582 0 8a8 8 0 005.468 7.594c.4.073.547-.173.547-.386 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.074-2.695-1.074-.364-.924-.89-1.17-.89-1.17-.727-.497.055-.487.055-.487.803.056 1.226.826 1.226.826.714 1.223 1.872.87 2.33.665.073-.517.28-.87.508-1.071-1.777-.202-3.644-.888-3.644-3.953 0-.872.312-1.586.824-2.145-.083-.203-.357-1.022.078-2.13 0 0 .672-.215 2.2.82a7.604 7.604 0 012.004-.27c.68.003 1.367.092 2.008.27 1.525-1.035 2.197-.82 2.197-.82.437 1.108.164 1.927.08 2.13.513.56.822 1.273.822 2.145 0 3.073-1.87 3.748-3.652 3.944.287.246.544.73.544 1.473 0 1.063-.009 1.92-.009 2.181 0 .215.145.463.552.384A7.998 7.998 0 0016 8c0-4.418-3.582-8-8-8z"/>
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
