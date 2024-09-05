import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Social = ({
	icon,
	href,
	text,
}: {
	icon: IconProp;
	href: string;
	text: string;
}) => (
	<div className="flex md:mx-4 my-2 md:my-0">
		<FontAwesomeIcon icon={icon} className="w-8 h-8 inline mr-2 pb-px" />{" "}
		<a href={href} className="pt-px hover:underline" target="_blank">
			{text}
		</a>
	</div>
);

export default Social;
