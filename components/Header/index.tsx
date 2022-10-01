import React, { ReactElement, useState, useEffect, Children } from 'react';
import { Transition } from '@headlessui/react';
import Link, { LinkProps } from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FaWallet, FaDiceSix, FaHandshake } from 'react-icons/fa';
import { RiMenu4Fill } from 'react-icons/ri';
import { FiX } from 'react-icons/fi';
import { BsCurrencyExchange } from 'react-icons/bs';
import { SiLaunchpad } from 'react-icons/si';

type ActiveLinkProps = LinkProps & {
  children: ReactElement;
  activeClassName: string;
};

const ActiveLink = ({ children, activeClassName, ...props }: ActiveLinkProps) => {
  const { asPath, isReady } = useRouter();

  const child = Children.only(children);
  const childClassName = child.props.className || '';
  const [className, setClassName] = useState(childClassName);

  useEffect(() => {
    // Check if the router fields are updated client-side
    if (isReady) {
      // Dynamic route will be matched via props.as
      // Static route will be matched via props.href
      const linkPathname = new URL((props.as || props.href) as string, location.href).pathname;

      // Using URL().pathname to get rid of query and hash
      const activePathname = new URL(asPath, location.href).pathname;

      const newClassName = linkPathname === activePathname ? `${childClassName} ${activeClassName}`.trim() : childClassName;

      if (newClassName !== className) {
        setClassName(newClassName);
      }
    }
  }, [asPath, isReady, props.as, props.href, childClassName, activeClassName, setClassName, className]);

  return (
    <Link {...props}>
      {React.cloneElement(child, {
        className: className || null
      })}
    </Link>
  );
};

export default function Header() {
  const [showMobileSidebar, setShowMobileSidebar] = useState<boolean>(false);
  return (
    <>
      <div className="bg-gradient-to-r from-[#000000] to-[#161525] w-full font-Montserrat">
        <div className="flex flex-row justify-between px-[38px] py-[16px]">
          <div className="flex justify-center">
            <Image src="/images/vefi.svg" alt="vefi_logo" width={30} height={30} />
          </div>
          <div className="md:flex flex-row justify-between hidden">
            <div className="px-[23px] cursor-pointer">
              <ActiveLink activeClassName="border-b-[3px] border-b-[#46aefc]" href="/dex">
                <span className="text-white text-[21px] font-[600]">Trade</span>
              </ActiveLink>
            </div>
            <div className="px-[23px] cursor-pointer">
              <ActiveLink activeClassName="border-b-[3px] border-b-[#46aefc]" href="/launchpad">
                <span className="text-white text-[21px] font-[600]">Launchpad</span>
              </ActiveLink>
            </div>
            <div className="px-[23px] cursor-pointer">
              <ActiveLink activeClassName="border-b-[3px] border-b-[#46aefc]" href="/staking">
                <span className="text-white text-[21px] font-[600]">Staking Pools</span>
              </ActiveLink>
            </div>
            <div className="px-[23px] cursor-pointer">
              <ActiveLink activeClassName="border-b-[3px] border-b-[#46aefc]" href="/multisig">
                <span className="text-white text-[21px] font-[600]">Multi-Signature</span>
              </ActiveLink>
            </div>
          </div>
          <div>
            <button className="hidden md:flex justify-center items-center bg-[#1673b9] py-[9px] px-[10px] rounded-[11px] text-[18px] text-white">
              <FaWallet /> <span className="text-white text-[18px] ml-[2px]">Connect Wallet</span>
            </button>
            <button
              className="md:hidden flex justify-center items-center bg-[#1673b9] py-[9px] px-[10px] rounded-[5px] text-[18px] text-white"
              onClick={() => setShowMobileSidebar((val) => !val)}
            >
              {!showMobileSidebar ? <RiMenu4Fill /> : <FiX />}
            </button>
          </div>
        </div>
      </div>
      <Transition
        as="div"
        className="flex flex-row md:hidden bg-[#000]/80 h-[50px] gap-2 overflow-auto hidden-scrollbar justify-between items-center w-full px-4 py-4"
        enter="transform transition ease-in-out duration-[500ms]"
        enterFrom="opacity-0 -translate-y-6]"
        enterTo="opacity-100 translate-y-0"
        show={showMobileSidebar}
      >
        <div className="flex justify-center items-center gap-4 h-full">
          <div className="cursor-pointer">
            <ActiveLink activeClassName="text-[#0cedfc]" href="/dex">
              <BsCurrencyExchange className="text-[#fff] text-[40px]" />
            </ActiveLink>
          </div>
          <div className="cursor-pointer">
            <ActiveLink activeClassName="text-[#0cedfc]" href="/launchpad">
              <SiLaunchpad className="text-[#fff] text-[40px]" />
            </ActiveLink>
          </div>
          <div className="cursor-pointer">
            <ActiveLink activeClassName="text-[#0cedfc]" href="/staking">
              <FaDiceSix className="text-[#fff] text-[40px]" />
            </ActiveLink>
          </div>
          <div className="cursor-pointer">
            <ActiveLink activeClassName="text-[#0cedfc]" href="/multisig">
              <FaHandshake className="text-[#fff] text-[40px]" />
            </ActiveLink>
          </div>
        </div>
        <button className="md:hidden flex justify-center items-center bg-[#1673b9] py-[9px] px-[10px] rounded-[5px] text-[18px] text-white">
          <FaWallet />
        </button>
      </Transition>
    </>
  );
}
