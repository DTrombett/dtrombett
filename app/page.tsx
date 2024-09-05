import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import { faRedditAlien } from "@fortawesome/free-brands-svg-icons/faRedditAlien";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import Avatar from "@images/sissi.webp";
import { Courier_Prime } from "next/font/google";
import Image from "next/image";
import Social from "./Social";

const font = Courier_Prime({
	subsets: ["latin"],
	display: "swap",
	weight: "700",
});

export const Home = () => {
	return (
		<>
			<Image
				alt="D Trombett avatar"
				src={Avatar}
				priority
				className="rounded-full w-36 h-auto mb-5 mt-8"
			/>
			<h1 className={`${font.className} text-4xl sm:text-5xl`}>D Trombett</h1>
			<div className="flex flex-col my-4 text-2xl text-center">
				<span className="py-px">
					Hi, I'm <span className="font-bold">Davide Trombetta</span>, alias{" "}
					<span className="font-bold">D Trombett</span>, and she's{" "}
					<span className="font-bold">Sissi</span>!
				</span>
				<span className="py-px">
					I mainly work on back end and full stack{" "}
					<span className="font-bold">TypeScript</span> projects.
				</span>
				<span className="py-px">
					Check below my main projects and the tools I'm experienced with.
				</span>
			</div>
			<div className="text-lg md:my-4 flex flex-col md:flex-row">
				<Social
					href="https://github.com/dtrombett"
					icon={faGithub}
					text="@DTrombett"
				/>
				<Social
					href="https://reddit.com/u/dtrombett"
					icon={faRedditAlien}
					text="u/DTrombett"
				/>
				<Social
					href="https://linkedin.com/in/dtrombett"
					icon={faLinkedinIn}
					text="in/dtrombett"
				/>
				{/* <Social
            href="https://discord.com/users/597505862449496065"
            icon={faDiscord}
            text="@dtrombett"
          /> */}
				{/* <Social
					href="https://x.com/dtrombett"
					icon={faXTwitter}
					text="@dtrombett"
				/> */}
				{/* <Social
					href="https://youtube.com/@dtrombett"
					icon={faYoutube}
					text="@dtrombett"
				/> */}
				<Social
					href="mailto:d@trombett.org"
					icon={faEnvelope}
					text="d@trombett.org"
				/>
			</div>
			<div className="my-2">
				<h2 className={`${font.className} text-3xl sm:text-4xl px-4 my-2`}>
					Projects
				</h2>
				<div className="flex flex-col sm:flex-row"></div>
			</div>
		</>
	);
};

export default Home;
