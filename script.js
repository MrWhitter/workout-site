// JavaScript for interactive features and image handling

// Example data for workouts
const workouts = [
    {
        title: "Strength Training",
        description: "Build muscle and increase strength with our tailored strength training programs.",
        image: "images/strength-training.jpg"
    },
    {
        title: "Cardio Workouts",
        description: "Improve cardiovascular health and burn calories with our effective cardio workouts.",
        image: "images/cardio-workouts.jpg"
    },
    {
        title: "Weight Loss Training",
        description: "Achieve your weight loss goals with personalized weight loss training routines.",
        image: "images/weight-loss-training.jpg"
    }
];

// Function to display workouts
function displayWorkouts() {
    const workoutContainer = document.getElementById('workouts');

    workouts.forEach(workout => {
        const workoutDiv = document.createElement('div');
        workoutDiv.classList.add('workout');

        const workoutImage = document.createElement('img');
        workoutImage.src = workout.image;
        workoutImage.alt = workout.title;
        workoutDiv.appendChild(workoutImage);

        const workoutInfo = document.createElement('div');
        workoutInfo.classList.add('workout-info');

        const workoutTitle = document.createElement('h3');
        workoutTitle.textContent = workout.title;
        workoutInfo.appendChild(workoutTitle);

        const workoutDescription = document.createElement('p');
        workoutDescription.textContent = workout.description;
        workoutInfo.appendChild(workoutDescription);

        workoutDiv.appendChild(workoutInfo);
        workoutContainer.appendChild(workoutDiv);
    });
}

// Call function to display workouts when page loads
document.addEventListener('DOMContentLoaded', displayWorkouts);
