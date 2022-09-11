from rest_framework import viewsets
from rest_framework import permissions

from ..models import Alignment
from ..serializers.alignment import AlignmentSerializer


class AlignmentViewSet(viewsets.ModelViewSet):
    serializer_class = AlignmentSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Alignment.objects.filter(author=user)

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)
