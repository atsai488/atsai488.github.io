import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <div className="w-full h-1/10 px-5 py-2 flex flex-row">
        <nav className='w-1/2'>
          <Link
            to="/"
            className={`hover:font-bold text-sm `}
          >
          {"Austin Tsai"}
          </Link>
        </nav>

        <nav className="flex w-1/2 justify-end gap-4">
          <NavButton to='/' label='home' />
          <NavButton to='/cafe' label='sweets' />
          <NavButton to='/blog' label='blah blah' />
        </nav>

      </div>

      <hr className="w-full border-t border-gray-300 ml-5" />
    </>
  );
}

interface NavButtonProps {
  to: string;
  label: string;
  className?: string;
}

function NavButton({ to, label, className }: NavButtonProps) {
  return (
    <Link
      to={to}
      className={`text-blue-500 hover:underline text-sm ${className ?? ''}`}
    >
      {label}
    </Link>
  );
}

export default Header;
