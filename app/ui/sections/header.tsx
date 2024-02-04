import GithubIcon from "../icons/github";
import LinkedInIcon from "../icons/linkedin";
import Navigation from "../navigation";

export default function Header() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          Anton Lebedev
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Senior Frontend Developer
        </h2>
        <p className="mt-4 max-w-xs leading-normal">
          I build pixel-perfect, engaging, and accessible digital experiences.
        </p>
        <Navigation />
      </div>
      <ul className="ml-1 mt-8 flex items-center">
        <li className="mr-5 text-xs shrink-0">
          <a
            className="block hover:text-slate-200"
            href="https://github.com/serpencob"
            aria-label="GitHub (opens in a new tab)"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">Github</span>
            <GithubIcon aria-hidden />
          </a>
        </li>
        <li className="mr-5 text-xs shrink-0">
          <a
            className="block hover:text-slate-200"
            href="https://www.linkedin.com/in/serpencob/"
            aria-label="LinkedIn (opens in a new tab)"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">LinkedIn</span>
            <LinkedInIcon aria-hidden />
          </a>
        </li>
      </ul>
    </header>
  );
}
