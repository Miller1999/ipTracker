const Card = () => {
	return (
		<article className="card">
			<div>
				<p>IP ADDRESS</p>
				<span>192.212.174.101</span>
			</div>
			<div>
				<p>LOCATION</p>
				<span>Brooklyn, NY 10001</span>
			</div>
			<div>
				<p>TIMEZONE</p>
				<span>UTC -05:00</span>
			</div>
			<div>
				<p>ISP</p>
				<span>SpaceX Starlink</span>
			</div>
		</article>
	);
};

export default Card;
