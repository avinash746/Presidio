from django.db import models

class Property(models.Model):
    owner = models.ForeignKey('auth.User', on_delete=models.CASCADE, blank=True, null=True)
    title = models.CharField(max_length=255)
    description = models.TextField()
    place = models.CharField(max_length=255)
    area = models.FloatField()
    bedrooms = models.IntegerField()
    bathrooms = models.IntegerField()
    hospitals_nearby = models.CharField(max_length=255)
    colleges_nearby = models.CharField(max_length=255)

    def __str__(self):
        return self.title
