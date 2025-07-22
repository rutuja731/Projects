document.addEventListener('DOMContentLoaded', function () {
  const checkbox = document.getElementById('consentCheckbox');
  const submitBtn = document.getElementById('submitBtn');

  if (checkbox && submitBtn) {
    checkbox.addEventListener('change', function () {
      submitBtn.disabled = !checkbox.checked;
    });
  } else {
    console.error("Checkbox or Submit button not found!");
  }
});
