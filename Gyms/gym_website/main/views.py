from django.shortcuts import render, redirect
from .models import JoinUs

# Home page
def home(request):
    return render(request, 'main/home.html')

# Try us page
def try_us(request):
    return render(request, 'main/tryus.html')

# Join Us page (handles both GET and POST)
def joinus_view(request):
    if request.method == 'POST':
        # Retrieve form data
        first_name = request.POST.get('firstName')
        last_name = request.POST.get('lastName')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        class_type = request.POST.get('classType')
        consent = bool(request.POST.get('consent'))

        # Save to database
        JoinUs.objects.create(
            first_name=first_name,
            last_name=last_name,
            email=email,
            phone=phone,
            class_type=class_type,
            consent=consent
        )

        # Redirect to success page
        return redirect('success')

    # Render the form on GET
    return render(request, 'main/joinus.html')

# Personal training page
def personal_training(request):
    return render(request, 'main/personaltraining.html')

# Classes page
def classes(request):
    return render(request, 'main/classes.html')

# Offers page
def offers(request):
    return render(request, 'main/offers.html')

# Location page
def location(request):
    return render(request, 'main/location.html')

# Success page after form submission
def success(request):
    return render(request, 'main/success.html')
