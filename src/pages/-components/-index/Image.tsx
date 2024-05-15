import type { Images } from "@/types/models/landingpage";

export const Image = ({ title, largeImage, smallImage }: Images) => {
	return (
		<div className="portfolio-item">
			<div className="hover-bg">
				{" "}
				<a href={largeImage} title={title} data-lightbox-gallery="gallery1">
					<div className="hover-text">
						<h4>{title}</h4>
					</div>
					<img src={smallImage} className="img-responsive" alt={title} />{" "}
				</a>{" "}
			</div>
		</div>
	);
};
