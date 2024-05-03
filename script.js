const passwordInput = document.getElementById("passwordInput");
const strengthBar = document.querySelector(".strength-bar");
const strengthText = document.getElementById("strengthText");
const strengthDescription = document.getElementById("strengthDescription");

function checkPasswordStrength(password) {
  const strength = {
    score: 0,
    messages: [],
  };

  // Check password length (minimum 8 characters)
  if (password.length >= 8) {
    strength.score++;
  } else {
    strength.messages.push("Password is too short.");
  }

  // Check for uppercase, lowercase, numbers, and symbols
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumbers = /[0-9]/.test(password);
  const hasSymbols = /[^a-zA-Z0-9]/.test(password);

  if (hasUppercase) {
    strength.score++;
  } else {
    strength.messages.push("Password should include uppercase letters.");
  }

  if (hasLowercase) {
    strength.score++;
  } else {
    strength.messages.push("Password should include lowercase letters.");
  }

  if (hasNumbers) {
    strength.score++;
  } else {
    strength.messages.push("Password should include numbers.");
  }

  if (hasSymbols) {
    strength.score++;
  } else {
    strength.messages.push("Password should include symbols.");
  }

  // Update strength bar and text based on score
  const width = (strength.score / 4) * 100; // 4 = maximum score
  strengthBar.style.width = `${width}%`;

  switch (strength.score) {
    case 0:
      strengthText.textContent = "Strength: Weak";
      strengthDescription.textContent = "";
      break;
    case 1:
      strengthText.textContent = "Strength: Weak";
      strengthDescription.textContent = "Consider adding more complexity.";
      break;
    case 2:
      strengthText.textContent = "Strength: Medium";
      strengthDescription.textContent = "Add one more complexity type for better strength.";
      break;
    case 3:
      strengthText.textContent = "Strength: Strong";
      strengthDescription.textContent = "Good password!";
      break;
    case 4:
      strengthText.textContent = "Strength: Very Strong";
      strengthDescription.textContent = "Excellent password!";
      break;
    default:
      strengthText.textContent = "Strength: Unknown";
      strengthDescription.textContent = "";
  }

  // Update description with specific recommendations based on messages
  if (strength.messages.length > 0) {
    strengthDescription.textContent = "Your password could be stronger by: " + strength.messages.join(", ");
  }
}

passwordInput.addEventListener("input", function() {
  const password = this.value;
  checkPasswordStrength(password);
});
