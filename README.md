# Frontend Mentor - IP address tracker solution

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - IP address tracker solution](#frontend-mentor---ip-address-tracker-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Useful resources](#useful-resources)
  - [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Screenshot

![IpTracker](./src/assets/IpTracker.png)


### Links

- Solution URL: [Repository](https://github.com/Miller1999/ipTracker)
- Live Site URL: [IpTracker](https://ip-tracker-roan-delta.vercel.app/)

## My process

### Built with

- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Vite](https://vitejs.dev/) - React framework
- [SASS](https://sass-lang.com/) - For styles
- [LeafletJS](https://leafletjs.com/) - For Map
- [IP Geolocation API](https://geo.ipify.org/docs) - For IPs


### What I learned

I've really learned a ton from this project! I mean, I've never really messed around with maps or juggled two APIs at once before. It's been a wild ride, but super rewarding!

``` jsx
const Map = ({ geolocation }) => {
	const lat = geolocation?.location.lat;
	const lng = geolocation?.location.lng;
	const customIcon = new Icon({
		iconUrl: "https://www.svgrepo.com/show/476893/marker.svg",
		iconSize: [50, 50],
	});
	return (
		<main id="map">
			<MapContainer center={[lat, lng]} zoom={13}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={[lat, lng]} icon={customIcon}></Marker>
			</MapContainer>
		</main>
	);
};
```

### Useful resources

- [LeafletJS with React](https://www.youtube.com/watch?v=jD6813wGdBA) - This helped me for use leaflet with React 


## Author

- Website - [Miller Arias](https://miller-arias-dev.vercel.app/)
- Frontend Mentor - [@Miller1999](https://www.frontendmentor.io/profile/Miller1999)
- Twitter - [@miller_arias](https://twitter.com/miller_arias)
- Github - [@Miller1999](https://github.com/Miller1999)