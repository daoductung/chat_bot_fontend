from django.core.files.storage import FileSystemStorage
from django.shortcuts import render, redirect
from django.views.generic import TemplateView, View


class DisplayView(View):
    template_name = "index.html"

    def get(self, request, *args, **kwargs):
        return render(request, self.template_name)
