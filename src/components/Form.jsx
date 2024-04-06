const Form = ({ setValue, fetchGeolocation, isLoading }) => {
	const handleSubmit = (event) => {
		event.preventDefault(); // Evitar el envío del formulario
		fetchGeolocation(); // Realizar la búsqueda
	};
	return (
		<form className="form" onSubmit={handleSubmit}>
			<input
				placeholder="Search for any IP address or domain IP"
				onChange={(e) => {
					setValue(e.target.value);
				}}
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						fetchGeolocation();
					}
				}}
			/>
			<button onClick={fetchGeolocation} disabled={isLoading}>
				<img
					src="https://www.svgrepo.com/show/486236/right-arrow-backup-2.svg"
					alt="left"
				/>
			</button>
		</form>
	);
};

export default Form;
