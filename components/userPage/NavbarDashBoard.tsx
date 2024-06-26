"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { AvatarIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Edit, Home, X } from "lucide-react";
import { animate, motion } from "framer-motion";
import Link from "next/link";
import { BiSolidBusiness } from "react-icons/bi";
import SearchInput from "../Search/SearchInput";

function NavbarDashBoard() {
  const [open, setOpen] = useState<boolean>(false);
  const [leave, setLeave] = useState<boolean>(false);
  const path = usePathname();

  return (
    <>
      <div className={`hidden  max-sm:block`}>
        <div
          className={`fixed top-0 left-0 h-screen w-screen bg-transparent z-40 ${
            open ? "block" : "hidden"
          } `}
          onClick={() => leave && setOpen(false)}
        >
          &nbsp;
        </div>
        <Button
          variant="outline"
          className={`p-1 ${open ? "z-[9999] absolute top-8 left-5" : ""}`}
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div>
            {open ? (
              <motion.span>
                <X width={25} height={25} />
              </motion.span>
            ) : (
              <HamburgerMenuIcon width={25} height={25} />
            )}
          </motion.div>
        </Button>
        {open ? (
          <motion.div
            variants={{
              hidden: { x: "-100%", opacity: 0, transition: { duration: 0.2 } },
              visible: {
                x: "0%",
                opacity: 1,
                transition: { staggerChildren: 0.3 },
              },
            }}
            initial="hidden"
            animate={open ? "visible" : "hidden"}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              duration: 1,
            }}
            className={`${
              open ? "visible" : "invisible"
            } text-white w-[50vw] h-screen bg-background border border-border absolute top-0 left-0 z-50`}
          >
            <div
              className="w-full h-full relative mt-24 flex flex-col gap-4"
              onMouseLeave={() => setLeave(true)}
              onMouseEnter={() => setLeave(false)}
              onMouseOut={() => setLeave(true)}
            >
              <Link
                href={"/home"}
                className={`text-lg text-center min-w-max block mx-3 px-2 py-2 max-xs:text-base hover:bg-accent ${
                  path === "/home" ? "bg-accent" : ""
                } transition-all duration-300 rounded-md border border-border flex justify-center items-center gap-3`}
              >
                <span>
                  <Home width={25} height={25} />
                </span>
                Home
              </Link>
              <div className="mx-2 flex justify-center items-center text-lg text-center px-1  transition-all duration-300 rounded-md border border-border  py-1 max-xs:text-base hover:bg-accent ">
                <SearchInput />
              </div>

              {path === "/user/profile" || path === "/user/blogs" ? (
                <div className="flex flex-col gap-4">
                  <h1 className="text-SM  text-center text-accent">
                    User Dashboard
                  </h1>
                  <Link
                    href={"/user/profile"}
                    className={`text-lg text-center min-w-max block mx-3 px-2 py-2 max-xs:text-base hover:bg-accent ${
                      path === "/user/profile" ? "bg-accent" : ""
                    } transition-all duration-300 rounded-md border border-border flex justify-center items-center gap-3`}
                  >
                    <AvatarIcon width={25} height={25} /> Profile
                  </Link>
                  <Link
                    href={"/user/blogs"}
                    className={`text-lg text-center min-w-max block mx-3 px-2 py-2 max-xs:text-base hover:bg-accent ${
                      path === "/user/blogs" ? "bg-accent" : ""
                    } transition-all duration-300 rounded-md border border-border flex justify-center items-center gap-3`}
                  >
                    <Edit width={25} height={25} /> Your Blogs
                  </Link>
                </div>
              ) : null}
            </div>
          </motion.div>
        ) : null}
      </div>
    </>
  );
}

export default NavbarDashBoard;
