import logo from '../assets/logo-text.png'

const linkGroups = [
  {
    title: 'Product',
    links: ['Home', 'Technologies', 'Projects'],
  },
  {
    title: 'Company',
    links: ['About', 'Contact', 'Careers'],
  },
  {
    title: 'Legal',
    links: ['Privacy Policy', 'Terms of Service'],
  },
]

function Footer() {
  return (
    <footer className="border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <img src={logo} alt="Dev Stack" className="h-8" />
          <p className="mt-3 text-sm text-gray-500">
            Curated tools, technologies, and resources for developers building modern software.
          </p>
          <div className="mt-4 flex gap-4 text-sm text-gray-500">
            <a href="#" className="hover:text-pink-600">GitHub</a>
            <a href="#" className="hover:text-pink-600">Twitter</a>
            <a href="#" className="hover:text-pink-600">LinkedIn</a>
          </div>
        </div>

        {linkGroups.map((group) => (
          <div key={group.title}>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
              {group.title}
            </h4>
            <ul className="mt-3 flex flex-col gap-2 text-sm text-gray-500">
              {group.links.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-pink-600">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-pink-600">Privacy</a>
            <a href="#" className="hover:text-pink-600">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
