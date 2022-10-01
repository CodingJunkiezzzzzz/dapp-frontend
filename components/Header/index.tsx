import React, { ReactElement, useState, useEffect, Children } from 'react';
import Link, { LinkProps } from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FaWallet } from 'react-icons/fa';
import { RiMenu4Fill } from 'react-icons/ri';

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
            <button className="hidden lg:flex justify-center items-center bg-[#1673b9] py-[9px] px-[10px] rounded-[11px] text-[18px] text-white">
              <FaWallet /> <span className="text-white text-[18px] ml-[2px]">Connect Wallet</span>
            </button>
            <button className="md:hidden flex justify-center items-center bg-[#1673b9] py-[9px] px-[10px] rounded-[5px] text-[18px] text-white">
              <RiMenu4Fill />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
