import { useState, useEffect } from 'react';
import { Switch } from '@headlessui/react';
import { BiSun } from 'react-icons/bi';
import { HiOutlineMoon } from 'react-icons/hi';

const DarkMode = () => {
  const [enabled, setEnabled] = useState(false);

  const toggleDarkMode = () => {
    if (enabled === false) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setEnabled(true);
      return;
    }
    if (enabled === true) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setEnabled(false);
      return;
    }
  };

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      setEnabled(true);
    }
    if (localStorage.getItem('theme') === 'light') {
      setEnabled(false);
    }
  }, []);

  return (
    <div className="flex gap-2 items-start">
      <BiSun size={29} />
      <Switch
        checked={enabled}
        onChange={toggleDarkMode}
        className={`${
          enabled
            ? 'bg-[#5651e5] dark:bg-blue-600'
            : 'bg-gray-300 dark:bg-gray-400'
        } relative inline-flex h-7 w-14 items-center rounded-full`}
      >
        <span className="sr-only">Enable notifications</span>
        <span
          className={`${
            enabled ? 'translate-x-8' : 'translate-x-1'
          } inline-block h-5 w-5 transform rounded-full bg-white transition`}
        />
      </Switch>
      <HiOutlineMoon size={26} className={enabled ? 'text-yellow-500' : ''} />
    </div>
  );
};

export default DarkMode;
