from django.shortcuts import render # type: ignore

def home(request):
    return render(request, 'base.html')
