// Define the vote counts
var votes = {
  option1: 0,
  option2: 0,
  option3: 0
};

// Load the votes from local storage if available
var storedVotes = localStorage.getItem("votes");
if (storedVotes) {
  votes = JSON.parse(storedVotes);
  updateResults();
}

// Function to update the vote counts and display the results
function updateResults() {
  var resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";
  
  for (var option in votes) {
    var count = votes[option];
    var p = document.createElement("p");
    p.innerHTML = option + ": " + count;
    resultDiv.appendChild(p);
  }
  
  // Save the votes to local storage
  localStorage.setItem("votes", JSON.stringify(votes));
}

// Function to handle the vote
function vote() {
  var selectedOption = document.querySelector('input[name="option"]:checked');
  
  if (selectedOption) {
    var optionValue = selectedOption.value;
    
    // Increment the vote count for the selected option
    if (votes.hasOwnProperty(optionValue)) {
      votes[optionValue]++;
    }
    
    // Update the results
    updateResults();
    
    // Clear the selection
    selectedOption.checked = false;
  }
}

// Function to reset the votes
function resetVotes() {
  votes = {
    option1: 0,
    option2: 0,
    option3: 0
  };
  
  // Update the results
  updateResults();
}

// Function to toggle the visibility of the results
function toggleResults() {
  var resultDiv = document.getElementById("result");
  
  if (resultDiv.style.display === "none") {
    resultDiv.style.display = "block";
  } else {
    resultDiv.style.display = "none";
  }
}

// Check the initial state of the results and set the toggle button accordingly
var resultDiv = document.getElementById("result");
var toggleButton = document.getElementById("toggleButton");
if (resultDiv.style.display === "none") {
  toggleButton.innerHTML = "Show Results";
} else {
  toggleButton.innerHTML = "Hide Results";
}

// Call updateResults() initially even if no votes have been cast
updateResults();
