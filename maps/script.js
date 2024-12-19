let map;

function initAppointmentMap() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const userLat = position.coords.latitude;
                const userLng = position.coords.longitude;

                const userLocation = { lat: userLat, lng: userLng };

                map = new google.maps.Map(document.getElementById('map'), {
                    center: userLocation,
                    zoom: 14
                });

                new google.maps.Marker({
                    position: userLocation,
                    map: map,
                    title: "You are here"
                });
                
                // Simulate nearby healthcare providers
                const providers = [
                    { name: "Central Clinic", lat: userLat + 0.01, lng: userLng + 0.01 },
                    { name: "Downtown Hospital", lat: userLat - 0.02, lng: userLng + 0.015 },
                    { name: "Health Center East", lat: userLat + 0.015, lng: userLng - 0.01 }
                ];

                providers.forEach(provider => {
                    new google.maps.Marker({
                        position: { lat: provider.lat, lng: provider.lng },
                        map: map,
                        title: provider.name
                    });
                });
            },
            () => alert('Unable to access your location.')
        );
    } else {
        alert('Geolocation is not supported by your browser.');
    }
}

function bookAppointment() {
    const provider = document.getElementById('provider').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    if (date && time) {
        alert(`Appointment booked with ${provider} on ${date} at ${time}`);
    } else {
        alert('Please fill out all fields to book an appointment.');
    }
}
