from rest_framework import serializers
from ..models import Genome


class GenomeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genome
        fields = ('id', 'accession',)
