from django.db import models

# Create your models here.
from django.db import models

class JoinUs(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField()
    phone = models.CharField(max_length=10)
    class_type = models.CharField(max_length=50)
    consent = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
