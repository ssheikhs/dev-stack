const navLinks = ['Home', 'Technologies', 'Projects', 'About', 'Contact']

function MobileMenu({ onClose }) {
  return (
    <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4">
      <ul className="flex flex-col gap-3">
        {navLinks.map((link, index) => (
          <li key={link}>
            <a
              href="#"
              onClick={onClose}
              className={
                index === 0
                  ? 'font-medium text-pink-600'
                  : 'text-gray-600 hover:text-pink-600'
              }
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex gap-3">
        <button type="button" className="flex-1 rounded-full border border-gray-200 py-2 text-sm font-medium">
          Sign In
        </button>
        <button type="button" className="flex-1 rounded-full bg-brand-gradient py-2 text-sm font-medium text-white">
          Sign Up
        </button>
      </div>
    </div>
  )
}

export default MobileMenu
