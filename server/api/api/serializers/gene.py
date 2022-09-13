from rest_framework import serializers

from .genome import GenomeSerializer
from ..models import Gene


class GeneSerializer(serializers.ModelSerializer):
    genome = GenomeSerializer(many=False, read_only=True)

    class Meta:
        model = Gene
        fields = ('id', 'genome', 'sequence', 'name', 'protein', 'db_xref', 'protein_id')
