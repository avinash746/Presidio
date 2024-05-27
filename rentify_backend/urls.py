from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from properties.views import PropertyViewSet, UserRegisterView, UserLoginView
from django.shortcuts import redirect


router = DefaultRouter()
router.register(r'properties', PropertyViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/register/', UserRegisterView.as_view(), name='register'),
    path('api/login/', UserLoginView.as_view(), name='login'),
    # Redirect root URL to API documentation
    path('', lambda request: redirect('/api/')),
]
