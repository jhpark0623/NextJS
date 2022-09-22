import Link from "next/link";
import { useRouter } from "next/router";
import { cls } from "../libs/utils";

export default function NavBar() {
  const router = useRouter();

  cls();

  return (
    <>
      <nav>
        <div className="bg-black text-white w-full flex justify-center">
          <ul className="flex  py-1 w-full max-w-[800px]">
            {/* home */}
            <li className="flex justify-center w-full">
              <Link href="/home">
                <a
                  className={
                    router.pathname === "/home" ? cls("text-blue-400") : cls("")
                  }
                >
                  Home
                </a>
              </Link>
            </li>

            {/* counter */}
            <li className="flex justify-center w-full">
              <Link href="/counter">
                <a
                  className={
                    router.pathname === "/counter"
                      ? cls("text-blue-400")
                      : cls("")
                  }
                >
                  Counter
                </a>
              </Link>
            </li>

            {/* todolist */}
            <li className="flex justify-center w-full">
              <Link href="/todo">
                <a
                  className={
                    router.pathname === "/todo" ? cls("text-blue-400") : cls("")
                  }
                >
                  ToDoList
                </a>
              </Link>
            </li>

            {/* developer */}
            <li className="flex justify-center w-full">
              <Link href="/about">
                <a
                  className={
                    router.pathname === "/about"
                      ? cls("text-blue-400")
                      : cls("")
                  }
                >
                  developer
                </a>
              </Link>
            </li>

            {/* users */}
            <li className="flex justify-center w-full">
              <Link href="/users">
                <a
                  className={
                    router.pathname === "/users"
                      ? cls("text-blue-400")
                      : cls("")
                  }
                >
                  Users
                </a>
              </Link>
            </li>

            {/* users_ssr */}
            <li className="flex justify-center w-full">
              <Link href="/users/ssr">
                <a
                  className={
                    router.pathname === "/users/ssr"
                      ? cls("text-blue-400")
                      : cls("")
                  }
                >
                  Users(SSR)
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
