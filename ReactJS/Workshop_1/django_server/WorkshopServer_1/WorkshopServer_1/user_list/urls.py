from django.urls import path
from WorkshopServer_1.user_list.views import UserExtensionView, UserExtensionDetailedView

urlpatterns = [
    path("users/", UserExtensionView.as_view()),
    path("users/<str:uid>/", UserExtensionDetailedView.as_view())
]