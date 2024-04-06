const Card = ({ geolocation }) => {
	return (
		<article className="card">
			<div>
				<p>IP ADDRESS</p>
				<span>{geolocation?.ip}</span>
			</div>
			<div>
				<p>LOCATION</p>
				<span>
					{geolocation?.location.city}, {geolocation?.location.country}
					{geolocation?.location.postalCode}
				</span>
			</div>
			<div>
				<p>TIMEZONE</p>
				<span>UTC {geolocation?.location.timezone}</span>
			</div>
			<div>
				<p>ISP</p>
				<span>{geolocation?.isp}</span>
			</div>
		</article>
	);
};

export default Card;
