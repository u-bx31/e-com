import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";

export default async function blur({ src, childClassName, parentClassName }: any) {
	const buffer = await fetch(src).then(async (res) => {
		return Buffer.from(await res.arrayBuffer());
	});

	const { base64 } = await getPlaiceholder(buffer);

	return (
		<div className={parentClassName}>
			<Image
				src={src}
				fill
				alt="image"
				placeholder="blur"
				className={childClassName}
				blurDataURL={base64}
			/>
		</div>
	);
}
