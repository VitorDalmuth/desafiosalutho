from django.urls import path
from .views import menor_numero_divisivel

urlpatterns = [
    path('calcular/<int:x>/<int:y>/', menor_numero_divisivel),
]