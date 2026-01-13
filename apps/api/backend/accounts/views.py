from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .serialisers import RegisterSerializer

# Create your views here.
class RegisterView(APIView):
    def post(self, request):
        serialiser = RegisterSerializer(data=request.data)
        if serialiser.is_valid():
            user = serialiser.save()
            return Response({"message": "Account registered successfully!"}, status=status.HTTP_201_CREATED)
        return Response(serialiser.errors, status=status.HTTP_400_BAD_REQUEST)

class LoginView(TokenObtainPairView):
    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)

        data = response.data
        access = data.get('access')
        refresh = data.get('refresh')

        response.data = {"message": "Login successful!"}

        response.set_cookie(
            'access',
            access,
            httponly=True,
            secure=True,
            samesite='None'
        )

        response.set_cookie(
            'refresh',
            refresh,
            httponly=True,
            secure=True,
            samesite='None'
        )

        return response
    
class RefreshView(TokenRefreshView):
    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)

        access = response.data.get('access')
        response.data = {"message": "Token refreshed successfully!"}

        response.set_cookie(
            'access',
            access,
            httponly=True,
            secure=True,
            samesite='None'
        )

        return response
    
class LogoutView(APIView):
    def post(self, request):
        response = Response({"message": "Logout successful!"}, status=status.HTTP_200_OK)
        response.delete_cookie('access')
        response.delete_cookie('refresh')

        return response
    
class MeView(APIView):
    def get(self, request):
        user = request.user
        if user.is_authenticated:
            return Response({
                'id': user.id,
                "username": user.username,
                "email": user.email,
            }, status=status.HTTP_200_OK)
        return Response({"user": None})
